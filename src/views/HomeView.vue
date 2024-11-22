<script setup lang="ts">
import FolderModal from '@/widgets/FolderModal/FolderModal.vue'
import { ref } from 'vue'

const isFolderModalVisible = ref(false)
const handleFolderSelect = (folderId: number) => {
  console.log('Выбранная папка:', folderId);
};
</script>

<template>
  <main>
    <button @click="isFolderModalVisible = true">Open modal</button>
    <FolderModal :visible="isFolderModalVisible" @close="isFolderModalVisible = false" @select="handleFolderSelect" />
  </main>
</template>

<style scoped lang="scss">
main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  button {
    padding: 8px 25px;
    border: none;
    background: #0267c6;
    color: #fff;
    cursor: pointer;
  }
}
</style>
