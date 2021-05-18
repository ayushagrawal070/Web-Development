const button1 = document.querySelector('#player1');
const button2 = document.querySelector('#player2');
const reset = document.querySelector('#reset');
const score1 = document.querySelector('#p1');
const score2 = document.querySelector('#p2');
const turns = document.querySelector('#dropdown');
let num = 0;
turns.addEventListener('change', function () {
    switch (turns.value) {
        case "two":
            num = 2;
            break;
        case "three":
            num = 3;
            break;
        case "four":
            num = 4;
            break;
        case "five":
            num = 5;
            break;
        default:
            num = 0;
    }
    // console.log(num);

});

let s1 = 0;
let s2 = 0;
button1.addEventListener('click', function () {
    if (s1 < num) {
        s1++;
        score1.innerText = s1;
        if (s1 == num) {
            button1.disabled = true;
            button2.disabled = true;
        }
    }
});

button2.addEventListener('click', function () {
    if (s2 < num) {
        s2++;
        score2.innerText = s2;
        if (s2 == num) {
            button1.disabled = true;
            button2.disabled = true;
        }
    }
});

reset.addEventListener('click', function () {
    s1 = 0;
    score1.innerText = s1;
    s2 = 0;
    score2.innerText = s2;
    button1.disabled = false;
    button2.disabled = false;
});