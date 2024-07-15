<script setup>
import logoLicense from '@/assets/svg/license.svg';

</script>

<template>
<footer class="footer">
  <h2 class="footer__text">
    Прохождение теста займет<br>
    у вас не более <strong class="footer__text-colored">12 минут</strong>, а его<br>
    <strong class="footer__text-bold">результаты</strong> вы сможете<br>
    <strong class="footer__text-colored">использовать всю жизнь.</strong>
  </h2>
  <aside class="footer__description">
    Профессиональная<br>
    интерпретация и детально<br>
    <strong class="footer__description-bold">проработанные<br>
    рекомендации</strong> позволят вам<br>
    качественно <strong class="footer__description-bold">изменить все<br>
    аспекты своей жизни</strong>: от<br>
    финансового до любовного.
  </aside>
  <button class="footer__button">
    <span class="footer__btn-text">Пойти</span>
  </button>
  <div class="footer__made">
    <img class="footer__made-license" :src="logoLicense" alt="Logo license">
    <span class="footer__made-year">2019</span>
  </div>
</footer>
</template>

<style scoped>
.footer {
  display: flex;
  width: 100%;
  height: 533px;
  box-sizing: border-box;
  padding: 56px 12px 13px;
  flex-direction: column;
  align-items: center;
  background: url('../assets/webp/bg_bottom.webp') top/cover no-repeat;
}

.footer__text {
  width: 303px;
  margin: 0;
  font-family: var(--font-merriweather), sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 133%;
  letter-spacing: 0.05em;
  color: #fff;
}

.footer__text-colored {
  font-weight: 900;
  color: #ffc700;
}

.footer__text-bold {
  font-weight: 900;
}

.footer__description {
  box-sizing: border-box;
  width: 303px;
  height: 216px;
  margin: 28px auto 33px;
  padding: 29px 15px 31px;
  font-family: var(--font-merriweather), sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 144%;
  letter-spacing: 0.05em;
  color: #181818;
  border-radius: 20px;
  background: rgba(243, 243, 242, 0.8);
}

.footer__description-bold {
  font-weight: 700;
}

.footer__button {
  width: 200px;
  height: 44px;
  background: unset;
  border: 1px solid rgba(243, 243, 242, 0.8);
  border-radius: 20px;
}

.footer__button:active {
  box-shadow: inset 0 0 2px 2px rgba(243, 243, 242, 0.8);
}

.footer__btn-text {
  font-family: var(--font-merriweather), sans-serif;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-align: center;
  color: #fff;
}

.footer__made {
  display: flex;
  margin-top: 52px;
  padding-right: 23px;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

.footer__made-license {
  width: 8px;
  height: 8px;
}

.footer__made-year {
  font-family: var(--font-roboto), sans-serif;
  font-weight: 400;
  font-size: 10px;
  line-height: 230%;
  letter-spacing: 0.05em;
  color: rgba(255, 255, 255, 0.5);
}

</style>