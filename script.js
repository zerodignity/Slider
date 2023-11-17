//Слайдер текста 

// let div = document.querySelector('div');

// let texts = ['text1', 'text2', 'text3'];

// let i = 0;

// setInterval(timer, 1000);

// function timer() {
//     div.textContent = texts[i];
//     i = (i + 1) % texts.length;
// }

//Слайдер текста со стрелками

// let slider = document.querySelector('div');
// let left = document.querySelector('#left');
// let right = document.querySelector('#right');

// let texts = ['text1', 'text2', 'text3'];

// let i = 0;

// slider.textContent = texts[i];

// left.addEventListener('click', function() {
//      i = (i - 1 + texts.length) % texts.length; 
//      slider.textContent = texts[i];
// })

// right.addEventListener('click', function() {
//     i = (i + 1) % texts.length;
//     slider.textContent = texts[i];
// })

//Модифицируйте предыдущую задачу так, чтобы тексты не ходили по кругу, а просто не прокручивались дальше по достижению крайнего правого или левого положения.

// left.addEventListener('click', function() {
//     i = Math.max(0, i - 1); 
//     slider.textContent = texts[i];
// })

// right.addEventListener('click', function() {
//    i = Math.min(texts.length - 1, i + 1);
//    slider.textContent = texts[i];
// })

//Слайдер картинок через массив

let slider = document.querySelector('img');

let i = 0;

let texts = ['1.png', '2.png', '3.png'];

setInterval(timer, 1000);

function timer() {
    slider.src = texts[i];
    i = (i + 1) % texts.length;   
}