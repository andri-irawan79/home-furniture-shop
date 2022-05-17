<template>
    <div class="super-sale">
        <v-container class="pa-0 ma-0 mx-auto">
            <v-sheet
                color="#F6F6F6"
                height="547"
                class="d-flex justify-space-between"
            >   
                <v-card
                    color="#F6F6F6"
                    max-width="500"
                    flat
                    light
                    class="d-flex flex-column justify-center col-6 pa-0 ps-3 ma-0" 
                >
                    <div class="d-flex justify-space-between pa-3 mb-5 box-count-down">
                        <v-card
                            flat
                            width="70px"
                            height="70px"
                            class="d-flex flex-column justify-center text-center"
                        >
                            <div class="pa-0 ma-0 font-weight-bold text-h6 count-text">60</div>
                            <v-card-subtitle class="pa-0 ma-0 font-weight-bold grey--text text-uppercase">Days</v-card-subtitle>
                        </v-card>

                        <v-card
                            flat
                            width="70px"
                            height="70px"
                            class="d-flex flex-column justify-center text-center"
                        >
                            <div class="pa-0 ma-0 font-weight-bold text-h6 count-text">60</div>
                            <v-card-subtitle class="pa-0 ma-0 font-weight-bold grey--text text-uppercase">Hours</v-card-subtitle>
                        </v-card>

                        <v-card
                            flat
                            width="70px"
                            height="70px"
                            class="d-flex flex-column justify-center text-center"
                        >
                            <div class="pa-0 ma-0 font-weight-bold text-h6 count-text">60</div>
                            <v-card-subtitle class="pa-0 ma-0 font-weight-bold grey--text text-uppercase">Mins</v-card-subtitle>
                        </v-card>

                        <v-card
                            flat
                            width="70px"
                            height="70px"
                            class="d-flex flex-column justify-center text-center"
                        >
                            <div class="pa-0 ma-0 font-weight-bold text-h6 count-text">60</div>
                            <v-card-subtitle class="pa-0 ma-0 font-weight-bold grey--text text-uppercase">Sec</v-card-subtitle>
                        </v-card>
                    </div>

                    <div class="box-count-down px-3 mt-1">
                        <div class="d-flex justify-center align-center pa-3 white">
                            <v-card-title class="text-h5 text-uppercase font-weight-bold pa-0">Deal Of The Day</v-card-title>
                        </div>
                        <div class="text-center font-weight-bold mt-5">Thonet 1 Drawer Chairside Table</div>
                    </div>

                    <div class="box-count-down text-center">
                        <v-rating
                            color="yellow darken-3 pa-0 ma-0 text-center"
                            background-color="grey darken-1"
                            :value= "5"
                            size="12"
                        ></v-rating>
                    </div>

                    <div class="box-count-down my-2 text-center">
                        <span class="grey--text text-decoration-line-through mx-2">$ 700</span>
                        <span class=" pink--text mx-2 font-weight-bold text-h6">$ 610</span>
                    </div>

                    <v-card-actions class="mx-auto">
                        <v-btn
                            dark
                            color="#60C48C"
                        >
                            <span class="text-capitalize px-4">Shop Now</span>
                        </v-btn>
                    </v-card-actions>
                </v-card>
                <v-card
                    flat
                    color="#F6F6F6"
                    class="d-flex col-6"
                >
                    <v-img
                        max-width="420px"
                        src="../../assets/banner/additional-pictures/Bitmap.png"
                        class="mx-auto my-auto"
                    >
                        <div class="additional-pictures">
                            <v-img
                                width="150px"
                                src="../../assets/banner/additional-pictures/Bitmap-14.png"
                            >
                            </v-img>
                        </div>
                    </v-img>
                </v-card>            
            </v-sheet>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'SuperSale'
}
</script>

<style scoped>
    .super-sale {
        width: 100%;
        height: 547px;
        background-color: #F6F6F6;
        /* overflow: hidden; */
    }

    .box-count-down {
        width: 100%;
    }
    
    .count-text {
        color: #00C48C;
    }

    .additional-pictures {
        position: absolute;
        bottom: 0;
        right: 20px;
    }
</style>