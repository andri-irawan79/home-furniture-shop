<template>
    <div>
        <v-card 
            flat
            class="mx-auto mb-15 col-10"
        > 
            <h3 class="text-center text-uppercase mt-10 mb-5">Browse by Brand</h3>
            <v-tabs
                height="430px"
            >
                <v-layout>
                <v-flex
                    v-for="item in this.dataBrand"
                    :key="item.id"
                    align-self-end
                    xs12
                    sm6
                    md6
                    lg3
                    
                    
                >
                    <v-card
                        class="mx-2 mb-1 brand-card"
                        max-width="300"
                    >
                        <div class="box-img">
                            <v-img
                                :src="item.brand_background_url"
                                width="230px"
                                height="350px"
                            ></v-img>
                        </div>
                        <v-card-title class="ps-2">{{item.brand_name}}</v-card-title>
                    </v-card>
                </v-flex>
            </v-layout>
            </v-tabs>
            <v-card-actions class="justify-center my-5">
                <v-btn
                    dark
                    color="#000000"
                    class="px-5"
                    outlined
                >   
                    <v-icon>
                        mdi-view-comfy
                    </v-icon>
                    <span class="ms-2 text-capitalize">View All</span>
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
export default {
    name: 'AllBrand',
    computed: {
        dataBrand() {
            return this.$store.state.allBrand;
        },
    },
    methods: {
        fetchAllBrand() {
            this.$store.dispatch('getAllBrand');
        },
    },
    mounted () {
        this.fetchAllBrand();
    }
}
</script>

<style scoped>
    .box-img {
        background-image: url("../../assets/notification/img-not-found.png");
        background-size: cover;
        background-position-x: center;
        overflow: hidden;
    }

    .brand-card:hover {
        transition: 2s;
        bottom: 10px;
    }
</style>