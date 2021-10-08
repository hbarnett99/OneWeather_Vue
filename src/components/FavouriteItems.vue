<template>
    <div :key="location.name" v-for="location in locations">
        <!--<Item :item="item" /> -->
        <Item :location = "location"/>
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
    }
};
</script>