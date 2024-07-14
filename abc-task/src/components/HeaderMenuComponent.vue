<script setup>
import menu from '@/assets/svg/menu.svg';
</script>

<template>
  <div class="header__menu">
    <button class="header__btn">
      <img class="header__menu-img" :src="menu" alt="Open menu">
    </button>
  </div>
</template>

<style scoped>
.header__menu {
  height: 46px;
  box-sizing: border-box;
  padding: 17px 15px 13px;
}

.header__btn {
  width: 24px;
  height: 16px;
  padding: 0;
  background: #181818;
  border: none;
}

.header__menu-img {
  object-fit: cover;
  fill: #696969;
}
</style>