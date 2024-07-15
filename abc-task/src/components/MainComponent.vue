<script setup>
import MainTopComponent from '@/components/MainTopComponent.vue';
import MainBottomComponent from '@/components/MainBottomComponent.vue';

</script>

<template>
<main class="main">
  <MainTopComponent/>
  <MainBottomComponent/>
</main>
</template>

<style scoped>
.main {
  display: flex;
  min-width: 320px;
  height: 848px;
  flex-direction: column;
  justify-content: flex-start;
}

</style>