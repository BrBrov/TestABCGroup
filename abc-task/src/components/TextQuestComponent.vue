<script setup>
import VerticalAnswerComponent from '@/components/VerticalAnswerComponent.vue';
import { testingState } from '@/pinia/testingState.js';
import { testsStore } from '@/pinia/testsStore.js';
import { computed } from 'vue';

const state = testingState();
const tests = testsStore();

const currentTest = computed(() => tests.getTest(state.getStep()));
const fontDescriptionSize = computed(() => {
  if(currentTest.value.description.length > 36) return '16px';

  return '20px';
});
const imgUrl = computed(() => {
  if(currentTest.value.url) {
    return import.meta.resolve(currentTest.value.url);
  }

  return '';
});

</script>

<template>
  <div class="test">
      <h3 class="test__description">
        {{currentTest.description}}
      </h3>
      <div class="test__img-wrapper" v-if="imgUrl">
        <img class="test__image" :src="imgUrl" alt="Test picture">
      </div>
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
  align-self: center;
  max-width: 289px;
  text-align: center;
  font-family: var(--font-pt-serif), sans-serif;
  font-weight: 400;
  font-size: v-bind(fontDescriptionSize);
  letter-spacing: 0.05em;
  white-space: pre-line;
  color: #fff;
}

.test__img-wrapper {
  align-self: center;
  height: 115px;
}

.test__image {
  height: 100%;
}
</style>