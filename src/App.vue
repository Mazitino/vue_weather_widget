<template>
    <div class="app">
       
       
        <my-button 
            @click="showDialog"
            >
            Settings
        </my-button>
        <card-list 
            :cards="cards"
            @remove="removeCity"
            v-if="!isLoading"
        />
        <div v-else>Loading...</div>
         <my-dialog v-model:show="dialogVisible">
            <card-list-small 
                :cards="cards"
                @remove="removeCity"
            />
            <card-form
            @addNewCity="this.fetchWeather"
            />
        </my-dialog>
    </div>
</template>

<script>
import axios from 'axios';
import cardList from "@/components/cardList";
import cardListSmall from "@/components/cardListSmall";
import cardForm from "@/components/cardForm";
export default {
    components: {
        cardForm, cardList, cardListSmall
    },
    data() {
        return {
            key: 'dba55fd614108fa2ca462f1c39c6a76b',
            url: 'https://api.openweathermap.org/data/2.5/',
            unit: 'metric',
            isLoading: false,
            cards: [],
            dialogVisible: false,
        }
    },
    methods: {
        async fetchWeather(city){
            try {
                this.isLoading = true;
                const responce = await axios.get(`${this.url}weather`, {
                    params: {
                        q:  city,
                        units: this.unit,
                        appid: this.key
                    }
                });
                
                //this.data = responce.data;
                this.addCity(responce.data);
            }catch (e){
                alert('Error')
            }finally {
                this.isLoading = false;
            }
        },
        addCity(data){
            
            const newCity = {
                id: Date.now(),
                city: data.name,
                data: data,
            }
            this.cards.push(newCity);
            this.dialogVisible = false;
        },
        removeCity(card){
            this.cards = this.cards.filter(p => p.id !== card.id)

        },
        showDialog(){
            this.dialogVisible = true;
        },
       

        
    },
    mounted(){
        this.fetchWeather("London");
        this.fetchWeather("Ufa");
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    font-family: 'montserrat', sans-serif;
    color:rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    align-items: center;
}
.app {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
}

</style>