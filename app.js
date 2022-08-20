// UPDATE CARD DETAILS IN REALTIME

const cardHolder = document.getElementById('cardHolder');
const cardName = document.getElementById('cardName');
const cardNumber = document.getElementById('cardNumber');
const frontNumbers = document.getElementById('frontNumbers');
const month = document.getElementById('month');
const expoMonth = document.getElementById('expoMonth');
const year = document.getElementById('year');
const expoYear = document.getElementById('expoYear');
const cvc = document.getElementById('cvc');
const backInfo = document.getElementById('backInfo');
const input = document.querySelectorAll('input');

setInterval(function checkInput() {
  input.forEach((input) => {
    input.addEventListener('keyup', () => {
      if (input === cardHolder) {
        cardName.innerHTML = cardHolder.value;
        if (cardHolder.value === '') {
          cardName.innerHTML = 'Jane Appleseed';
        }
      }

      if (input === cardNumber) {
        frontNumbers.innerHTML = cardNumber.value;

        if (cardNumber.value === '') {
          frontNumbers.innerHTML = '0000 0000 0000 0000';
        }
      }
    });
  });
}, 1);
