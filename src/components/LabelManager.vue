<template lang="pug">
.label-manager
  .ui.segment
    .ui.header
      i.tags.icon
      | 標籤管理
    
    .ui.form
      .field
        label 新增標籤
        .ui.action.input
          input(
            v-model="newLabel.name"
            placeholder="標籤名稱"
            @keyup.enter="addNewLabel"
          )
          select.ui.dropdown(v-model="newLabel.color")
            option(value="") 選擇顏色
            option(v-for="(colorCode, colorName) in LABEL_COLORS" :key="colorName" :value="colorName") {{ colorName }}
          button.ui.primary.button(@click="addNewLabel" :disabled="!newLabel.name || !newLabel.color")
            i.plus.icon
            | 新增
    
    .ui.divider
    
    .label-list
      .ui.header 現有標籤
      .ui.message(v-if="loading") 載入中...
      .ui.error.message(v-if="error") {{ error }}
      
      .ui.cards
        .card(v-for="label in labels" :key="label.id")
          .content
            .header
              span.ui.label(:class="label.color") {{ label.name }}
            .description(v-if="label.description") {{ label.description }}
            .extra
              i.icon(v-if="label.icon" :class="label.icon")
              | ID: {{ label.id }}
          
          .extra.content
            .ui.two.buttons
              button.ui.basic.blue.button(@click="editLabel(label)")
                i.edit.icon
                | 編輯
              button.ui.basic.red.button(@click="deleteLabel(label.id)")
                i.trash.icon
                | 刪除
    
    // 編輯標籤的 Modal
    .ui.modal(ref="editModal")
      .header 編輯標籤
      .content
        .ui.form(v-if="editingLabel")
          .field
            label 標籤名稱
            input(v-model="editingLabel.name")
          .field
            label 顏色
            select.ui.dropdown(v-model="editingLabel.color")
              option(v-for="(colorCode, colorName) in LABEL_COLORS" :key="colorName" :value="colorName") {{ colorName }}
          .field
            label 描述
            textarea(v-model="editingLabel.description" rows="2")
          .field
            label 圖標 (Semantic UI 圖標名稱)
            input(v-model="editingLabel.icon" placeholder="例如: bug, lightbulb")
      .actions
        button.ui.cancel.button 取消
        button.ui.primary.button(@click="saveEditedLabel") 儲存
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useLabels } from '@/composables/useLabels';
import { LABEL_COLORS, type LabelConfig } from '@/data/labels_config';

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
    
    const editingLabel = ref<LabelConfig | null>(null);
    const editModal = ref<HTMLElement | null>(null);

    const addNewLabel = async () => {
      if (!newLabel.value.name || !newLabel.value.color) return;
      
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

    const editLabel = (label: LabelConfig) => {
      editingLabel.value = { ...label };
      // 這裡需要使用 Semantic UI 的 modal 方法
      // $(editModal.value).modal('show');
    };

    const saveEditedLabel = async () => {
      if (!editingLabel.value) return;
      
      await updateLabel(editingLabel.value.id, {
        name: editingLabel.value.name,
        color: editingLabel.value.color,
        description: editingLabel.value.description,
        icon: editingLabel.value.icon
      });
      
      editingLabel.value = null;
      // $(editModal.value).modal('hide');
    };

    const deleteLabel = async (labelId: string) => {
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
</script>

<style scoped>
.label-manager {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.label-list {
  margin-top: 2rem;
}

.ui.cards .card {
  margin: 0.5rem;
}

.ui.label {
  margin-bottom: 0.5rem;
}
</style> 