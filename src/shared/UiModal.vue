<script lang="ts" setup="">

defineProps<{
  visible: boolean,
  className?: string,
  title?: string,
}>()
defineEmits<{
  close: () => void,
}>()
</script>

<template>
 <div class="ui-modal" :class="[className, {visible: visible}]" @click="$emit('close')">
   <div @click.stop class="ui-modal-content">
     <div class="ui-modal-header">
       <h2 v-if="title">{{title}}</h2>
       <button class="ui-modal-close" @click="$emit('close')">&times;</button>
     </div>
     <slot></slot>
   </div>
 </div>
</template>

<style lang="scss" scoped>
.ui-modal {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  visibility: hidden;

  &.visible {
    visibility: visible;
  }
  &-content {
    padding: 16px;
    border-radius: 6px;
    background-color: #fff;
    min-width: 200px;
  }
  &-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    h2 {
      font-size: 24px;
    }
  }
  &-close {
    margin-left: auto;
    color: #0267c6;
    font-size: 25px;
    font-weight: 300;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
}
</style>
