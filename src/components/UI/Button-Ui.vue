<template>
<button  class="btn">
  <slot></slot>
</button>
</template>

<script>
export default {
  name: "ButtonUi"
}
</script>

<style scoped>
.btn {
  padding: 15px 20px;
  background: none;
  color: teal;
  border: 2px solid teal;
  cursor:pointer;
  margin:0;
}
</style>