<script setup>
import VerticalAnswerComponent from '@/components/VerticalAnswerComponent.vue';
import { testingState } from '@/pinia/testingState.js';
import { testsStore } from '@/pinia/testsStore.js';
import { useRoute, useRouter } from 'vue-router';
import { computed, onMounted, ref } from 'vue';

const state = testingState();
const tests = testsStore();

const { query, path } = useRoute();
const { push } = useRouter();

const checkedTest = ref('');
const val = computed(() => {
  if (state.getStep() === 0) state.incrementStep();
  return tests.getTest(state.getStep());
});

function setAnswers (answer) {
  checkedTest.value = answer;
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
  <div class="test">
      <h3 class="test__description">
        {{val.description}}
      </h3>
      <VerticalAnswerComponent
        :v-if="val.type === 'text'"
        :test="val.answers"
        :nameChecked="checkedTest"
        @check-answer="setAnswers"
      />
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
  font-family: var(--font-pt-serif), sans-serif;
  font-weight: 400;
  font-size: 20px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-align: center;
  color: #fff;
}

</style>