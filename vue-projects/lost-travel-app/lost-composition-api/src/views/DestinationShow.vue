<template>
    <div>
    <section v-if="destination" class="destination">
        <h1>{{ destination.name }}</h1>
        <GoBack />
        <div class="destination-details">
            <img :src="`/images/${destination.image}`" :alt="destination.name">
            <p>{{ destination.description }}</p>
        </div>
    </section>
    <section class="experiences">
        <h2>Top Experiences in {{ destination.name }}</h2>
        <div class="cards">
            <router-link
                v-for="experience in destination.experiences"
                :key="experience.slug"
                :to="{name: 'experience.show', params:{experienceSlug:experience.slug}}"
            >
            <ExperienceCard 
                :experience="experience"
            />
        </router-link>
        </div>

        <router-view />
        
    </section>
</div>
</template>

<script>
import sourceData from '@/data.json'
import ExperienceCard from '@/components/ExperienceCard.vue'
import GoBack from '@/components/GoBack.vue'
import {useRoute} from 'vue-router'
import {computed} from 'vue'
export default {
    components:{ ExperienceCard, GoBack },
    props:{
        id:{type: Number, required: true}
    },
    setup(props){
        const route = useRoute();
        const destinationId = computed(() => {
            return parseInt(route.params.id)
        })

        const destination = computed(() => {
            return sourceData.destinations.find(
                (destination) => destination.id == props.id
            );
        })

        return{ destinationId, destination}
    }
    
}
</script>