<script setup>
import callIcon from '@/assets/svg/call.svg';
import { useRouter } from 'vue-router';
import { testingState } from '@/pinia/testingState.js';
import { testsStore } from '@/pinia/testsStore.js';
import HeaderMenuComponent from '@/components/HeaderMenuComponent.vue';
import { inject, onMounted, reactive, ref, watch } from 'vue';
import CalledResult from '@/components/CalledResult.vue';
import MenuComponent from '@/components/MenuComponent.vue';

const { push } = useRouter();

const state = testingState();
const tests = testsStore();

const isShowMenu = reactive(inject('isShowMenu'));

const minutes = ref(10);
const seconds = ref(0);
const timerIndicators = ref(':');
const fetchedData = ref();

function timer() {
  setInterval(() => {
    if (!seconds.value) {
      seconds.value = 59;
      return (minutes.value = --minutes.value);
    }

    seconds.value = --seconds.value;
  }, 1000);

  setInterval(() => {
    timerIndicators.value = timerIndicators.value === ':' ? ' ' : ':';
  }, 500);
}

async function getData() {
  const personData = await fetch('https://swapi.dev/api/people/1/');
  const person = await personData.json();

  const planetData = await fetch(person.homeworld);
  const planet = await planetData.json();

  fetchedData.value = {
    name: person.name,
    planet: planet.name
  };
}

watch(minutes, () => {
  if (minutes.value < 0) return push('/');
});

onMounted(() => {
  if (tests.getNumberOfTests() !== state.getAnswers().length) return push('/');

  timer();
});
</script>

<template>
  <MenuComponent v-if="isShowMenu" />
  <div class="wrapper">
    <div class="wrapper__top">
      <header class="header">
        <HeaderMenuComponent />
      </header>
      <main class="main">
        <div class="main__text">
          <h2 class="main__text-top">Ваш результат рассчитан:</h2>
          <h3 class="main__text-bottom">
            <u>Вы относитесь к 3%</u> респондентов, чей<br />
            уровень интеллекта более чем на<br />
            15 пунктов отличается от среднего в<br />
            большую или меньшую сторону!
          </h3>
        </div>
        <h2 class="main__label">Скорее получите свой результат!</h2>
        <div class="main__info-wrapper">
          <h3 class="main__info">
            В целях защиты персональных<br />
            данных результат теста, их<br />
            подробная интерпретация и<br />
            рекомендации доступны в виде<br />
            голосового сообщения по звонку с<br />
            вашего мобильного телефона
          </h3>
        </div>
        <div class="main__timer">
          <span class="main__timer-info">Звоните скорее, запись доступна всего</span>
          <span class="main__timer-process">
          {{ minutes < 10 ? `0${minutes}` : minutes }}{{ timerIndicators
            }}{{ seconds < 10 ? `0${seconds}` : seconds }}
          <span class="main__timer-minutes"> минут</span>
        </span>
        </div>
        <button class="main__call-button" @click="getData">
          <img class="main__button-icon" :src="callIcon" alt="Call icon" />
          <span class="main__button-text">
          Позвонить и прослушать<br />
          результат
        </span>
        </button>
        <CalledResult :data="fetchedData" v-if="fetchedData" />
      </main>
    </div>
    <footer class="footer">
      <span class="footer__text">TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU</span>
      <span class="footer__text">DE DIVERTISMENT. PRIN FOLOSIREA LUI</span>
      <span class="footer__text">DECLARATI CA AVETI 18 ANI IMPLINITI,</span>
    </footer>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  width: 320px;
  height: calc(100vh + 9px);
  margin: 0 auto;
  flex-direction: column;
  justify-content: space-between;
  background: url('../assets/webp/bg_result.webp') top/100% fixed no-repeat;
}

.wrapper__top {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.header {
  width: 100%;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background: #181818;
}

.main {
  display: flex;
  height: 610px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.main__text {
  display: flex;
  width: 291px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.main__text-top {
  margin-top: 18px;
  font-family: var(--font-pt-serif), sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 107%;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-align: center;
  color: #fff;
}

.main__text-bottom {
  margin: 0;
  font-family: var(--font-pt-serif), sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  text-decoration-skip-ink: none;
  text-align: center;
  color: #fff;
}

.main__label {
  font-family: var(--font-pt-serif), sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 122%;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-align: center;
  color: #3bde7c;
}

.main__info-wrapper {
  box-sizing: border-box;
  width: 256px;
  height: 114px;
  padding: 15px 12px 11px;
  border-radius: 6px;
  background: #1c2741;
}

.main__info {
  font-family: var(--font-roboto), sans-serif;
  font-weight: 500;
  font-size: 8px;
  line-height: 175%;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  text-align: center;
  color: #fff;
}

.main__timer {
  display: flex;
  box-sizing: border-box;
  width: 240px;
  padding: 14px 0 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.main__timer-info {
  font-family: var(--font-pt-serif), sans-serif;
  font-weight: 400;
  font-size: 11px;
  letter-spacing: 0.05em;
  color: #3bde7c;
}

.main__timer-process {
  font-family: var(--font-pt-serif), sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  letter-spacing: 0.1em;
  text-align: center;
  color: #3bde7c;
}

.main__timer-minutes {
  font-size: 11px;
  text-transform: lowercase;
}

.main__call-button {
  display: flex;
  box-sizing: border-box;
  width: 290px;
  height: 92px;
  padding-left: 15px;
  justify-content: flex-start;
  align-items: center;
  border: none;
  border-radius: 5px;
  gap: 18px;
  background: #eb1b00;
  cursor: pointer;
}

.main__button-icon {
  width: 29px;
  height: 29px;
}

.main__button-text {
  text-align: left;
  font-family: var(--font-roboto), sans-serif;
  font-weight: 900;
  font-size: 14px;
  letter-spacing: 0.05em;
  color: #fff;
}

.footer {
  display: flex;
  min-height: 20px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.footer__text {
  font-family: var(--font-roboto), sans-serif;
  font-weight: 400;
  font-size: 7px;
  line-height: 129%;
  letter-spacing: 0.43em;
  text-transform: uppercase;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  text-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
}
</style>
