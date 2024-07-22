import { defineStore } from 'pinia';
import { ref } from 'vue';

export const testingState = defineStore('processing', () => {
  const processing = ref({
    step: 0,
    answers: []
  });

  function incrementStep() {
    processing.value.step++;
  }

  function resetQuiz() {
    processing.value.step = 0;
    processing.value.answers = [];
  }

  function addAnswer(answer) {
    processing.value.answers[processing.value.step] = answer;
  }

  function getAnswers() {
    return processing.value.answers;
  }

  function getCurrentAnswer() {
    if (processing.value.answers.length === 0) return '';
    return processing.value.answers[processing.value.step];
  }

  function getStep() {
    return processing.value.step;
  }

  return { processing, incrementStep, resetQuiz, addAnswer, getAnswers, getCurrentAnswer, getStep };
});
