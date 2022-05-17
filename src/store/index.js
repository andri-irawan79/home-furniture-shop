import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import {listMenuFooter} from "../assets/mock/FooterMenuList"

export default new Vuex.Store({
  state: {
    language: 'English',
    currency: 'USD',
    allBrand: [],
    allProduct: [],
    product: [],
    productPictures: [],
    currentId: 0,
    footerMenu: []
  },

  mutations: {
    setLanguage(state, payload){
      state.language = payload;
    },

    setCurrency(state, payload){
      state.currency = payload;
    },

    setAllBrand(state, payload) {
      state.allBrand = payload;
    },

    setAllProduct(state, payload) {
      state.allProduct = payload;
    },

    setProduct(state, payload) {
      state.product = payload;
    },
    
    setProductPictures(state, payload) {
      state.productPictures = payload;
    },

    setCurrentId(state, payload) {
      state.currentId = payload;
    },

    setFooterMenu(state, payload) {
      state.footerMenu = payload;
    },
  },

  actions: {
    actionOfLanguage(store, params) {
      store.commit('setLanguage', params);
    },

    actionOfCurrency(store, params) {
      store.commit('setCurrency', params);
    },

    actionOfFooter(store) {
      store.commit('setFooterMenu', listMenuFooter);
      console.log("Footer Menu");
      console.log(listMenuFooter);
    },

    changeCurrentId(store, params) {
      store.commit('setCurrentId', params);
    },

    getAllBrand (store) {
      axios({
        url: 'https://mp-furnitures-store.hasura.app/v1/graphql',
        method: 'post',
        data: {
          query: `
            query MyQuery {
              brand_data {
                id
                brand_name
                brand_logo_url
                brand_adddress
                brand_background_url
                brand_description
              }
            }
          `
        }
      }).then((response => {
        console.log('Brand Respons');
        console.log(response);
        store.commit("setAllBrand", response.data.data.brand_data);
      })).catch((error) => {
        console.log('All Brand Error : ' + error);
      })
    },

    getAllProduct(store) {
      axios({
        url: 'https://mp-furnitures-store.hasura.app/v1/graphql',
        method: 'post',
        data: {
          query: `
            query MyQuery {
              product_data(limit: 12) {
                id
                id_brand
                product_brand
                product_title
                product_thumbnail
                product_subtitle
                product_style
                product_stock
                product_sold
                product_price
                created_at
                connect_pictures {
                  id
                  id_image
                  image_url
                }
              }
            }
          `
        }
      }).then((response) => {
        console.log('All Products Respons');
        console.log(response);
        store.commit("setAllProduct", response.data.data.product_data);
      }).catch((error) => {
        console.log('All Product Error : ' + error);
      })
    },

    getProductBySearch(store, params) {
      axios({
        url: 'https://mp-furnitures-store.hasura.app/v1/graphql',
        method: 'post',
        data: {
          query: `
            query MyQuery($keyWord : String!) {
              product_data(where: {product_title: {_iregex: $keyWord}}) {
                id
                id_brand
                product_brand
                product_price
                product_sold
                product_stock
                product_style
                product_subtitle
                product_thumbnail
                product_title
                created_at
              }
            }  
          `,
          variables: { keyWord: params },
        }
      }).then((response) => {
        console.log('Products Search Respons');
        console.log(response);

        store.commit("setProduct", response.data.data.product_data);
      }).catch((error) => {
        console.log('Product Search Error : ' + error);
      })
    },

    getProductBySearchCategories(store, params) {
      axios({
        url: 'https://mp-furnitures-store.hasura.app/v1/graphql',
        method: 'post',
        data: {
          query: `
            query MyQuery($keyWord : String!, $categories: String!) {
              product_data(where: {connect_categories: {categories_name: {_iregex: $categories}}, product_title: {_iregex: $keyWord}}) {
                id
                id_brand
                product_brand
                product_price
                product_sold
                product_stock
                product_style
                product_subtitle
                product_thumbnail
                product_title
                created_at
              }
            }
          `,
          variables: { keyWord: params.toSearch, categories: params.categori },
        }
      }).then((response) => {
        console.log('Products Search categories Respons');
        console.log(response);
        store.commit("setProduct", response.data.data.product_data);
      }).catch((error) => {
        console.log('Product Search categories Error : ' + error);
      })
    },

    getProductPictures(store, params) {
      axios({
        url: 'https://mp-furnitures-store.hasura.app/v1/graphql',
        method: 'post',
        data: {
          query: `
            query MyQuery($id_Image: Int!) {
              product_pictures(where: {id_image: {_eq: $id_Image}}) {
                id
                id_image
                image_url
              }
            }
          `,
          variables: {id_Image: params},
        }
      }).then((response) => {
        console.log('Products Pictures Respons');
        console.log(response);
        store.commit("setProductPictures", response.data.data.product_pictures);
      }).catch((error) => {
        console.log('Product Pictures Error : ' + error);
      })
    },
  },
})
