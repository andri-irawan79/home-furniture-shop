<template>
    <div class="mt-16 testimonials">
        <v-container class="pa-0 px-3">
            <div>
                <h3 class="text-center py-5">Our costumer say about us</h3>
            </div>
            <v-divider class="mx-4"></v-divider>
            
            <v-window
                v-model="onboarding"
                class="pa-2"
            >
                <v-window-item>
                    <user-testimonials></user-testimonials>
                </v-window-item>
                    
                <v-window-item>
                    <user-testimonials></user-testimonials>
                </v-window-item>

                <v-window-item>
                    <user-testimonials></user-testimonials>
                </v-window-item>
            </v-window>   

            <v-item-group
                v-model="onboarding"
                class="text-center mt-2"
                mandatory
            >
                <v-item
                    v-for="n in length"
                    :key="`btn-${n}`"
                    v-slot="{ active, toggle }"
                >
                <v-btn
                    :input-value="active"
                    icon
                    @click="toggle"
                    depressed   
                >
                    <v-icon 
                        size="15"
                    >
                        mdi-record
                    </v-icon>
                </v-btn>
                </v-item>
            </v-item-group>   
        </v-container>
    </div>
</template>

<script>
import UserTestimonials from './subpart/UserTestimonials.vue'
export default {
    name: 'CustomerTestimonials',
    components: { 
        UserTestimonials 
    },
    data: () => ({
            length: 3,
            onboarding: 0,
        }),
}
</script>

<style scoped>
    .testimonials {
        width: 100%;
        height: 317px;
        background: #F6F6F6;
    }

</style>