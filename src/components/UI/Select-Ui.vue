<template>
  <select style="height: 50px; padding: 0.5rem;margin-top: 2rem" :value="modelValue" @change="changeOptions">
    <option disabled value="">Выберите значение</option>
    <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "SelectUi",
  props: {
    modelValue: {
      type: String
    },
    options: {
      name: Array,
      default: () => [],
    }
  },
  methods: {
    changeOptions(evt) {
      this.$emit('update:modelValue', evt.target.value)
    }
  }
}
</script>

<style scoped>
select{
  background: white;
}
</style>