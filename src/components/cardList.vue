<template>
    <div v-if="cards.length > 0">
        <transition-group name="card-list">
            <card-item 
                v-for="card in cards"
                :card="card"
                :key="card.id"
                @remove="$emit('remove',card)"
                
            />
        </transition-group>
    </div>

</template>

<script>
import cardItem from './cardItem.vue';
    export default {
        components: {
            cardItem
        },
        props: {
            cards: {
                type: Array,
                required: true
            }
        } 
    }
</script>

<style scoped>
.card-list-item {
    display: inline-block;
    margin-right: 10px;
}
.card-list-enter-active,
.card-list-leave-active {
    transition: all 0.5s ease;
}
.card-list-enter-from,
.card-list-leave-to {
    opacity: 0;
    transform: translateX(100px);
}
.card-list-move {
    transition: transform 0.5s ease;
}

</style>