<template>
    <v-container>
            <v-layout class="mt-15">
                <v-flex
                    lg8
                >
                    <v-card
                        flat
                        class="pa-3"
                        height="100%"
                    >
                        <div class="d-flex box-img">
                            <div class="col-1 pa-0 mx-0 no-gutters">
                                <v-img
                                    v-for="item in product[productId].connect_pictures"
                                    :key="item.id"
                                    :src="item.image_url"
                                    max-width="100%"
                                    class="mb-3 me-2 img-border"
                                ></v-img>
                            </div>
                            <div class="col-11 pa-0 pt-2 mx-0 no-gutters box-img-show">
                                <v-img
                                        :src="product[productId].product_thumbnail"
                                        width="100%"
                                    >
                                    
                                </v-img>
                            </div>
                        </div>
                    </v-card>
                </v-flex>
                <v-flex
                    lg4
                >
                    <v-card
                        flat
                        class="pa-3"
                    >
                        <v-card-title class="pa-0">{{product[productId].product_title}}</v-card-title>
                        <div class="d-flex align-baseline">
                            <span>
                                <v-rating
                                    color="yellow darken-3 pa-0 ma-0"
                                    background-color="grey darken-1"
                                    :value= "5"
                                    size="12"
                                    dense
                                ></v-rating>
                            </span>
                            <span class="caption grey--text ms-2">20 Reviews</span>
                        </div>
                        <v-card-text class="pa-0 my-2 mb-10 text-justify">
                            {{product[productId].product_subtitle}}
                            <div class="my-1 black--text">Brand : {{product[productId].product_brand}}</div>
                        </v-card-text>

                        <v-divider></v-divider>

                        <v-card-title class="pa-0 my-5">$ {{ changeCurrency(product[productId].product_price) }}</v-card-title>

                        <v-card-subtitle class="my-3 pa-0">
                            <div class="font-weight-bold text-body-1 my-1 black--text">Stock :</div>
                            <div class="font-weight-black">{{product[productId].product_stock}}</div>
                        </v-card-subtitle>

                        <v-card-actions class="flex-column align-start pa-0 my-2">
                            <div class="font-weight-bold my-2">More Pictures :</div>
                            <div class="d-flex flex-wrap mb-2">
                                <v-img
                                    v-for="item in product[productId].connect_pictures"
                                    :key="item.id"
                                    max-width="100px"
                                    :src="item.image_url"
                                    class="me-3 mb-3 img-border"
                                ></v-img>
                            </div>
                        </v-card-actions>

                        <v-divider></v-divider>

                        <v-card-actions class="pa-0 mt-5">
                            <v-layout>
                                <v-flex
                                    lg8
                                    class="me-2"
                                >
                                    <v-btn
                                        dark
                                        color="#00C48C"
                                        block
                                    >
                                        <span class="mx-1 caption font-weight-bold">Buy Now</span>
                                    </v-btn>
                                </v-flex>

                                <v-flex
                                    lg2
                                    class="me-2"
                                >
                                    <v-btn
                                        outlined
                                        color="#00C48C"
                                        class="px-3"
                                    >
                                        <v-icon
                                            size="20"
                                        >
                                            mdi-cart-plus
                                        </v-icon>
                                    </v-btn>
                                </v-flex>

                                <v-flex
                                    lg2
                                    class="ms-1 me-2"
                                >
                                    <v-btn
                                        outlined
                                        color="#FF617D"
                                    >
                                        <v-icon>mdi-heart-outline</v-icon>
                                    </v-btn>
                                </v-flex>
                            </v-layout>
                        </v-card-actions>

                        <v-card-actions class="pa-0 flex-column align-start">
                            <span class="caption font-weight-black mt-10 mb-2">Share On : </span>
                            <div>
                                <v-icon color="black" class="me-2">mdi-facebook</v-icon>
                                <v-icon color="black" class="me-2">mdi-whatsapp</v-icon>
                                <v-icon color="black" class="me-2">mdi-instagram</v-icon>
                                <v-icon color="black" class="me-2">mdi-twitter</v-icon>
                            </div>
                        </v-card-actions>

                        <v-card-actions class="pa-0 mt-7">
                            <v-btn
                                dark
                                block
                                color="red"
                                @click="goBack()"
                            >
                                <v-icon>mdi-arrow-u-left-top</v-icon>
                                <span class="ms-2">Back</span>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
</template>

<script>
export default {
    name: 'TopDetailView',
    computed: {
        product() {
            return this.$store.state.allProduct;
        },
        pictures() {
            return this.$store.state.productPictures;
        },
        productId() {
            return this.$store.state.currentId;
        }
    },
    methods: {
        fetchAllProduct() {
            this.$store.dispatch('getAllProduct');
        },
        goBack () {
            this.$router.go(-1);
        },
        changeCurrency(params) {
            let result = params / 14550;
            return result.toFixed(2);
        },
    },
    mounted() {
        this.fetchAllProduct();
    }
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

.img-border {
    border: 1px solid grey;
}
</style>