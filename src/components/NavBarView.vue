<template>
    <div>
        <!-- Top -->
        <nav-bar-top/>

        <!-- Middle -->
            <nav-bar-center/>
        <!-- Bottom Navbar -->
        <nav-bar-bottom/>
    </div>
</template>

<script>
import NavBarTop from './navbar/NavBarTop.vue';
import NavBarCenter from './navbar/NavBarCenter.vue';
import NavBarBottom from './navbar/NavBarBottom.vue';

export default {
    name: 'NavBarView',
    components: { 
        NavBarTop,
        NavBarCenter,
        NavBarBottom,   
    },
}
</script>

<style scoped>
    /* simething here.. */
</style>