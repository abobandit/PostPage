<template>
  <form @submit.prevent>
    <input-ui
        v-focus
        v-model="post.title"
        type="text"
        placeholder="Название"/>
    <input-ui
        v-model="post.body"
        type="text"
        placeholder="Описание"/>
    <button-ui  @click="createPost" style="margin-top:15px;align-self: flex-end">Создать</button-ui>
  </form>
</template>

<script>
export default {
  name: "PostForm",
  data() {
    return {
      post: {
        title: '',
        body: '',
      }
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now()
      this.$emit('create', this.post)
      this.post = {
        title: '',
        body: '',
      }
    }
  }
}


</script>

<style scoped>

form {
  display: flex;
  flex-direction: column;
}


</style>