<template>
    <v-carousel-item>
        <v-sheet
            color="#DADDE0"
            height="100%"
        >   
            <v-card
                color="rgb(0, 0, 0, 0)"
                max-width="500"
                flat
                light
                class="d-flex flex-column align-start card-action"
            >
                <v-list-item four-line class="px-3">
                    <v-list-item-content>
                        <div class="text-color caption font-weight-bold mb-1">
                            Teh Very Good and Proper
                        </div>
                        <v-list-item-title class="text-h6 mb-3">
                            Sled Mini Sideboard
                        </v-list-item-title>
                        <v-list-item-subtitle class="black--text">
                            <div class="mb-1">VG&P collaborates with leading architects,</div>
                            <div class="mb-1">interior designer, and furniture dealers</div>
                            <div class="mb-1">around the world</div>
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-card-actions>
                    <v-btn
                        dark
                        color="#00C48C"
                    >
                        <span class="text-capitalize caption">Shop the lookbook</span>
                    </v-btn>
                </v-card-actions>
            </v-card>
            <div class="d-flex justify-end me-15">
                <v-img
                    max-width="750"
                    src="../../assets/banner/banner5.png"
                    class=""
                >
                </v-img>
            </div>            
        </v-sheet>
    </v-carousel-item>
</template>

<script>
export default {
    name: 'CarouselSlideFive'
}
</script>

<style scoped>
.text-color {
    color: #FF617D;
}

.card-action {
    position: absolute;
    margin-left: 250px;
    margin-top: 160px;
}
</style>
