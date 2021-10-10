<template>
    <div @dblclick="$emit('search-fav', [location.lon, location.lat])" class="item">
        <h5>
            {{ location.name }}
            <i @click="$emit('delete-item', location.name)" class="fas fa-times"></i>
        </h5>
        <h6>Region: {{ location.region }}</h6>
        <h6>Country: {{ location.country }}</h6>
    </div>
</template>

<script>
export default {
    name: "Item",
    props: {
        location: Object
    }
};
</script>

<style scoped>
.fas {
    color: red;
}
.item {
    background: #f4f4f4;
    margin: 5px;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 15px;
}
.item h5  {
    display:flex;
    align-items: center;
    justify-content: space-between;
}
</style>