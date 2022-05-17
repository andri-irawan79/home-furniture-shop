<template>
    <v-carousel-item
        src="../../assets/banner/banner2.png"
    >
        <v-card
            color="#FFFFFF"
            max-width="400"
            light
            class="d-flex flex-column align-center mx-auto card-action pa-5"
        >   
            <div class="additional-pictures">
                <img
                    width="130px"
                    src="../../assets/banner/additional-pictures/Bitmap-14.png"
                >
            </div>
            <v-list-item three-line>
                <v-list-item-content>
                    <div class="text-center mb-1 caption">
                        Today Only - Online Only
                    </div>
                    <v-list-item-title class="text-h3 mb-2 text-center font-weight-bold text-color" >
                        30% OFF
                    </v-list-item-title>
                    <div class="text-center grey--text caption mb-3">
                        Over 50,000+ Trending Items
                    </div>
                </v-list-item-content>
            </v-list-item>

            <v-card-actions>
                <v-btn
                    dark
                    color="#00C48C"
                >
                    <span class="text-capitalize">Shop Now</span>
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-carousel-item>
</template>

<script>
export default {
    name: 'CarouselSlideTwo',

}
</script>

<style scoped>
.card-action {
    margin-top: 150px;
}

.additional-pictures {
    position: absolute;
    left: 320px;
    bottom: 180px;
}

.text-color {
    color: #FF617D;
}
</style>