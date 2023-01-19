<template>
<div class="navbar">
  <h1 @click="$router.push('/')">Салам алейкум</h1>
  <div class="navbar__buttons">
    <button-ui @click="$router.push('/posts')">Посты</button-ui>
    <button-ui @click="$router.push('/about')" style="margin-left: 10px" to="/about">О сайте</button-ui>
  </div>
</div>
</template>

<script>
export default {
  name: "NavBar",
}
</script>

<style scoped>
.navbar{
  display: flex;
  box-shadow: 2px 2px 2px 4px gray;
  background: lightgray;
  height: 50px;
  align-items: center;
  padding: 0 15px;
}
.navbar__buttons{
  margin-left: auto;
}
</style>