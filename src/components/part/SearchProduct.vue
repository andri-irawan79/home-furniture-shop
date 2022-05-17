<template>
    <div class="search-box">
        <v-text-field
            v-model="keyWord"
            height="40px"
            :placeholder="placeholder"
            dense
            rounded
            flat
            solo
            background-color="#EEEEEE"
        >
        </v-text-field> 
        <div class="text-center my-auto">
            <v-menu 
                transition="slide-y-transition"
                offset-y
                class="col-5"
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        rounded
                        text
                        dark
                        v-bind="attrs"
                        v-on="on"
                        class="pa-1 ps-2"
                    >
                        <span class="black--text text-capitalize body-2">{{currentCategories}}</span>
                            <v-icon class="black--text">mdi-menu-down</v-icon>
                    </v-btn>
                </template>
                <v-list class="pa-2">
                    <span class="ms-1 my-3 font-weight-bold">Categories :</span>
                    <v-layout class="mt-5">
                        <v-flex
                            class="d-inline-block pa-1"
                            xs12
                            sm6
                            md4
                            lg3
                        >
                            <v-card 
                                @click="changeCategories('All Categories')"
                            >
                                <v-list-item>All categories</v-list-item>
                            </v-card>
                        </v-flex>
                    </v-layout>

                    <v-divider class="mx-1 my-2"></v-divider>

                    <v-layout class="d-flex flex-wrap">
                        <v-flex
                            v-for="(item, index) in categories"
                            :key="index"
                            class="pa-1"
                            xs12
                            sm6
                            md4
                            lg3
                        >   
                            <v-card
                                @click="changeCategories(item)"
                            >
                                <v-list-item>{{item}}</v-list-item>
                            </v-card>                        
                        </v-flex>
                    </v-layout>
                </v-list>
            </v-menu>
        </div>
        <v-btn
            rounded
            dark
            color="#00C48C"
            height="30px"
            class="pa-0 mx-1 my-auto"
            @click="searchProduct()"
        >
            <v-icon>mdi-magnify</v-icon>
        </v-btn>
    </div>
</template>

<script>
export default {
    name: 'SearchProduct',
    // props: ['categories'],
    data () {
        return {
            keyWord: '',
            placeholder: 'Search product here...',
            currentCategories: 'All Categories',
            categories: [
                'Sofa',
                'Table',
                'Bed',
                'Chair',
                'Outdoor',
                'Double Sofa',
                'Drawer',
                'Dining',
                'Double Bed',
                'Sideboard',
                'Long Chair',
                'Desk',
                'Fabric Sofa',
                'Highboard',
                'Office',
                'Footstool',
                'Mirror',
                'Lamp',
                'Kitchen',
                'Storage',
            ]
        };
    },
    methods: {
        changeCategories(params) {
            return this.currentCategories = params;
        },
        searchProduct() {
            if ( this.keyWord == '') {
                this.placeholder = 'Enter product name...'
            }
            else {
                if (this.currentCategories == 'All Categories') {
                    this.$store.dispatch('getProductBySearch', this.keyWord);
                    this.$router.push('/search');
                }
                else {
                    const params = {
                        toSearch : this.keyWord,
                        categori: this.currentCategories
                    }
                    this.$store.dispatch('getProductBySearchCategories', params)
                    this.$router.push('/search');
                }
            }
        }
    },
    watch: {
        keyWord: function() {
            if(this.keyWord == '') {
                this.$router.push('/');
            }
        }
    }
}
</script>

<style scoped>
.search-box {
    display: flex;
    height: 40px;
    width: 585px;
    background-color: #EEEEEE;
    border-radius: 20px;
    box-shadow: 0px 0px 1px 0px #2F2F2F;
}
</style>