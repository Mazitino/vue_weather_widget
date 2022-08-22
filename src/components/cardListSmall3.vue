<template>
    <div v-if="cards.length > 0">
        <div class="drop-zone"
            @drop="onDrop($event, 1)"
            @dargenter.prevent
            @dragover.prevent
            >
            <div 
                v-for="item in getList(1)" 
                :key="item.id" 
                class="drag-el"
                draggable="true"
                @dragstart="startDrag($event, item)"
                >
                    {{item.title}}
            </div>
        </div>
        <div class="drop-zone"
            @drop="onDrop($event, 2)"
            @dargenter.prevent
            @dragover.prevent
            >
            <div 
                v-for="item in getList(2)" 
                :key="item.id" 
                class="drag-el"
                draggable="true"
                @dragstart="startDrag($event, item)"

                >
                    {{item.title}}
            </div>
        </div>
        <!-- <transition-group name="card-list">
            <card-item 
                v-for="card in cards"
                :card="card"
                :key="card.id"
                @remove="$emit('remove',card)"
                
            />
        </transition-group> -->
    </div>

</template>

<script>
// import cardItem from './cardItem.vue';
import { ref } from 'vue'

    export default {
        // components: {
        //     cardItem
        // },
        props: {
            cards: {
                type: Array,
                required: true
            }
        },
        setup() {
            // const items = ref[props.cards]
            const items = ref([
                {id: 1, title: 'Aaa', list: 1 },
                {id: 2, title: 'Bbb', list: 1 },
                {id: 3, title: 'Ccc', list: 2 },
            ])
            
            const getList = (list) => {
                return items.value.filter((item) => item.list == list)
            }

            const startDrag = (event, item) => {
                console.log(item);
                event.dataTransfer.dropEffect = 'move'
                event.dataTransfer.effectAllowed = 'move'
                event.dataTransfer.setData('itemID', item.id)
            }

            const onDrop = (event, list) => {
                const itemID = event.dataTransfer.getData('itemID')
                const item = items.value.find((item) => item.id == itemID)
                item.list = list

            }

            return {
                getList,
                onDrop,
                startDrag,
            }
        }
    }
</script>

<style scoped>


.drop-zone{
    
    width: 100%;
    margin: 5px auto;
    background-color: rgb(36, 36, 36);
    padding: 10px;
    min-height: 10px;
}
.drag-el{
    background-color: teal;
    color: white;
    padding: 5px;
    margin-bottom: 10px;
   
}
</style>