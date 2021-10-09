<template>
    <div :key="location.name" v-for="location in locations">
        <!--<Item :item="item" /> -->
        <Item @delete-item="$emit('delete-item', location.name)" :location = "location"/>
    </div>
</template>

<script>
import Item from './FavouriteItem.vue';
export default {
    name: "Items",
    props: {
        locations: Array
    },
    components: {
        Item
    },
    emits: ['delete-item']
};
</script>