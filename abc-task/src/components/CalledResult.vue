<script setup>
import { defineProps } from 'vue';
const dataPerson = defineProps({
  data: Object
});
</script>

<template>
  <div class="person">
    <span class="person__name">Name: {{ dataPerson.data.name }}</span>
    <span class="person__planet">Planet: {{ dataPerson.data.planet }}</span>
  </div>
</template>

<style scoped>
.person {
  display: flex;
  width: 270px;
  box-sizing: border-box;
  margin-top: 15px;
  padding: 5px 10px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border: 1px dotted #eb1b00;
  border-radius: 12px;
  background: #1c2741;
}

.person__name {
  font-family: var(--font-pt-serif), sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 273%;
  letter-spacing: 0.1em;
  color: #3bde7c;
}

.person__planet {
  font-family: var(--font-roboto), sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  letter-spacing: 0.43em;
  color: rgba(255, 255, 255, 0.5);
  text-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
}
</style>
