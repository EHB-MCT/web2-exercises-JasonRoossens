"use strict"

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const randomNumber = randomIntFromInterval(1, 20)
console.log(randomNumber);

document.getElementById('form')
    .addEventListener('submit', event => {
        event.preventDefault();

        let guestNumber = document.getElementById('number').value;
        console.log(guestNumber);

        if (guestNumber > randomNumber) {
            document.getElementById('message').innerHTML =
                `Guess lower`;
        } else if (guestNumber < randomNumber) {
            document.getElementById('message').innerHTML =
                `Guess higher`;
        } else if (guestNumber = randomNumber) {
            document.getElementById('message').innerHTML =
                `Guess right`;
        }

    });