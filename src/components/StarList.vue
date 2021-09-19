<template>
  <div>
    <h1>Planets</h1>
    <ul :key="star.name" v-for="star in stars">
      <li >
        <Star :star="star" />
      </li>
    </ul>
  </div>
</template>

<script>
import Star from './Star';
export default {
  name: 'StarList',
  props: {
    stars: Array
  },
  components: {
    Star
  }
};
</script>
