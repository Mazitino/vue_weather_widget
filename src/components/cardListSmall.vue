<template>
    <div class="list">
        <draggable 
            :list="cards"
            tag="ul"
            class="list-group"
            handle=".handle"
            item-key="id">
            <template #item="{element, index}">
                <li class="itemList">
                    <fa 
                        icon="fa-solid fa-bars" 
                        class="faIcon handle" 
                        @drop="resorted"  
                        @dargenter.prevent
                        @dragover.prevent
                        
                    />
                    <span class="text">{{ element.city }} </span>
                    <fa 
                        icon="fa-regular fa-trash-can" 
                        class="faIcon trash" 
                        @click="removeAt(index, element)"
                    />
                </li>
            </template>

        </draggable> 
    </div>
</template>

<script>
    import draggable from 'vuedraggable'
    export default {
        props: {
            cards: {
                type: Array,
                required: true
            }
        },
        name: "handle",
        display: "Handle",
        instruction: "Drag using the handle icon",
        order: 5,
        components: {
            draggable
        },
        methods: {
            removeAt(idx, el) {
                this.cards.splice(idx, 1);
                this.$emit('remove', el);
            },
            resorted() {
                this.$emit('resort', this.cards);
            },
        },
    };
</script>


<style scoped>
.list {
    width: 100%;
}
.itemList{
    margin: 5px 5px 0px 5px;
    padding: 8px 15px;
    border-radius: 5px;
    text-align: center;
    
    color: black;
    border: 1px solid rgba(0, 128, 128, 0.37);
    background-color: rgb(250, 250, 250);

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.handle {
  cursor: move!important;
}
.trash {
  cursor:pointer!important;
}
.faIcon{
    color:teal;
    font-size: 16px ;
    transition: all 0.3s ease;
}
.faIcon:hover{
    color:rgb(0, 65, 65);
}
</style>