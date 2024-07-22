<script setup>
import { testingState } from '@/pinia/testingState.js';
import { testsStore } from '@/pinia/testsStore.js';
import { computed } from 'vue';

const state = testingState();
const tests = testsStore();

const currentTest = computed(() => tests.getTest(state.getStep()));
const currentAnswer = computed(() => state.getCurrentAnswer());
const imgUrl = computed(() => import.meta.resolve(currentTest.value.url));

const classAnswer = {
  checked: 'test__checked',
  unchecked: 'test__unchecked'
};

function setAnswer({ target }) {
  state.addAnswer(target.dataset.answer);
}
</script>

<template>
  <div class="test">
    <h3 class="test__description">
      {{ currentTest.description }}
    </h3>
    <div class="test__img-wrapper">
      <img class="test__image" :src="imgUrl" alt="Test picture" />
    </div>
    <div class="test__separator-wrapper" v-if="currentTest.isSeparator">
      <div class="test__separator"></div>
    </div>
    <ul class="test__answers-wrapper">
      <li
        :class="
          (currentAnswer === answer ? classAnswer.checked : classAnswer.unchecked) + ' ' + index
        "
        v-for="(answer, index) in currentTest.answers"
        :key="answer"
        :data-answer="answer"
        @click="setAnswer"
      >
        <span class="test__answer" :data-answer="answer">{{ answer }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.test {
  display: flex;
  width: 100%;
  max-width: 320px;
  height: 403px;
  flex-direction: column;
  justify-content: space-evenly;
}

.test__description {
  width: 289px;
  margin: 0 auto;
  font-family: var(--font-pt-serif), sans-serif;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.05em;
  text-align: center;
  color: #fff;
}

.test__img-wrapper {
  display: flex;
  height: 207px;
  margin-bottom: 23px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.test__image {
  height: 100%;
}

.test__separator-wrapper {
  display: flex;
  width: 100%;
  height: 23px;
  flex-direction: column;
  justify-content: flex-start;
}

.test__separator {
  width: 100%;
  height: 4px;
  background: #f2f3f3;
  opacity: 0.15;
}

.test__answers-wrapper {
  display: flex;
  width: 286px;
  margin: 0 auto;
  padding: 0;
  justify-content: space-evenly;
}

.test__unchecked {
  display: flex;
  width: 41px;
  height: 41px;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
}

.test__checked {
  display: flex;
  width: 41px;
  height: 41px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  border: 6px solid #ffc700;
  background-color: #ffffff;
}

.test__answer {
  font-family: var(--font-pt-serif), sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 245%;
  text-transform: capitalize;
  text-align: center;
  color: #0d0c11;
}
</style>
