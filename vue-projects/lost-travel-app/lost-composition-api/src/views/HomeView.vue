<template>
  <div class="home">
    <h1>All Destinations</h1>
    <div class="destinations">
    <router-link 
      v-for= "destination in destinations" 
      :key="destination.id" 
      :to="{name: 'destination.show', params:{id: destination.id, slug: destination.slug}}"
    >
    <h2>{{ destination.name }}</h2>
    <img :src="`/images/${destination.image}`" :alt="destination.name">
  </router-link>
    
  </div>
</div>
</template>

<script>
import {ref} from 'vue'
import sourceData from '@/data.json'
export default{
  setup(){
    const destinations = ref(sourceData.destinations)
    return{destinations}
  }
  
}
</script>
