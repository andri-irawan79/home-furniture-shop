<template>
    <div>
        <top-deatail-view></top-deatail-view>
        <bottom-detail-view></bottom-detail-view>
        <our-service></our-service>
    </div>
</template>

<script>
import OurService from '@/components/part/OurService.vue'
import TopDeatailView from '@/components/product/detail/TopDeatailView.vue';
import BottomDetailView from '@/components/product/detail/BottomDetailView.vue';

export default {
    name: 'ProductDetails',
    components: { 
        OurService,
        TopDeatailView,
        BottomDetailView,
    
    },
    methods: {
        fetchAllProduct() {
            this.$store.dispatch('getAllProduct');
        },
    },
    mounted() {
        this.fetchAllProduct();
    }
}
</script>

<style scoped>
 /* something here.. */
</style>
