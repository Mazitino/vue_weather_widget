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
                @resort="resortCity"
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
            location: null,
            gettingLocation: false,
            errorStr: null,
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
                this.addCity(responce.data);
            }catch (e){
                alert('Error')
            }finally {
                this.isLoading = false;
            }
        },
        async fetchWeather2(){
            try {
                this.isLoading = true;
                const responce = await axios.get(`${this.url}weather`, {
                    params: {
                        lat: this.location.coords.latitude,
                        lon: this.location.coords.longitude,
                        units: this.unit,
                        appid: this.key
                    }
                });
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
            this.saveLocal();
            //this.dialogVisible = false;
        },
        removeCity(card){
            this.cards = this.cards.filter(p => p.id !== card.id)
            this.saveLocal();
        },
        showDialog(){
            this.dialogVisible = true;
        },
        resortCity(ca){
            console.log("app -----");
            console.log(ca);
            this.cards = ca;
            this.saveLocal();
        },
        async getLocation() {
            return new Promise((resolve, reject) => {

                if(!("geolocation" in navigator)) {
                reject(new Error('Geolocation is not available.'));
                }

                navigator.geolocation.getCurrentPosition(pos => {
                resolve(pos);
                }, err => {
                reject(err);
                });

            });
        },
        async locateMe() {
            this.gettingLocation = true;
            try {
                this.gettingLocation = false;
                this.location = await this.getLocation();
            } catch(e) {
                this.gettingLocation = false;
                this.errorStr = e.message;
            }finally {
                this.fetchWeather2();
            }
        },
        saveLocal() {
            console.log("Saving new value of cards (citys)");
            const parsed = JSON.stringify(this.cards);
            localStorage.setItem('cards', parsed);
        }
    },
    mounted(){
        if (localStorage.getItem('cards')) {
            try {
                this.cards = JSON.parse(localStorage.getItem('cards'));
            } catch(e) {
                localStorage.removeItem('cards');
            }
        }else{
            this.locateMe();
        }
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