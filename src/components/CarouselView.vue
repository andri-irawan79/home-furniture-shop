<template>
    <v-carousel
        cycle
        height="530"
        show-arrows-on-hover
        hide-delimiter-background
        reverse-transition="fade-transition"
        transition="fade-transition"
        class="mx-auto py-0"
        dark
    >
        <carousel-slide-one/>
        <carousel-slide-two/>
        <carousel-slide-three/>
        <carousel-slide-four/>
        <carousel-slide-five/>
    </v-carousel>
</template>

<script>
import CarouselSlideOne from './carousel/CarouselSlideOne.vue'
import CarouselSlideTwo from './carousel/CarouselSlideTwo.vue'
import CarouselSlideThree from './carousel/CarouselSlideThree.vue'
import CarouselSlideFour from './carousel/CarouselSlideFour.vue'
import CarouselSlideFive from './carousel/CarouselSlideFive.vue'

export default {
    name: 'CarouselView',
    components: {
        CarouselSlideOne,
        CarouselSlideTwo,
        CarouselSlideThree,
        CarouselSlideFour,
        CarouselSlideFive

    }
}
</script>