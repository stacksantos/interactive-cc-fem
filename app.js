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

// front number sets
const nSet1 = document.getElementById('nSet1');
const nSet2 = document.getElementById('nSet2');
const nSet3 = document.getElementById('nSet3');
const nSet4 = document.getElementById('nSet4');

let n1 = '0000';
let n2 = '0000';
let n3 = '0000';
let n4 = '0000';

input.forEach((input) => {
  input.addEventListener('keyup', () => {
    // cardholder change
    if (input === cardHolder) {
      cardName.innerHTML = cardHolder.value;
      if (cardHolder.value === '') {
        cardName.innerHTML = 'Jane Appleseed';
      }
    }
    // cardnumber change
    if (input === cardNumber) {
      if (cardNumber.value.length <= 4) {
        n1 = cardNumber.value;
        nSet1.innerHTML = n1;
      } else if (cardNumber.value.length > 4 && cardNumber.value.length <= 8) {
        n2 = cardNumber.value.slice(4);
        nSet2.innerHTML = n2;
      } else if (cardNumber.value.length > 8 && cardNumber.value.length <= 12) {
        n3 = cardNumber.value.slice(8);
        nSet3.innerHTML = n3;
      } else if (cardNumber.value.length > 12) {
        n4 = cardNumber.value.slice(12);
        nSet4.innerHTML = n4;
      }
      if (cardNumber.value.length < 1) {
        n1 = '0000';
        nSet1.innerHTML = n1;
      } else if (cardNumber.value.length <= 4) {
        n2 = '0000';
        nSet2.innerHTML = n2;
      } else if (cardNumber.value.length <= 8) {
        n3 = '0000';
        nSet3.innerHTML = n3;
      } else if (cardNumber.value.length <= 12) {
        n4 = '0000';
        nSet4.innerHTML = n4;
      }
    }
    // expdate change
    if (input === month) {
      expoMonth.innerHTML = month.value;
      if (month.value === '') {
        expoMonth.innerHTML = '00';
      }
    }
    if (input === year) {
      expoYear.innerHTML = year.value;
      if (year.value === '') {
        expoYear.innerHTML = '00';
      }
    }
    //cvc change
    if (input === cvc) {
      backInfo.innerHTML = cvc.value;
      if (cvc.value === '') {
        backInfo.innerHTML = '000';
      }
    }
  });
});

