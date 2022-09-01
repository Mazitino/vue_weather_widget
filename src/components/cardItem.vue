<template>
    

    
    <div class="weatherCard">
        <span 
            @click="$emit('remove', card)"
            class="card_btns" 
            aria-hidden="true"
            >
                ✕
            </span>
            <div class="topCard">
                <div class="pngCard">
                    <img  v-bind:src="'http://openweathermap.org/img/wn/' + card.data.weather[0].icon + '@2x.png' "  />
                    
                </div>
                <div class="tempCard">
                    <div class="location">{{ card.city }} - {{ card.data.sys.country }} </div>
                    <div class="temp"> {{ card.data.main.temp }} °c </div>
                    <div class="location"> {{ card.data.weather[0].description  }}</div>
                </div>
            </div>

        <table class="descCard" cellpadding="0" cellspacing="0">
            <tbody>
                <tr class="allrow">
                    <td id="firstcol">
                        <fa 
                        icon="fa-solid fa-temperature-full" 
                        class="faIcon" 
                        />
                    </td>
                    <td id="secondcol">{{ card.data.main.feels_like }} °C</td>
                    <td id="thirdcol">
                        <fa 
                        icon="fa-solid fa-p" 
                        class="faIcon" 
                        />
                    </td>
                    <td id="forescol">{{ card.data.main.pressure }} hPa</td>
                </tr>
                <tr class="allrow"> 
                    <td id="firstcol">
                        <fa 
                        icon="fa-solid fa-temperature-arrow-up" 
                        class="faIcon" 
                        />
                    </td>
                    <td id="secondcol">{{ card.data.main.temp_max }} °C</td>
                    <td id="thirdcol">
                        <fa 
                        icon="fa-solid fa-wind" 
                        class="faIcon" 
                        />
                    </td>
                    <td id="forescol">{{ card.data.wind.speed }} m/s</td>
                </tr>
                <tr class="allrow">
                    <td id="firstcol">
                        <fa 
                        icon="fa-solid fa-temperature-arrow-down" 
                        class="faIcon" 
                        />
                    </td>
                    <td id="secondcol">{{ card.data.main.temp_min }} °C</td>
                    <td id="thirdcol">
                        <fa 
                        icon="fa-solid fa-cloud" 
                        class="faIcon" 
                        />
                    </td>
                    <td id="forescol">{{ card.data.clouds.all }}</td>
                </tr>
                <tr class="allrow">
                    <td id="firstcol">
                        <fa 
                        icon="fa-solid fa-droplet" 
                        class="faIcon" 
                        />
                    </td>
                    <td id="secondcol">{{ card.data.main.humidity }} %</td>
                    <td id="thirdcol">
                        <fa 
                        icon="fa-solid fa-eye" 
                        class="faIcon" 
                        />
                    </td>
                    <td id="forescol">{{ card.data.visibility }} m</td>
                </tr>
            </tbody>
        </table>
        
    </div> 
</template>

<script>
    import { faTemperatureFull } from '@fortawesome/free-solid-svg-icons'
    import { faTemperatureArrowUp } from '@fortawesome/free-solid-svg-icons'
    import { faTemperatureArrowDown } from '@fortawesome/free-solid-svg-icons'
    import { faDroplet } from '@fortawesome/free-solid-svg-icons'
    import { faP } from '@fortawesome/free-solid-svg-icons'
    import { faEye } from '@fortawesome/free-solid-svg-icons'
    import { faWind } from '@fortawesome/free-solid-svg-icons'
    import { faCloud } from '@fortawesome/free-solid-svg-icons'
    import { library } from '@fortawesome/fontawesome-svg-core'
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    library.add(
        faWind, 
        faCloud, 
        faEye, 
        faP, 
        faDroplet,
        faTemperatureArrowUp,
        faTemperatureArrowDown,
        faTemperatureFull


    );
    export default {

        props:{
            card: {
                type: Object,
                required: true,
            }

        },
        components: {
            'fa': FontAwesomeIcon,
            faWind, 
            faCloud,
            faEye,
            faP,
            faDroplet,
            faTemperatureArrowUp,
            faTemperatureArrowDown,
            faTemperatureFull
        },
    }
</script>

<style scoped>
.weatherCard{
    max-height: 600px;
    
    padding: 25px;
    margin: 15px;
    background-color: rgb(12, 12, 12);
    border-radius: 10px;
    box-shadow: 0px 0px 10px -3px #000000;
    text-align: center;
    display: block;
    position: relative;
    border: 1px solid teal;

}
.weatherCard .topCard {
    display: flex;
    margin: 5px 0px 10px 0px;
    padding: 5px;
    border: 2px solid teal;
    border-radius: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
}
.weatherCard .pngCard {
    margin: 5px 0px 10px 0px;
    padding: 5px;
}
.weatherCard .tempCard {
    margin: 5px 0px 10px 0px;
    padding: 5px;
}

.weatherCard .descCard {
    margin: 15px 0px 5px 0px;
    padding: 20px;
    border: 2px solid teal;
    border-radius: 10px;
    font-size: 14px;
    line-height: 18px;
    color: #dddddd;
    display: flex;
    align-items: center;
    text-align: start;
    justify-content: center;
}

.weatherCard .descCard #firstcol{
    padding-bottom: 4px;
    padding-right: 10px;
    text-align: center;
}
.weatherCard .descCard #secondcol{
    padding-right: 20px;
    font-weight: 700;
    border-right: 1px solid teal;
}
.weatherCard .descCard #thirdcol{
    padding-right: 10px;
    padding-left: 16px;
    text-align: center; 
}
.weatherCard .descCard #forescol{
    font-weight: 700;
}
.weatherCard .location{
    font-family: 'Bebas Neue';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 0.2em;
    
    align-items: center;
    text-align: center;

    color: #FFFFFF;

}
.weatherCard .temp{
    margin-top: 8px;
    margin-bottom: 2px;
   
    font-family: 'Bebas Neue';
    font-style: normal;
    font-weight: 700;
    font-size: 42px;
    line-height: 42px;
    
    align-items: center;
    text-align: center;

    color: #FFFFFF;
}
.card_btns{
    color: rgba(0, 128, 128, 0.253);
    font-size: 26px;
    position: absolute;
    top: 0px;
    right: 5px;
    
    transition: all 0.3s ease;

}

.card_btns:hover {
    transform:  rotate(90deg);
    color: teal;
}
.faIcon{
    color:teal;
    font-size: 14px ;
}
</style>