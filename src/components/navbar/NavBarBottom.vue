<template>
    <!-- Botton -->
        <div>
            <v-app-bar
            color="#F6F6F6"
            height="60px"
            dense
            light
            flat
            class="box-tab-menu"
            >
                <v-row class="col-10 mx-auto px-2 overflow-x-hidden">
                    <v-toolbar
                        height="57px"
                        class="pa-0 ma-0"
                        flat
                    >
                        <v-tabs
                            light
                            background-color="#F6F6F6"
                            color="#00C48C"
                            active-class="teal--text"
                        >
                            <v-tab 
                                to="/"
                                class="text-capitalize black--text"
                            >
                                <span>Home</span>
                            </v-tab>

                            <v-tab class="text-capitalize black--text">
                                <span>Categories</span>
                            </v-tab>

                            <v-tab class="text-capitalize black--text">
                                <span>Shop Style</span>
                            </v-tab>

                            <v-tab class="text-capitalize black--text">
                                <span>Pages</span>
                            </v-tab>

                            <v-tab
                                class="red--text text-capitalize black--text"
                            >
                                <span>Hot Sell!</span>
                            </v-tab>
                        </v-tabs>
                    </v-toolbar>

                    <v-spacer></v-spacer>

                    <v-btn 
                        icon
                        class="my-auto"
                    >
                        <v-icon class="black--text">mdi-heart-outline</v-icon>
                        <v-badge color="#FF617D" content="6" class="badge-icon"></v-badge>
                    </v-btn>

                    <v-btn 
                        icon
                        class="my-auto"
                    >
                        <v-icon class="black--text" >mdi-cart-variant</v-icon>
                        <v-badge color="#00C48C" content="6" class="badge-icon"></v-badge>
                    </v-btn>
                </v-row>
            </v-app-bar>
        </div>
</template>

<script>
export default {
    name: 'NavBarBottom'
}
</script>

<style scoped>
.badge-icon {
    position: relative;
    bottom: 4px;
    right: 4px;
}

</style>