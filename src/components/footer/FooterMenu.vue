<template>
    <v-card
        class="pa-0"
        max-width="400"
        tile
        flat
        color="#1D1D1D"
        dark
    >
        <v-list-item class="pa-0">
            <v-list-item-content class="text-start lighten-1">
                <v-list-item-title class="text-h6 mb-3 font-weight-regular">{{menu.title}}</v-list-item-title>
                <v-list-item-subtitle v-for="item in menu.items" :key="item.title" class="my-1 font-weight-light">
                    <a href="" class="grey--text text-decoration-none">{{item.title}}</a>
                </v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
    </v-card>
</template>

<script>
export default {
    name: 'FooterMenu',
    props: {
        menu: Object,
    },
}
</script>

<style>

</style>