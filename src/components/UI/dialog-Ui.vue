<template>
  <div class="dialog" v-if="show" @click.stop="hideDialog">
    <div @click.stop class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import toggleMixin from "@/mixins/toggleMixin";

export default {
  name: "DialogUi",
 mixins:[toggleMixin]
}
</script>

<style scoped>
.dialog {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  background: rgba(0, 0, 0, 0.5);
}

.dialog__content {
  margin: auto;
  padding: 20px;
  min-height: 30px;
  min-width: 500px;
  background: white;
  border-radius: 12px;
}
</style>