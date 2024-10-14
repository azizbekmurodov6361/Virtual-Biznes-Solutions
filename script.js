const card = document.querySelectorAll(".service__card");

window.addEventListener("scroll", () => {
  card.forEach((item) => {
    item.style.transform = `translateX(${scrollX})`;
  });
});


const card2 = document.querySelector(".section4__cards");

console.log(card2);

window.addEventListener("scroll", () => {
  card2.style.transform = `translateX(${scrollX})`;
});


const title = document.querySelector('.content__title');

const text = title.innerHTML; 
title.innerHTML = '';

function rec(i=0) {
    title.innerHTML += text[i];
    i++;
    if (i < text.length) {
        setTimeout(() => {
            rec(i);
        }, 100);
    }
}
rec();