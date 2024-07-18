import { defineStore } from 'pinia';
import { ref } from 'vue';

export const testingState = defineStore('processing',
  () => {
  const processing = ref({
    step: 0,
    answers: []
  });

  const incrementStep = function () {
    processing.value.step++;
  }

  const resetQuiz = function () {
    processing.value.step = 0;
    processing.value.answers = [];
  };

  const addAnswer = function (answer) {
    processing.value.answers.push(answer);
  }

  const getAnswers = function (){
     return processing.value.answers;
  };

  const getStep = function () {
    return processing.value.step;
  };

  return {processing, incrementStep, resetQuiz, addAnswer, getAnswers, getStep};
  }
);
