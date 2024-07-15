<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue';
import MainComponent from '@/components/MainComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

</script>

<template>
  <div class="wrapper">
    <HeaderComponent />
    <MainComponent />
    <FooterComponent />
  </div>
</template>

<style scoped>
.wrapper {
  width: 100%;
  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;
}
</style>