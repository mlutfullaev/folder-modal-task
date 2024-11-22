<script lang="ts" setup="">
import type { IFolder } from '@/entities/folder/types'
import { computed, ref } from 'vue'

const props = defineProps<{
  node: IFolder
  selected: number
}>()
const emit = defineEmits<{
  (e: 'select', id: number): void
}>()

const isOpen = ref(false)
const hasChildren = computed(() => props.node.folders.length)
const isSelected = computed(() => props.node.id === props.selected)

const toggleNode = () => {
  if (hasChildren.value) {
    isOpen.value = !isOpen.value
  }
}
const selectNode = () => {
  emit('select', props.node.id)
}
</script>

<template>
  <div class="folder-node">
    <div class="folder-node-label">
      <button v-if="hasChildren" class="folder-node-toggle" @click="toggleNode">
        {{ isOpen ? '-' : '+' }}
      </button>
      <button :class="{ selected: isSelected }" @click.stop="selectNode">
        {{ node.name }}
      </button>
    </div>
    <div v-if="isOpen" class="folder-children">
      <a
        class="file"
        v-for="file
         in node.files"
        :key="file.id"
        :href="file.source"
        target="_blank"
      >
        {{file.name}}
      </a>
      <FolderNode
        v-for="child in node.folders"
        :key="child.id"
        :node="child"
        :selected="selected"
        @select="$emit('select', $event)"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.folder-node {
  padding: 5px 0;

  &-label {
    display: flex;
    align-items: center;
    gap: 5px;

    .selected {
      color: #0267c6;
    }
  }
  &-toggle {
    width: 17px;
    height: 17px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #0267c6;
    border-radius: 2px;
    color: #fff;
  }
}
.file {
  color: #000;
}
.folder-children {
  margin-left: 20px;
  padding-top: 4px;
}
</style>
