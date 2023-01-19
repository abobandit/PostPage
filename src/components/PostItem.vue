<template>
  <div class="post">
    <div>
      <div>{{ post.id }}</div>
      <div><strong>Название: </strong>{{ post.title }}</div>
      <div><strong>Описание: </strong>{{ post.body }}</div>
    </div>
    <div class="post__buttons">
      <button-ui
          @click="$router.push(`/posts/${post.id}`)">Открыть</button-ui>
      <button-ui
          @click="this.$emit('remove',post)"
      >Удалить</button-ui>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostItem",
  props: {
    post: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
.post {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  border: 2px solid teal;
  padding: 15px;
}
.post__buttons{
  display: flex;
}
</style>