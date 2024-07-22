<script setup>
import { testingState } from '@/pinia/testingState.js';
import { testsStore } from '@/pinia/testsStore.js';
import { computed } from 'vue';

const state = testingState();
const tests = testsStore();

const currentTest = computed(() => tests.getTest(state.getStep()));

function setAnswer({ target }) {
  state.addAnswer(target.dataset.answer);
}
</script>

<template>
  <div class="test">
    <h3 class="test__description">
      {{ currentTest.description }}
    </h3>
    <div class="test__answers-wrapper">
      <div class="test__answer-one" v-for="(answer, index) in currentTest.answers" :key="index">
        <div
          :class="state.getCurrentAnswer() === answer ? 'test__answer-checked' : 'test__answer'"
          :style="{ 'background-color': answer }"
          :data-answer="answer"
          @click="setAnswer"
        ></div>
      </div>
    </div>
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
  align-items: center;
}

.test__description {
  width: 280px;
  font-family: var(--font-pt-serif), sans-serif;
  font-weight: 400;
  font-size: 19px;
  line-height: 121%;
  letter-spacing: 0.05em;
  text-align: center;
  color: #fff;
}

.test__answers-wrapper {
  display: flex;
  width: 275px;
  height: 275px;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.test__answer-one {
  display: flex;
  width: 81px;
  height: 81px;
  justify-content: center;
  align-items: center;
}
.test__answer {
  width: 75px;
  height: 75px;
}

.test__answer-checked {
  width: 81px;
  height: 81px;
  box-sizing: border-box;
  border: 6px solid #ffc700;
}
</style>
