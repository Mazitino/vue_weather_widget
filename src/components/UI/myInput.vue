<template>
  <input 
      :value="modelValue" 
      @input="updateInput" 
      class="input" 
      type="text" 
    />
</template>

<script>
export default {
    name: 'my-input',
    props: {
      modelValue: [String],
    },
    methods: {
      updateInput(event) {
        this.$emit('update:modelValue', event.target.value)
      }
    }
}
</script>

<style>
.input {
    align-self: auto;
    width: 100%;
    border: 1px solid teal;
    padding: 18px 15px;
    margin: 5px;
    font-size: 16px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px -3px #000000;
    }
</style>