<script setup>
const props = defineProps({
  text: String,
  isDisabled: Boolean
});
const btnEmit = defineEmits(['button-click']);

function buttonClick() {
  btnEmit('button-click');
}
</script>

<template>
  <button class="header__btn" :disabled="isDisabled" @click="buttonClick">
    <span class="header__btn-text">{{ props.text }}</span>
  </button>
</template>

<style scoped>
.header__btn {
  width: 189px;
  height: 41px;
  border: none;
  border-radius: 20px;
  background: radial-gradient(50% 50% at 50% 50%, rgb(255, 199, 0) 0%, rgb(255, 199, 0) 100%);
}

.header__btn:disabled {
  box-shadow: inset 0 4px 10px 0 rgba(0, 0, 0, 0.25);
  background: #dadada;
}

.header__btn:active {
  width: 187px;
  height: 39px;
  box-shadow: inset 0 0 1px 4px rgba(0, 0, 0, 0.25);
}

.header__btn-text {
  font-family: var(--font-merriweather), sans-serif;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-align: center;
  color: #0d0c11;
}

</style>