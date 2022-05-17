<template>
    <v-card
        class="d-flex flex-column justify-space-between mx-auto pb-3"
        max-width="374"
        height="425"
    >
        <v-btn
            icon
            large
            class="wishlist-icon"
        >
            <v-icon>mdi-heart-outline</v-icon>
                <!-- <v-icon color="#FF617D">mdi-heart</v-icon> -->
        </v-btn>
        <div 
            class="box-card-content"
            @click="toProductDetail(index)"
        >
            <div class="box-img">
                <v-img
                    width="374"
                    height="250"
                    :src="data.product_thumbnail"
                >
                </v-img>
            </div>

            <div class="d-flex flex-column justify-space-between align-content-start">
                <div class="px-3">
                    <v-row
                        align="center"
                        class="mx-0 mt-1 px-0"
                    >
                        <v-rating
                            :value="4"
                            color="amber"
                            dense
                            half-increments
                            readonly
                            size="10"
                        >
                        </v-rating>
                    </v-row>   
                                    
                    <v-card-title class="mt-2 pa-0 text-body-1 font-weight-bold text-no-wrap">{{data.product_title}}</v-card-title>

                    <v-divider></v-divider>

                    <v-card-text class="pa-0 ma-0">
                        <div class="caption text--secondary">{{data.product_subtitle}}</div>
                    </v-card-text>
                </div>
            </div>
        </div>

        <div class="px-3 box-action">
            <div class="text-subtitle-2 pa-0 my-0 mb-2 font-weight-bold">
                {{ '$ ' + changeCurrency(data.product_price) }}
            </div>                  
            <v-card-actions class="pa-0 btn-card-action">
                <v-btn
                    outlined
                    block
                    color="#07C68F"
                    class="px-0 mx-0"
                >
                <v-icon size="21" class="me-1">mdi-cart-plus</v-icon>
                    <span>Add To Cart</span>
                </v-btn>
            </v-card-actions>
        </div>
    </v-card>
</template>

<script>
export default {
    name: 'CardProduct',
    props: ['data', 'index'],
    methods: {
        changeCurrency(params) {
            let result = params / 14550;
            return result.toFixed(2);
        },
        toProductDetail(currentId) {
            this.$store.dispatch('changeCurrentId', currentId);
            this.$router.push('/product_detail')
        }
    }
}
</script>

<style scoped>
.wishlist-icon {
    position: absolute;
    z-index: 99;
    right: 0;
}

.box-card-content {
    cursor: pointer;
}

.box-action {
    width: 100%;
    box-sizing: border-box;
}

.btn-card-action {
    width: 100%;
    box-sizing: border-box;
}

.box-img {
    background-image: url("../../assets/notification/img-not-found.png");
    background-size: cover;
    background-position-x: center;
    overflow: hidden;
}

</style>