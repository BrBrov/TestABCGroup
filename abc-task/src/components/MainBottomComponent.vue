<script setup>
import ButtonComponent from '@/components/ButtonComponent.vue';
import logoBrain from '@/assets/webp/brain_color.webp';
import { useRouter } from 'vue-router';

const router = useRouter();

function buttonClick() {
  router.push('/quiz?test=1');
}
</script>

<template>
  <section class="main__bottom">
    <h2 class="main__bottom-title">
      Также по результатам теста<br>
      <strong class="main__strong-text strong-text_uppercase">вы получите</strong> подробные<br>
      <strong class="main__strong-text strong-text_uppercase">советы</strong> по определению наиболее<br>
      перспективной <strong class="main__strong-text strong-text_uppercase">для вашего</strong><br>
      <strong class="main__strong-text strong-text_uppercase">типа </strong><strong class="main__strong-text">интеллекта </strong><strong>сферы<br>
      деятельности</strong>,<br>
      которая принесет вам скорейший<br>
      финансовый результат.<br>
    </h2>
    <img class="main__bottom-img" :src="logoBrain" alt="Brain banner">
    <ButtonComponent text="Пойти тест" :isDisabled="false" @button-click="buttonClick"/>
  </section>
</template>

<style scoped>
.main__bottom {
  display: flex;
  width: 100%;
  box-sizing: border-box;
  padding: 38px 11px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.main__bottom-title {
  margin: 0;
  font-family: var(--font-pt-serif), sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #272727;
}

.main__strong-text {
  font-weight: 700;
}

.strong-text_uppercase {
  text-transform: uppercase;
}

.main__bottom-img {
  margin: 38px;
  width: 232px;
  height: 180px;
}

</style>