<template>
    <div class="dialog" v-if="show"  @click.stop="hideDialog">
        <div @click.stop class="dialog_content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'my-dialog',
    props:{
        show:{
            type: Boolean,
            defaults: false
        }
    },
    methods:{
        hideDialog(){
            this.$emit('update:show', false)
        }
    }
}
</script>
<style>
.dialog {
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.61);
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   
    backdrop-filter: blur(2px);
    
}
.dialog_content {
    margin: auto;
    background: white;
    border-radius: 10px;
    min-height: 60px;
    min-width: 300px;
    padding: 20px;
    
}



</style>