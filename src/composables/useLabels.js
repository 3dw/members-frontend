import { ref, onMounted } from 'vue';
import { onValue, ref as dbRef, set } from 'firebase/database';
import { database } from '@/firebase';
import { ALL_LABELS } from '@/data/labels_config';
export function useLabels() {
    const labels = ref([]);
    const loading = ref(false);
    const error = ref(null);
    // 從 Firebase 載入標籤
    const loadLabelsFromFirebase = () => {
        const labelsRef = dbRef(database, 'system/labels');
        onValue(labelsRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                labels.value = Object.values(data);
            }
            else {
                // 如果 Firebase 中沒有標籤，使用預設標籤
                labels.value = ALL_LABELS;
                initializeDefaultLabels();
            }
        });
    };
    // 初始化預設標籤到 Firebase
    const initializeDefaultLabels = async () => {
        const labelsRef = dbRef(database, 'system/labels');
        const labelsObject = ALL_LABELS.reduce((acc, label) => {
            acc[label.id] = label;
            return acc;
        }, {});
        await set(labelsRef, labelsObject);
    };
    // 新增標籤
    const addLabel = async (labelData) => {
        loading.value = true;
        error.value = null;
        try {
            const newLabel = {
                id: `label_${Date.now()}`,
                ...labelData
            };
            const labelRef = dbRef(database, `system/labels/${newLabel.id}`);
            await set(labelRef, newLabel);
            console.log('標籤新增成功');
        }
        catch (err) {
            error.value = '新增標籤失敗';
            console.error('新增標籤失敗:', err);
        }
        finally {
            loading.value = false;
        }
    };
    // 更新標籤
    const updateLabel = async (labelId, updates) => {
        loading.value = true;
        error.value = null;
        try {
            const labelRef = dbRef(database, `system/labels/${labelId}`);
            const currentLabel = labels.value.find(l => l.id === labelId);
            if (currentLabel) {
                const updatedLabel = { ...currentLabel, ...updates };
                await set(labelRef, updatedLabel);
                console.log('標籤更新成功');
            }
        }
        catch (err) {
            error.value = '更新標籤失敗';
            console.error('更新標籤失敗:', err);
        }
        finally {
            loading.value = false;
        }
    };
    // 刪除標籤
    const deleteLabel = async (labelId) => {
        loading.value = true;
        error.value = null;
        try {
            const labelRef = dbRef(database, `system/labels/${labelId}`);
            await set(labelRef, null);
            console.log('標籤刪除成功');
        }
        catch (err) {
            error.value = '刪除標籤失敗';
            console.error('刪除標籤失敗:', err);
        }
        finally {
            loading.value = false;
        }
    };
    // 根據 ID 獲取標籤
    const getLabelById = (id) => {
        return labels.value.find(label => label.id === id);
    };
    // 根據顏色獲取標籤
    const getLabelsByColor = (color) => {
        return labels.value.filter(label => label.color === color);
    };
    onMounted(() => {
        loadLabelsFromFirebase();
    });
    return {
        labels,
        loading,
        error,
        addLabel,
        updateLabel,
        deleteLabel,
        getLabelById,
        getLabelsByColor,
        loadLabelsFromFirebase
    };
}
//# sourceMappingURL=useLabels.js.map