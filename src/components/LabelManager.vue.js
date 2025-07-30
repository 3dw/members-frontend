import { defineComponent, ref } from 'vue';
import { useLabels } from '@/composables/useLabels';
import { LABEL_COLORS } from '@/data/labels_config';
export default defineComponent({
    name: 'LabelManager',
    setup() {
        const { labels, loading, error, addLabel, updateLabel, deleteLabel: removeLabel } = useLabels();
        const newLabel = ref({
            name: '',
            color: '',
            description: '',
            icon: ''
        });
        const editingLabel = ref(null);
        const editModal = ref(null);
        const addNewLabel = async () => {
            if (!newLabel.value.name || !newLabel.value.color)
                return;
            await addLabel({
                name: newLabel.value.name,
                color: newLabel.value.color,
                description: newLabel.value.description || undefined,
                icon: newLabel.value.icon || undefined
            });
            // 清空表單
            newLabel.value = {
                name: '',
                color: '',
                description: '',
                icon: ''
            };
        };
        const editLabel = (label) => {
            editingLabel.value = { ...label };
            // 這裡需要使用 Semantic UI 的 modal 方法
            // $(editModal.value).modal('show');
        };
        const saveEditedLabel = async () => {
            if (!editingLabel.value)
                return;
            await updateLabel(editingLabel.value.id, {
                name: editingLabel.value.name,
                color: editingLabel.value.color,
                description: editingLabel.value.description,
                icon: editingLabel.value.icon
            });
            editingLabel.value = null;
            // $(editModal.value).modal('hide');
        };
        const deleteLabel = async (labelId) => {
            if (confirm('確定要刪除這個標籤嗎？')) {
                await removeLabel(labelId);
            }
        };
        return {
            labels,
            loading,
            error,
            newLabel,
            editingLabel,
            editModal,
            LABEL_COLORS,
            addNewLabel,
            editLabel,
            saveEditedLabel,
            deleteLabel
        };
    }
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    __VLS_styleScopedClasses['ui'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
let __VLS_self;
//# sourceMappingURL=LabelManager.vue.js.map