<template>
    <form @submit.prevent>
        
        <my-input 
            v-model="city"
            placeholder="City.."
            @keyup.enter="addCity"
        />
        <fa 
                icon="fa-solid fa-turn-up" 
                class="faIcon turn-up" 
                @click="addCity"
            />
    </form>
</template>


<script>
import myInput from '@/components/UI/myInput';
import { faTurnUp } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faTurnUp);
 
    export default {
        components: {
            myInput,
            'fa': FontAwesomeIcon,
            faTurnUp, 
        },
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
    flex-direction: row;
    
    justify-content: space-between;
    align-items: stretch;
   
}
.turn-up {
    margin: 5px 5px 5px 0px;
    padding: 20px 15px;
    cursor:pointer!important;
    
    align-self: flex-end;

    border: 1px solid teal;
    background: teal;
    
    border-radius: 5px;
    box-shadow: 0px 0px 5px -3px #000000;
    transition: all 0.5s ease;
}
.turn-up:hover {
    background: rgb(0, 65, 65);
}
.faIcon{

    color: rgb(248, 248, 248);
    font-size: 16px ;
    transition: all 0.3s ease;
}
.faIcon:hover{
    color:teal;
}


</style>