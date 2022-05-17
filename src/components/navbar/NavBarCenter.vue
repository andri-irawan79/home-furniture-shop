<template>
    <div>
        <v-app-bar
            color="#FFFFFF"
            height="80px"
            light
            flat
        >
            <v-row class="d-flex align-center col-10 mx-auto">
                <v-toolbar-title class="d-flex align-center">
                    <div class="box-logo">
                        <v-img
                            src="../../assets/menu/logo.svg"
                        ></v-img>
                    </div>
                    <h3>Furnikit</h3>
                </v-toolbar-title>

                <v-spacer></v-spacer>

                <v-toolbar-items>
                    <search-product></search-product>
                </v-toolbar-items>
            </v-row>
        </v-app-bar>
    </div>
</template>

<script>
import SearchProduct from '../part/SearchProduct.vue';

export default {
    name: 'NavBarView',
    components: { 
        SearchProduct,        
    },
}
</script>

<style scoped>

.box-logo {
    width: 25px;
    margin-right: 10px;
}

</style>