<script setup>
import VerticalAnswerComponent from '@/components/VerticalAnswerComponent.vue';
import { testingState } from '@/pinia/testingState.js';
import { testsStore } from '@/pinia/testsStore.js';
import { computed } from 'vue';

const state = testingState();
const tests = testsStore();

const currentTest = computed(() => tests.getTest(state.getStep()));

</script>

<template>
  <div class="test">
      <h3 class="test__description">
        {{currentTest.description}}
      </h3>
      <VerticalAnswerComponent/>
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
  text-align: center;
  color: #fff;
}

</style>