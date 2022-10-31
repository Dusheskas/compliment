"use strict";

const bg = document.querySelector("body");
const text = document.querySelector("h1");
const button = document.querySelector("button");


const arr = ["Я", "тебе", "дуже", "сильно", "кохаю", "❤", "а також..", "У", "тебе", "класна", "дупка", "😊 🍑"];
const colors = ["#F2E0BD", "#D90404", "#F2E0BD"];

let i = 0, j = 1;

button.onclick = function () {
   // Чтоб массив повторялся
   if (i == arr.length) {
      i = 0;
   }

   // Вывод данных из массива
   text.innerText = arr[i];
   i++;

   // Меняю цвета туда сюда
   bg.style.backgroundColor = colors[j];
   text.style.color = colors[j + 1];
   button.style.color = colors[j + 1];
   button.style.borderColor = colors[j + 1];
   j++;
   if (j > 1) {
      j = 0;
   }
}