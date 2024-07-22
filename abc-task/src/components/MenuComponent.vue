<script setup>
import closeImg from '@/assets/svg/cross.svg';
import { inject, onBeforeMount, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import { testingState } from '@/pinia/testingState.js';

const itemsList = ['Главная', 'Информация о тесте', 'Пройти тест'];

const router = useRouter();
const state = testingState();

const setMenuShow = inject('isShowMenuSet');

function reset(path) {
  setTimeout(() => {
    state.resetQuiz();
    setMenuShow();
    router.push(path);
  }, 250);
}

function handleClick({ target }) {
  switch (target.dataset.id) {
    case '0':
      return reset('/');
    case '1':
      break;
    case '2':
      return reset('/quiz?test=1');
    default:
      break;
  }
}

function preventScroll(event) {
  event.preventDefault();
}

onBeforeMount(() => {
  window.addEventListener('wheel', preventScroll, { passive: false });
  window.addEventListener('touchmove', preventScroll, { passive: false });
  window.addEventListener('keydown', preventScroll, { passive: false });
});

onBeforeUnmount(() => {
  window.removeEventListener('wheel', preventScroll);
  window.addEventListener('touchmove', preventScroll);
  window.addEventListener('keydown', preventScroll);
});
</script>

<template>
  <div class="menu__wrapper">
    <nav class="menu">
      <div class="menu__close">
        <img class="menu__close-img" :src="closeImg" alt="Close" @click.stop="setMenuShow" />
      </div>
      <ul class="menu__navigation" @click="handleClick">
        <li class="menu__item" v-for="(item, index) in itemsList" :key="index" :data-id="index">
          {{ item }}
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.menu__wrapper {
  display: flex;
  position: absolute;
  z-index: 2;
  width: 100%;
  height: calc(100vh + 46px);
  flex-direction: column;
  justify-content: flex-start;
  backdrop-filter: blur(2px);
}

.menu {
  display: flex;
  width: 320px;
  height: 569px;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 18px 13px 348px 23px;
  flex-direction: column;
  justify-content: flex-start;
  background: #181818;
}

.menu__close {
  display: flex;
  width: 100%;
  justify-content: flex-end;
}

.menu__close-img {
  width: 28px;
  height: 28px;
  fill: #ffc700;
  cursor: pointer;
}

.menu__navigation {
  display: flex;
  width: 100%;
  margin-top: 64px;
  padding: 0;
  list-style: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 27px;
}

.menu__item {
  font-family: var(--font-roboto), sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 137%;
  text-transform: uppercase;
  cursor: pointer;
  color: #fff;
}
.menu__item:active {
  color: #f4ce0c;
}
</style>
