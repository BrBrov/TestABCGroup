<script setup>
import { computed, ref } from 'vue';

const answerUser = ref('');

const { test, nameChecked } = defineProps({
  test: Array,
  nameChecked: String
});

computed(() => answerUser.value = nameChecked);

const emit = defineEmits(['check-answer']);

function checkAnswer(event) {
  answerUser.value = event.target.value;
  emit('check-answer', event.target.value);
}

</script>

<template>
  <ul class="answer">
    <li class="answer__wrapper" v-for="(answer, index) in test" :key="answer">
      <div class="answer__checkbox-wrapper">
        <label class="answer__checkbox" :for="'answer__check-' + index">
          <input :id="'answer__check-' + index"
                 class="answer__check-class"
                 type="checkbox"
                 :value="answer"
                 :checked="nameChecked === answer"
                 @click="(e) => checkAnswer(e)">
          <span class="answer__mark"></span>
        </label>
      </div>
      <div class="answer__description">{{answer}}</div>
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
  position: relative;
  z-index: 1;
  display: flex;
  width: 320px;
  height: 50px;
  justify-content: flex-start;
  align-items: center;
  gap: 39px;
}

.answer__wrapper::before {
  position: absolute;
  z-index: 0;
  width: 320px;
  height: 50px;
  content: '';
  background: #ffffff;
  opacity: 0.15;
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
  background: #cccccc;
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

</style>