<template>
    <v-layout class="mt-8">
        <v-flex
            xs12
            sm12
            md6
            lg6
        >
            <v-card
                class="pa-3 mx-2 my-auto overflow-hidden"
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
            </v-card>
        </v-flex>
        
        <v-flex
            xs12
            sm12
            md6
            lg6
        >
            <v-card
                class="pa-3 mx-2 my-auto overflow-hidden"
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
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
export default {

}
</script>

<style>

</style>