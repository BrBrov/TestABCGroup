<script setup>
import HeaderMenuComponent from '@/components/HeaderMenuComponent.vue';
import loadingImg from '@/assets/svg/loader.svg';
import { useRouter } from 'vue-router';
import { testingState } from '@/pinia/testingState.js';
import { testsStore } from '@/pinia/testsStore.js';
import { computed, inject, onMounted, reactive, ref, watch } from 'vue';
import MenuComponent from '@/components/MenuComponent.vue';

const { push } = useRouter();

const state = testingState();
const tests = testsStore();
const isShowMenu = reactive(inject('isShowMenu'));

const currentTestNumber = computed(() => state.getStep());

const loadingText = ref('');
const timingCount = ref(0);

onMounted(() => {
  if (tests.getNumberOfTests() !== state.getAnswers().length) return push('/');

  if (!timingCount.value) {
    return setInterval(() => {
      timingCount.value++;
      loadingText.value = loadingText.value + '.';
    }, 100);
  }
});

watch(timingCount, () => {
  if (timingCount.value === 68) return push('/result');
});
</script>

<template>
  <MenuComponent v-if="isShowMenu" />
  <div class="wrapper">
    <header class="header">
      <HeaderMenuComponent />
    </header>
    <main class="main">
      <progress
        class="main__progress"
        :max="tests.getNumberOfTests()"
        :value="currentTestNumber + 1"
      ></progress>
      <section class="main__processing">
        <h2 class="main__progress-title">Обработка результатов</h2>
        <div class="main__loading-wrapper">
          <img class="main__loading" :src="loadingImg" alt="Loading..." />
        </div>
      </section>
    </main>
    <footer class="footer">
      <div class="footer__loading-text">Определение стиля мышления{{ loadingText }}</div>
    </footer>
  </div>
</template>

<style scoped>
.wrapper {
  width: 320px;
  height: 100vh;
  min-height: 568px;
  margin: 0 auto;
  background: url('../assets/webp/bg_quiz.webp') center/cover no-repeat;
}

.header {
  width: 100%;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background: #181818;
}

.main {
  display: flex;
  width: 100%;
  height: 266px;
  box-sizing: border-box;
  padding: 17px 0 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.main__progress {
  display: block;
  width: 260px;
  height: 11px;
  background: #f2f3f3;
  border-radius: 10px;
  opacity: 0.99;
}

.main__progress::-webkit-progress-bar,
.main__progress::-webkit-progress-inner-element {
  border-radius: 10px;
}

.main__progress::-webkit-progress-value {
  border-radius: 10px;
  background: #3bde7c;
}

.main__processing {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.main__progress-title {
  width: 237px;
  margin: 49px auto 33px;
  font-family: var(--font-pt-serif), sans-serif;
  font-weight: 400;
  font-size: 23px;
  letter-spacing: 0.05em;
  text-align: center;
  color: #fff;
}

@keyframes loading {
  from {
    transform: rotate(0);
  }
  50% {
    transform: rotate(-180deg);
  }
  to {
    transform: rotate(-360deg);
  }
}
.main__loading-wrapper {
  display: flex;
  width: 65px;
  height: 65px;
  justify-content: center;
  align-items: center;
}

.main__loading {
  width: 100%;
  height: 100%;
  animation: loading 3s linear infinite;
}

.footer {
  display: flex;
  box-sizing: border-box;
  margin: 0 22px;
  justify-content: flex-start;
  align-items: center;
}

.footer__loading-text {
  width: 276px;
  height: 50px;
  line-break: anywhere;
  font-family: var(--font-pt-serif), sans-serif;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0.05em;
  color: #fff;
}
</style>
