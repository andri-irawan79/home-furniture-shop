<template>
    <div>
        <v-divider class="pa-0 ma-0 mt-16"></v-divider>

        <v-container class="pa-0 my-0 px-3">
            <v-tabs class="ma-0 pa-0 px-3" color="black">
                <v-tab class="text-capitalize">Review</v-tab>
                <v-tab class="text-capitalize">Descriptions</v-tab>
                <v-tab class="text-capitalize">Additional Options</v-tab>
            </v-tabs>
        </v-container>

        <v-divider class="mb-5"></v-divider>

        <v-container class="mb-15">
            <v-layout class="px-3">
                <v-flex
                    lg8
                    class="me-5"
                >
                    <div>
                        <v-layout>
                            <v-flex
                                lg4
                            >
                                <v-card
                                    flat
                                    outlined
                                    class="my-3"
                                >
                                    <v-card-subtitle class="text-center caption font-weight-black">20 reviews</v-card-subtitle>
                                    <v-card-title class="text-h5 font-weight-bold orange--text pa-0">
                                        <span class="mx-auto">4.5</span>
                                    </v-card-title>
                                    <div class="mt-1 mb-7">
                                        <v-rating
                                            color="yellow darken-3 pa-0 ma-0"
                                            background-color="grey darken-1"
                                            :value= "5"
                                            size="12"
                                            dense
                                            class="text-center"
                                        ></v-rating>
                                    </div>
                                </v-card>
                                <v-btn
                                    dark
                                    block
                                    color="#FEB53E"
                                >
                                    <span class="text-capitalize">Write a Review</span>
                                </v-btn>
                            </v-flex>
                        </v-layout>
                        <v-layout class="my-5">
                            <v-flex>
                                <v-card
                                    tile
                                    flat
                                    color="#F6F6F6"
                                >
                                    <v-card-subtitle>1 - 5 of 20 Reviews</v-card-subtitle>
                                </v-card>
                            </v-flex>
                        </v-layout>
                        <v-layout class="mt-8">
                            <v-flex
                                lg12
                            >
                                <v-card
                                    flat
                                    class=" my-auto overflow-hidden"
                                    max-height="150px"
                                >
                                    <div class="d-flex mb-2">
                                        <div class="me-4 mb-2">
                                            <v-avatar>
                                                <img
                                                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                                                    alt="John"
                                                >
                                            </v-avatar>
                                        </div>
                                        <div class="d-flex flex-column">
                                        <span class="text-capitalize font-weight-black">anonymously</span>
                                        <span>
                                            <v-rating
                                                color="yellow darken-3 pa-0 ma-0 text-center"
                                                background-color="grey darken-1"
                                                :value= "5"
                                                size="12"
                                                dense
                                            ></v-rating>
                                        </span>
                                        </div>
                                    </div>
                                    <v-card-text class="pa-0">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi nostrum aspernatur magni, ea dicta eaque consequuntur tempore similique facere maxime?
                                    </v-card-text>
                                    <v-divider class="mt-4"></v-divider>
                                </v-card>
                            </v-flex>
                        </v-layout>
                        <div class="mt-10 text-center">
                            <v-pagination
                                :length="6"
                            ></v-pagination>
                        </div>
                    </div>    
                </v-flex>
                    
                <v-flex
                    lg4
                >
                    <div class="ms-5 mb-5">
                        <span class="text-h6">Match with</span>
                    </div>
                    <v-card
                        flat
                        height="115px"
                        class="ms-5 my-3"
                    >
                        <div class="d-flex box-side-product">
                            <div class="box-side-product-img">
                                <v-img
                                    src="https://i.picsum.photos/id/950/318/180.jpg?hmac=Nck-7_cWEivTD6L2z42W5b5MHCBbiY_v8s5jY0sfORw"
                                    width="100%"
                                    height="100%"
                                >

                                </v-img>
                            </div>
                            <div class="d-flex flex-column justify-space-between pa-2">
                                <div class="body-2 black--text font-weight-black">Lorem ipsum dolor, sit amet consectetur</div>
                                <div class="body-2 black--text font-weight-bold">$ 200</div>
                                <div>
                                    <v-rating
                                        color="yellow darken-3 pa-0 ma-0 text-center"
                                        background-color="grey darken-1"
                                        :value= "5"
                                        size="12"
                                        dense
                                    ></v-rating>
                                </div>
                            </div>
                        </div>
                    </v-card>                 
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'BottomDetailView'
}
</script>

<style scoped>
.box-img {
    height: 100%;
}

.box-img-show {
    display: flex;
    justify-items: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: black;
    padding: 10px;
    overflow: hidden;
}

.box-side-product {
    height: 100%;
}

.box-side-product-img {
    width: 115px;
    height: 100%;
    overflow: hidden;
    background-color: #F6F6F6;
}
</style>