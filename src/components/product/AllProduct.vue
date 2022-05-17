<template>
    <v-container class="mt-15 all-product">
        <h3 class="text-center mb-1">ALL FURNITURE</h3>
        <div>
            <v-tabs 
                right
                hide-slider
                color="#00C48C"
                class="px-2 justify-end"
            >
                <v-tab class="text-capitalize">New Arrivals</v-tab>
                <v-tab class="text-capitalize">Best Seller</v-tab>
                <v-tab class="text-capitalize">Top Review</v-tab>
            </v-tabs>
        </div>
        <v-layout class="d-flex flex-wrap">
            <v-flex
                v-for="(item, index) in allFurnitures"
                :key="item.id"
                class="pa-2"
                xs12
                sm6
                md4
                lg3
            >   
                <card-product :data="item" :index="index"></card-product>
            </v-flex>
        </v-layout>
        <div class="mt-10 text-center">
            <v-pagination
                :length="6"
            ></v-pagination>
        </div>
    </v-container>
</template>

<script>
import CardProduct from '@/components/part/CardProduct.vue'

export default {
    name: 'AllProduct',
    components: { 
        CardProduct
    },
    computed: {
        allFurnitures() {
            return this.$store.state.allProduct;
        },
    },
    methods: {
        fetchAllProduct() {
            this.$store.dispatch('getAllProduct');
        },
    },
    mounted () {
        this.fetchAllProduct();
    }

}
</script>

<style scoped>
    /* CSS here */
</style>