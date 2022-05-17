<template>
  <!-- Top -->
        <div>
            <v-app-bar
            color="#2F2F2F"
            height="50px"
            dense
            dark
            flat
            class="pa-0 ma-0"
            >
                <v-row class="col-10 mx-auto pa-0">
                    <v-toolbar-items class="ma-auto font-weight-light">
                        Welcome to our store. Call  
                        <a href="" class="contact-number mx-1"> +62-8221-1563-174 </a>  
                        for suport
                    </v-toolbar-items>

                    <v-spacer></v-spacer>

                    <div class="text-center my-auto">
                        <v-menu transition="slide-y-transition" offset-y>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn                         
                            text
                            dark
                            v-bind="attrs"
                            v-on="on"
                            >
                                {{currentLanguage}}
                            <v-icon>mdi-menu-down</v-icon>
                            </v-btn>
                        </template>
                        <v-list class="drop-down-list" dark>
                            <v-list-item
                                v-for="(item, index) in language"
                                :key="index"
                                @click="changeLanguage(item.name)"
                            >
                                <v-list-item-title>{{ item.name }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                        </v-menu>
                    </div>

                    <div class="text-center my-auto">
                        <v-menu transition="slide-y-transition" offset-y>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn  
                            text
                            dark
                            v-bind="attrs"
                            v-on="on"
                            >
                                {{currentCurrency}}
                            <v-icon>mdi-menu-down</v-icon>
                            </v-btn>
                        </template>
                        <v-list class="drop-down-list" dark>
                            <v-list-item
                                v-for="(item, index) in currency"
                                :key="index"
                                @click="changeCurrency(item.name)"
                            >
                                <v-list-item-title>{{ item.name }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                        </v-menu>
                    </div>

                    <v-btn 
                        outlined
                        rounded
                        color="#00C48C"
                        height="30px"
                        class="mx-2 my-auto px-2 py-4"
                    >
                        <span>Login</span>
                    </v-btn>

                    <v-btn 
                        text
                        rounded
                        class="my-auto"
                    >
                        <span>Sign Up</span>
                    </v-btn>
                </v-row>
            </v-app-bar>
        </div>
</template>

<script>
export default {
    name: 'NavBarTop',
    data() {
        return {
            language: [
                { name: 'English' },
                { name: 'Indonesian' },
            ],
            currency: [
                { name: 'USD' },
                { name: 'IDR' },
                { name: 'EUR' },
            ],
        };
    },
    computed: {
        currentLanguage() {
            return this.$store.state.language;
        },
        currentCurrency() {
            return this.$store.state.currency;
        }
    },
    methods: {
        changeLanguage(params){
            this.$store.dispatch('actionOfLanguage', params)
        },
        changeCurrency(params){
            this.$store.dispatch('actionOfCurrency', params)
        }
    }

}
</script>

<style scoped>
.contact-number {
    color: #00C48C;
}

.drop-down-list {
    background-color: #2F2F2F;
    color: #FFFFFF;
}

</style>