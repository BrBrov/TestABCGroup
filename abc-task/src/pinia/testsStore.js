import { defineStore } from 'pinia';
import { ref } from 'vue';

export const testsStore = defineStore('tests', () => {
  const tests = ref([
    {
      id: 1,
      type: 'text',
      description: 'Ваш пол',
      url: '',
      answers: ['Мужчина', 'Женщина']
    },
    {
      id: 2,
      type: 'text',
      description: 'Укажите ваш возраст',
      url: '',
      answers: ['До 18', 'От 18 до 28',  'От 29 до 35', 'От 36 ']
    },
    {
      id: 3,
      type: 'text',
      description: 'Выберите лишнее',
      url: '',
      answers: ['Дом', 'Шалаш',  'Бунгало', 'Скамейка', 'Хижина']
    },
    {
      id: 4,
      type: 'text',
      description: 'Продолжите числовой ряд:\n' + '18 20 24 32',
      url: '',
      answers: ['62', '48',  '74', '57', '60', '77']
    },
    {
      id: 5,
      type: 'colored',
      description: 'Выберите цвет, который\n' + 'сейчас наиболее вам\n' + 'приятен:',
      url: '',
      answers: ['#a8a8a8', '#0000a9',  '#00a701', '#f60100', '#fdff19', '#a95403', '#000000', '#850068', '#46b2ac']
    },
    {
      id: 6,
      type: 'colored',
      description: 'Отдохните пару секунд, еще\n' + 'раз Выберите цвет, который\n' + 'сейчас наиболее Вам\n' + 'приятен:',
      url: '',
      answers: ['#a8a8a8', '#46b2ac',  '#a95403', '#00a701', '#000000', '#f60100', '#850068', '#fdff19', '#0000a9']
    },
    {
      id: 7,
      type: 'text',
      url: '',
      description: 'Какой из городов\n' + 'лишний?',
      answers: ['Лондон', 'Вашингтон',  'Париж', 'Нью-Йорк', 'Моксва', 'Оттава']
    },
    {
      id: 8,
      type: 'graphic',
      description: 'Выберите правильную фигуру\n' + ' из четырёх пронумерованных.',
      url: '../assets/webp/quiz-1.webp',
      isSeparator: false,
      answers: ['1', '2',  '3', '4']
    },
    {
      id: 9,
      type: 'text',
      url: '',
      description: 'Вам привычнее и важнее:',
      answers: ['Наслаждаться\n' +
        'каждой минутой \n' +
        'проведенного времени',
        'Быть устремленными \n' +
        'мыслями в будущее',
        'Учитывать в ежедневной \n' +
        'практике прошлый опыт']
    },
    {
      id: 10,
      type: 'text',
      url: '../assets/webp/quiz-2.webp',
      description: 'Какое определение, по-Вашему,\nбольше подходит к этому\nгеометрическому изображению:',
      answers: ['Оно остроконечное', 'Оно устойчиво',  'Оно-находится в состоянии равновесия']
    },
    {
      id: 11,
      type: 'graphic',
      description: 'Вставьте подходящее число',
      url: '../assets/webp/quiz-3.webp',
      isSeparator: true,
      answers: ['1', '2',  '3', '4']
    }
  ]);

  function getTest(step) {
    return step <= 0 ? tests.value[0] : tests.value[step];
  }

  function getNumberOfTests() {
    return tests.value.length;
  }

  return { tests, getTest, getNumberOfTests };
});
