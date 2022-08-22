<template>
    <form @submit.prevent>
        <my-input 
            v-model="city"
            placeholder="City.."
        />
        <my-button 
             
            @click="addCity"
        >
            Add city
        </my-button>
    </form>
</template>


<script>
    export default {
        data() {
            return {
                city: '', 
            }
        },
        methods: {
            addCity() {
                this.$emit('addNewCity', this.city);
                this.city = '';
            }
        }
    }
</script>

<style scoped>

form{
    display: flex;
    flex-direction: column;
   
}


</style>