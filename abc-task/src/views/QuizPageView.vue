<script setup>
import HeaderMenuComponent from '@/components/HeaderMenuComponent.vue';
import { computed, onMounted } from 'vue';
import TextQuestComponent from '@/components/TextQuestComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import { testingState } from '@/pinia/testingState.js';
import { testsStore } from '@/pinia/testsStore.js';
import { useRoute, useRouter } from 'vue-router';

const { query, path } = useRoute();
const { push } = useRouter();

const state = testingState();
const tests = testsStore();

const currentTestNumber = computed(() => state.getStep());
const maxTest = computed(() => tests.getNumberOfTests(state.getStep()));
const isButtonEnabled = computed(() => {
  return !state.getCurrentAnswer();
});

function nextTask() {
  state.incrementStep();
  push(path + `?test=${currentTestNumber.value}`);
}

onMounted(() => {
  if (!query.test) {
    state.resetQuiz();
    return push(`/quiz?test=${state.getStep()}`);
  }

  const step = parseInt(query.test);

  if (!step || state.getStep() !== query.test) {
    if (state.getStep() === 0) state.incrementStep();

    return push(path + `?test=${state.getStep()}`);
  }
});

</script>

<template>
  <div class="wrapper">
    <header class="header">
      <HeaderMenuComponent/>
    </header>
    <main class="main">
      <progress class="main__progress" :max="maxTest" :value="currentTestNumber"></progress>
      <TextQuestComponent v-if="tests.getTest(currentTestNumber).type === 'text'"/>
    </main>
    <footer class="footer">
      <ButtonComponent text="Далее" :isDisabled = 'isButtonEnabled' @click="nextTask"/>
    </footer>
  </div>

</template>

<style scoped>
.wrapper {
  min-width: 320px;
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
  height: 431px;
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

.footer {
  display: flex;
  height: 90px;
  justify-content: center;
  align-items: center;
}
</style>