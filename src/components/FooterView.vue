<template>
  <v-footer
        padless
        color="#1D1D1D"
    >
        <v-card
            flat
            tile
            width="100%"
            color="#1D1D1D"
            class="white--text text-center"
            dark
        >
            <div class="px-10">
                <div class="d-flex align-center justify-space-between py-6">
                    <div class="d-flex">
                        <v-card-title class="text-h4 text-no-wrap pa-0">Furnikit</v-card-title>
                        <v-card-text
                            class="d-flex align-center px-3 py-0"
                        >
                            <v-btn
                                v-for="icon in icons"
                                :key="icon"
                                icon
                                class="pa-0 ma-0 white--text"
                            >
                                <v-icon 
                                    color="black"
                                    size="17px"
                                >
                                {{ icon }}
                            </v-icon>
                            </v-btn>
                        </v-card-text>
                    </div>
                    <div class="d-flex align-center justify-end">
                        <div>
                            <v-card-text class="me-10">
                                Sign up to our newsletter and immediately you get a 7% off for your first order :
                            </v-card-text>
                        </div>
                        <div class="box-subscribe">
                            <v-text-field
                                label="example@gmail.com"
                                solo
                                background-color="#1F1F1F"
                                height="50px"
                            ></v-text-field>
                            <v-btn
                                color="#FFFFFF"
                                text
                                outlined
                                height="50px"
                                class="my-auto ms-2"
                            >
                                <span class="text-capitalize">Subscribe</span>
                            </v-btn>
                        </div>
                    </div>
                </div>
                <v-divider></v-divider>
                <div class="d-flex justify-lg-space-between my-5">
                    <v-card
                            class="pa-0"
                            max-width="400"
                            tile
                            flat
                            color="#1D1D1D"
                        >
                            <v-list-item four-line class="pa-0">
                                <v-list-item-content class="text-start lighten-1">
                                    <v-list-item-title class="text-h6 font-weight-regular mb-3">Contact Us</v-list-item-title>
                                    <v-list-item-subtitle class="my-1 grey--text font-weight-light">PO Box 16122 Collins Street West Victoria</v-list-item-subtitle>
                                    <v-list-item-subtitle class="my-1 grey--text font-weight-light">8007 Australia - Map</v-list-item-subtitle>
                                    <v-list-item-subtitle class="my-1 grey--text font-weight-light">+62-8221-1563-174</v-list-item-subtitle>
                                    <div class="d-flex">
                                        <div class="box-payment">
                                            <img src="../assets/logo/payment/logo1.png" alt="Visa">
                                        </div>
                                        <div class="box-payment">
                                            <img src="../assets/logo/payment/logo2.png" alt="Visa">
                                        </div>
                                        <div class="box-payment">
                                            <img src="../assets/logo/payment/logo3.png" alt="Visa">
                                        </div>
                                        <div class="box-payment">
                                            <img src="../assets/logo/payment/logo4.png" alt="Visa">
                                        </div>
                                        <div class="box-payment">
                                            <img src="../assets/logo/payment/logo5.png" alt="Visa">
                                        </div>
                                    </div>
                                </v-list-item-content>
                            </v-list-item>
                    </v-card>
                    <footer-menu :menu="footerMenuList[0]"/>        
                    <footer-menu :menu="footerMenuList[1]"/>             
                    <footer-menu :menu="footerMenuList[2]"/>             
                    <footer-menu :menu="footerMenuList[3]"/>        
                    <footer-menu :menu="footerMenuList[4]"/>       
                </div>   
            </div>

        <v-card-text class="white--text footer-credit mt-10">
            {{ new Date().getFullYear() }} — <strong> Andri Irawan</strong>
        </v-card-text>
        </v-card>
    </v-footer>
</template>

<script>
import FooterMenu from './footer/FooterMenu.vue';
export default {
    components: { 
        FooterMenu 
    },
    name: 'FooterView',
    data() {
        return {
            icons: [
                'mdi-facebook',
                'mdi-twitter',
                'mdi-linkedin',
                'mdi-instagram',
                'mdi-pinterest',
            ],
        };
    },
    computed: {
        footerMenuList() {
            return this.$store.state.footerMenu;
        }
    },
    methods: {
        fetchFooter() {
            this.$store.dispatch('actionOfFooter');
        }
    },
    mounted() {
        this.fetchFooter();
    }
}
</script>

<style scoped>
.box-subscribe {
    display: flex;
    align-content: center;
    width: 300px;
    height: 50px;
    box-sizing: border-box;
}

.box-payment {
    width: 43px;
    height: 26px;
    margin-top: 15px;
    margin-right: 5px;
    background-color: #fff;
    border-radius: 3px;
    box-sizing: border-box;
}

.box-payment img {
    width: 33px;
    height: 20px;
    margin: 3px 3.5px;
}

.footer-credit {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1F1F1F;
    height: 60px;
}
</style>