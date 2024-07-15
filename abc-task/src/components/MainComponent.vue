<script setup>
import MainTopComponent from '@/components/MainTopComponent.vue';

</script>

<template>
<main class="main">
  <MainTopComponent/>
  <section class="main__bottom"></section>
</main>
</template>

<style scoped>
.main {
  display: flex;
  min-width: 320px;
  height: 339px;
  flex-direction: column;
  justify-content: flex-start;
}

</style>