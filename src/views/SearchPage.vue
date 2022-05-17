<template>
  <div>
      <v-container class="mb-15">
        <div class="mt-15 mb-10">
          <h3 class="text-center text-uppercase">Search result</h3>
        </div>
        <v-layout v-if="furnitures.length == 0" class="mb-15">
            <v-flex
              class="mx-auto"
              xs12
              sm-6
              md4
              lg3
            >
              <v-card
                light
                outlined

                color="#FFFFFF"

              > 
                <div class="text-center pt-10">
                  <v-icon
                    size="40"
                    large
                  >
                    mdi-alert-octagram-outline
                  </v-icon>
                </div>
                <v-card-title class="justify-center">No matching data</v-card-title>
                <v-card-actions>
                  <v-btn
                    outlined
                    block
                    color="#FF617D"
                    @click="goBack()"
                  >
                    <v-icon>mdi-arrow-u-left-top</v-icon>
                    <span class="me-2">Back</span>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
        </v-layout>
        <v-layout v-else class="d-flex flex-wrap mb-15">
          <v-flex
            v-for="(item, index) in furnitures"
            :key="item.id"
            class="pa-2"
            xs12
            sm6
            md4
            lg3
          >
            <card-product :data="item" :index="index"></card-product>
          </v-flex>
        </v-layout>
        
      </v-container>
      <our-service></our-service>
  </div>
</template>

<script>
import CardProduct from '@/components/part/CardProduct.vue'
import OurService from '@/components/part/OurService.vue';
export default {
  name: 'SearchPage',
  components: {
    CardProduct,
    OurService 
    
  },
  computed: {
    furnitures() {
      return this.$store.state.product;
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  },
}
</script>

<style>

</style>