<script setup>
import menu from '@/assets/svg/menu.svg';
import brainImage from '@/assets/webp/brain.webp';
import { useRoute } from 'vue-router';

const route = useRoute();

</script>

<template>
  <div class="header__menu">
    <button class="header__btn">
      <img class="header__menu-img" :src="menu" alt="Open menu">
    </button>
    <div class="header__brain" v-if="route.path !=='/'">
      <img class="header__brain-img" :src="brainImage" alt="Brain logo">
    </div>
    <h1 class="header__label" v-if="route.path !=='/' && route.path !=='/result'">
      тест на определение IQ
    </h1>
    <h1 class="header__label-result" v-if="route.path ==='/result'">
      ГОТОВО!
    </h1>
  </div>
</template>

<style scoped>
.header__menu {
  display: flex;
  height: 46px;
  box-sizing: border-box;
  padding: 0 15px;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  gap: 9px;
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

.header__brain {
  width: 47px;
  height: 46px;
}

.header__brain-img {
  width: 100%;
  height: 100%;
}

.header__label {
  margin: 0;
  font-family: var(--font-yeseva-one), sans-serif;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #ffc700;
}

.header__label-result {
  width: 168px;
  height: 18px;
  margin-left: 24px;
  color: #FFC700;
  font-size: 20px;
  font-family: var(--font-yeseva-one), sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 2px;
  word-wrap: break-word
}
</style>