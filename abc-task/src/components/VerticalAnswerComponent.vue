<script setup>

import { testingState } from '@/pinia/testingState.js';
import { testsStore } from '@/pinia/testsStore.js';
import { computed } from 'vue';

const classForWrapper = {
  checked: 'answer__wrapper-checked',
  unchecked: 'answer__wrapper'
};

const classForTextColor = {
  checked: 'answer__description-checked',
  unchecked: 'answer__description'
};

const state = testingState();
const tests = testsStore();

const currentTest = computed(() => tests.getTest(state.getStep()));
const currentAnswer = computed(() => state.getCurrentAnswer());
const answerHeight = computed(() => {
  const answers = tests.getTest(state.getStep()).answers;
  if(answers.length > 5) return '40px';

  return '50px';
});

function setAnswer({target}) {
  const value = target.dataset.answer;
  console.log(value);
  state.addAnswer(value);
}

</script>

<template>
  <ul class="answer">
    <li :class="currentAnswer === answer ? classForWrapper.checked : classForWrapper.unchecked"
        v-for="(answer, index) in currentTest.answers"
        :key="answer"
        :data-answer="answer"
        @click="setAnswer">
      <div class="answer__checkbox-wrapper">
        <label class="answer__checkbox" :for="'answer__check-' + index">
          <input :id="'answer__check-' + index"
                 class="answer__check-class"
                 type="checkbox"
                 :data-answer="answer"
                 :checked="currentAnswer === answer">
          <span class="answer__mark"></span>
        </label>
      </div>
      <div :class="currentAnswer === answer ? classForTextColor.checked : classForTextColor.unchecked"
           :key="answer">
        {{answer}}
      </div>
    </li>
  </ul>
</template>

<style scoped>
.answer {
  display: flex;
  padding: 0;
  flex-direction: column;
  list-style: unset;
  gap: 8px;
}

.answer__wrapper {
  flex-shrink: 1;
  position: relative;
  z-index: 1;
  display: flex;
  width: 320px;
  height: v-bind(answerHeight);
  justify-content: flex-start;
  align-items: center;
  gap: 39px;
}

.answer__wrapper::before {
  position: absolute;
  z-index: 0;
  width: 320px;
  height: v-bind(answerHeight);
  content: '';
  background: #ffffff;
  opacity: 0.15;
}

.answer__wrapper-checked {
  position: relative;
  z-index: 1;
  display: flex;
  width: 320px;
  height: v-bind(answerHeight);
  justify-content: flex-start;
  align-items: center;
  gap: 39px;
  background: #ffc700;
}

.answer__checkbox-wrapper {
  width: 20px;
  height: 20px;
  margin-left: 35px;
}

.answer__checkbox {
  position: relative;
}

.answer__mark {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 1px solid #cccccc;
  border-radius: 50%;
}

.answer__check-class {
  display: none;
}

.answer__check-class:checked ~ .answer__mark {
  background: #2950c2;
  border: 1px solid #272727;
}

.answer__description {
  font-family: var(--font-pt-serif), sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 322%;
  letter-spacing: 0.05em;
  text-transform: capitalize;
  color: #ffffff;
}

.answer__description-checked {
  font-family: var(--font-pt-serif), sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 322%;
  letter-spacing: 0.05em;
  text-transform: capitalize;
  color: #272727;
}

</style>