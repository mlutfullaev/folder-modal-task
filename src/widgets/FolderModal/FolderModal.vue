<script lang="ts" setup="">
import UiModal from '@/shared/UiModal.vue'
import { onMounted, ref } from 'vue'
import type { IFolder } from '@/entities/folder/types'
import { mockFolders } from '@/entities/folder/mockApi'
import FolderNode from '@/widgets/FolderModal/FolderNode.vue'

defineProps<{
  visible: boolean
}>()
const emit = defineEmits<{
  (e: 'close'): void
  (e: 'select', folderId: number): void
}>()

const folders = ref<IFolder[]>([])
const selectedFolderId = ref<number>(0)

const handleSelect = (folderId: number) => {
  selectedFolderId.value = folderId
}

const closeModal = () => {
  selectedFolderId.value = 0
  emit('close')
}

const confirmSelection = () => {
  emit('select', selectedFolderId.value)
  closeModal()
}

onMounted(() => {
  folders.value = mockFolders
})
</script>

<template>
  <UiModal :visible="visible" @close="$emit('close')" title="Folders">
    <div class="content">
      <FolderNode
        v-for="folder in folders"
        :key="folder.id"
        :node="folder"
        :selected="selectedFolderId"
        @select="handleSelect"
      />
    </div>
    <div class="actions">
      <button @click="closeModal">Close</button>
      <button @click="confirmSelection">Ok</button>
    </div>
  </UiModal>
</template>

<style lang="scss" scoped>
.content {
  max-height: 300px;
  overflow-y: auto;
  margin: 10px 0;
}
.actions {
  display: flex;
  gap: 10px;

  button {
    background: #0267c6;
    padding: 6px 16px;
    color: #fff;
    border-radius: 4px;
  }
}
</style>
