<script setup>
import ButtonComponent from '@/components/ButtonComponent.vue';
import arrow from '@/assets/svg/arrow-up.svg';
import { useRouter } from 'vue-router';

const router = useRouter();

function buttonClick() {
  router.push('/quiz?test=1');
}

</script>

<template>
<section class="header__info">
  <div class="header__top-wrapper">
    <h2 class="header__text-md">Пройдите точный и быстрый</h2>
    <h1 class="header__text-title">Tecт на определение IQ</h1>
  </div>
  <div class="header__bottom-wrapper">
    <ButtonComponent text = 'Пройти тест' :isDisabled = "false" @button-click="buttonClick"/>
    <div class="header__text-bottom">
      <span class="header__text-yellow">И получите рекомендации по развитию своего интеллекта</span>
      <span class="header__text-white">и улучшению финансового благосостояния и личной жизни</span>
    </div>
    <div class="header__bottom-block">
      <div class="header__arrow-wrapper">
        <img class="header__arrow-up" :src="arrow" alt="Перейти в начало"/>
      </div>
      <h4 class="header__arrow-description">Подробнее</h4>
    </div>
  </div>
</section>
</template>

<style scoped>
.header__info {
  display: flex;
  width: 100%;
  min-height: 522px;
  box-sizing: border-box;
  padding: 27px 0 11px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: url('../assets/webp/bg_top.webp') 0 0/106% auto no-repeat;
}

.header__top-wrapper {
  display: flex;
  width: 270px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
}

.header__text-md {
  margin: 0;
  font-family: var(--font-pt-serif),sans-serif;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.05em;
  text-align: center;
  color: #fff;
}

.header__text-title {
  width: 250px;
  margin: 0;
  text-align: center;
  font-family: var(--font-yeseva-one), sans-serif;
  font-weight: 400;
  font-size: 30px;
  text-transform: uppercase;
  color: #ffc700;
  text-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
}

.header__bottom-wrapper {
  display: flex;
  width: 300px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.header__text-bottom {
  display: flex;
  box-sizing: content-box;
  margin-top: 27px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2px;
}

.header__text-yellow,
.header__text-white {
  font-family: var(--font-pt-serif), sans-serif;
  font-weight: 700;
  font-size: 15px;
  line-height: 127%;
  letter-spacing: 0.05em;
  text-align: center;
}

.header__text-yellow {
  color: #ffc700;
}

.header__text-white {
  color: #ffffff;
}

.header__bottom-block {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.header__arrow-wrapper {
  display: flex;
  box-sizing: content-box;
  width: 16px;
  height: 16px;
  margin-top: 11px;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border-radius: 50%;
}

.header__arrow-up {
  width: 7.47px;
  height: 7.47px;
  fill: #0c0b10;
}

.header__arrow-description {
  margin: 3px auto 0;
  font-family: var(--font-pt-serif), sans-serif;
  font-weight: 400;
  font-size: 8px;
  letter-spacing: 0.05em;
  text-align: center;
  color: #fff;
}
</style>