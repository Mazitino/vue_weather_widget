<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'my-button'
  }
</script>

<style>
  .btn {
      align-self: center;
      margin: 5px;
      padding: 15px 30px;
      background: teal;
      color: rgb(248, 248, 248);
      border: 2px solid teal;

      border-radius: 5px;
      box-shadow: 0px 0px 5px -3px #000000;
      transition: all 0.5s ease;
  }
  .btn:hover {
    background: rgb(0, 65, 65);
    
  }
</style>