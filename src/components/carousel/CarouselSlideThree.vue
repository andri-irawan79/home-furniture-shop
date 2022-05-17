<template>
    <v-carousel-item
        src="../../assets/banner/banner3.png"
    >
        <v-card
            color="rgb(0, 0, 0, 0)"
            max-width="500"
            flat
            dark
            class="d-flex flex-column align-center mx-auto card-action"
        >
            <v-list-item three-line>
                <v-list-item-content>
                    <div class="text-overline text-center">
                        New Collection
                    </div>
                    <v-list-item-title class="text-h4 mb-5 text-center font-weight-bold">
                        Linon Titian Salon
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-card-actions>
                <v-btn
                    light
                    color="#FFFFFF"
                >
                    <span class="text-capitalize">Shop the lookbook</span>
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-carousel-item>
</template>

<script>
export default {
    name: 'CarouselSlideThree'
}
</script>

<style scoped>
.card-action {
    margin-top: 180px;
}
</style>