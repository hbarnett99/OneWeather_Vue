<template>
    <div :key="location.name" v-for="location in locations">
        <!--<Item :item="item" /> -->
        <Item @search-fav="$emit('search-fav', [location.lon, location.lat])" @delete-item="$emit('delete-item', location.name)" :location = "location"/>
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
  emits: ['delete-item','search-fav']
};
</script>