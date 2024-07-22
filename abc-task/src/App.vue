<script setup>
import { provide, ref } from 'vue';

const isMenuShow = ref(false);

provide('isShowMenuSet', driveMenu);
provide('isShowMenu', isMenuShow);

function driveMenu() {
  if (!isMenuShow.value) return (isMenuShow.value = true);

  return (isMenuShow.value = false);
}
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
