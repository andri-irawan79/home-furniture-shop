<template>
    <v-carousel-item
        src="../../assets/banner/banner4.png"
    >
        <v-card
            color="#FFFFFF"
            max-width="380"
            light
            class="d-flex flex-column align-center card-action pa-5"
        >   
            <div class="additional-pictures">
                <img
                    width="100px"
                    src="../../assets/banner/additional-pictures/Bitmap-15.png"
                >
            </div>
            <v-list-item three-line>
                <v-list-item-content>
                    <div class="text-center caption text-color">
                        Free $25 gift card
                    </div>
                    <v-list-item-title class="text-h5 mb-1 text-center font-weight-bold" >
                        When You Spend $100
                    </v-list-item-title>
                    <div class="text-center grey--text caption">
                        On select table & chair
                    </div>
                </v-list-item-content>
            </v-list-item>

            <v-card-actions>
                <v-btn
                    dark
                    color="#00C48C"
                    block
                >
                    <span class="text-capitalize">Shop Now</span>
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-carousel-item>
</template>

<script>
export default {
    name: 'CarouselSlideFour',
}
</script>

<style scoped>
.text-color {
    color: #FF617D;
}

.card-action {
    margin-left: 100px;
    margin-top: 100px;
}
</style>