<script setup>
import HeaderMenuComponent from '@/components/HeaderMenuComponent.vue';
import HeaderInfoComponent from '@/components/HeaderInfoComponent.vue';

</script>

<template>
  <header class="header">
    <HeaderMenuComponent/>
    <HeaderInfoComponent/>
  </header>
</template>

<style scoped>
.header {
  min-width: 320px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background: #181818;
}
</style>