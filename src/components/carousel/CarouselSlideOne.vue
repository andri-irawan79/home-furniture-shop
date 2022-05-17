<template>
  <v-carousel-item
        src="../../assets/banner/banner1.png"
    >
        <v-card
            color="rgb(0, 0, 0, 0)"
            max-width="500"
            flat
            class="d-flex flex-column align-center mx-auto card-action"
        >
            <v-list-item three-line>
                <v-list-item-content>
                    <v-list-item-title class="text-h3 text-center font-weight-bold mb-3">
                    iSaloni 2022
                    </v-list-item-title>
                    <v-list-item-subtitle class="text-center mb-3">Bring this year's hottest interior</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-card-actions>
                <v-btn
                    dark
                    color="#00C48C"
                >
                    <span class="text-capitalize">Shop the lookbook</span>
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-carousel-item>
</template>

<script>
export default {
    name: 'CarouselSlideOne',

}
</script>

<style scoped>
.card-action {
    margin-top: 180px;
}
</style>