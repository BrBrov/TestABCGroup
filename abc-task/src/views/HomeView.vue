<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue';
import MainComponent from '@/components/MainComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import { inject, reactive } from 'vue';
import MenuComponent from '@/components/MenuComponent.vue';

const isShowMenu = reactive(inject('isShowMenu'));
</script>

<template>
  <MenuComponent v-if="isShowMenu" />
  <div class="wrapper">
    <HeaderComponent />
    <MainComponent />
    <FooterComponent />
  </div>
</template>

<style scoped>
.wrapper {
  position: relative;
  z-index: 1;
  width: 320px;
  height: 100vh;
  margin: 0 auto;
  top: 0;
}
</style>
