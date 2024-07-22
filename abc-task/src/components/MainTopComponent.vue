<script setup>
import topQuote from '@/assets/svg/top-quote.svg';
import bottomQuote from '@/assets/svg/bottom-quote.svg';
</script>

<template>
  <section class="main__top">
    <div class="main__top__wrapper">
      <img class="main__top-quotes" :src="topQuote" alt="Top quote" />
      <h2 class="main__top-text">
        Профессиональный<br />
        IQ-тест позволяет не<br />
        только определить<br />
        коэффициент вашего<br />
        интеллекта,<br />
        но и выработать список<br />
        рекомендаций для<br />
        повышения этого<br />
        показателя.
      </h2>
      <img class="main__bottom__quotes" :src="bottomQuote" alt="Bottom quote" />
    </div>
  </section>
</template>

<style scoped>
.main__top {
  width: 100%;
  height: 339px;
  box-sizing: border-box;
  padding: 43px 0 24px;
  background:
    radial-gradient(
      47% 32% at 50% 55%,
      #2950c2 0%,
      rgba(38.08, 91.25, 198.69, 0.96) 41%,
      rgba(39, 98, 187, 0) 85%
    ),
    url('../assets/webp/bg_middle.webp') center/cover no-repeat;
}

.main__top__wrapper {
  display: flex;
  width: 240px;
  margin: 0 auto;
  flex-direction: column;
}

.main__top-quotes,
.main__bottom__quotes {
  width: 23px;
  height: 22.35px;
  fill: #fff;
}

.main__bottom__quotes {
  align-self: flex-end;
}

.main__top-text {
  width: 220px;
  align-self: center;
  margin: 17px 0 0;
  font-family: var(--font-yeseva-one), sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 128%;
  letter-spacing: 0.05em;
  text-align: center;
  color: #fff;
}
</style>
