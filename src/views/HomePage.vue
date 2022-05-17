<template>
  <div>
    <carousel-view></carousel-view>
    <our-service></our-service>
    <all-brand></all-brand>
    <super-sale></super-sale>
    <all-product></all-product>
    <customer-testimonials></customer-testimonials>
  </div>
</template>

<script>
import CarouselView from '@/components/CarouselView.vue'
import AllProduct from '@/components/product/AllProduct.vue'
import OurService from '@/components/part/OurService.vue'
import AllBrand from '@/components/product/AllBrand.vue'
import SuperSale from '@/components/special/SuperSale.vue'
import CustomerTestimonials from '@/components/part/CustomerTestimonials.vue'

export default {
  name: 'HomePage',
  components: {
    CarouselView,
    AllProduct,
    OurService,
    AllBrand,
    SuperSale,
    CustomerTestimonials,

  },
}
</script>