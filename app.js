const fName = document.querySelector('input[name="fName"]');
const displayName = document.getElementById('displayName');
const cardNumber = document.getElementById('cardNumber');
const displayNumbers = document.getElementById('displayNumbers');
const fMonth = document.getElementById('fMonth');
const displayMonth = document.getElementById('displayMonth');
const fYear = document.getElementById('fYear');
const displayYear = document.getElementById('displayYear');
const fCvc = document.getElementById('fCvc');
const backInfo = document.getElementById('backInfo');
const input = document.querySelectorAll('input');
const form = document.querySelector('form');
const completed = document.querySelector('.completed');

/* -------------------------------------------------------------------------- */
/*                       FRONT CARD DISPLAY NUMBER SETS                       */
/* -------------------------------------------------------------------------- */

const nSet1 = document.getElementById('nSet1');
const nSet2 = document.getElementById('nSet2');
const nSet3 = document.getElementById('nSet3');
const nSet4 = document.getElementById('nSet4');

let n1 = '0000';
let n2 = '0000';
let n3 = '0000';
let n4 = '0000';

/* -------------------------------------------------------------------------- */
/*                          CARD DETAILS LIVE UPDATE                          */
/* -------------------------------------------------------------------------- */

input.forEach((input) => {
  input.addEventListener('keyup', () => {
    // fName change
    if (input === fName) {
      displayName.innerHTML = fName.value;
      if (fName.value === '') {
        displayName.innerHTML = 'Jane Appleseed';
      }
    }
    // cardnumber change
    if (input === fNumber) {
      fNumber.value = fNumber.value.replace(/[^0-9]/, '');
      if (fNumber.value.length <= 4) {
        n1 = fNumber.value;
        nSet1.innerHTML = n1;
      } else if (fNumber.value.length > 4 && fNumber.value.length <= 8) {
        n2 = fNumber.value.slice(4);
        nSet2.innerHTML = n2;
      } else if (fNumber.value.length > 8 && fNumber.value.length <= 12) {
        n3 = fNumber.value.slice(8);
        nSet3.innerHTML = n3;
      } else if (fNumber.value.length > 12) {
        n4 = fNumber.value.slice(12);
        nSet4.innerHTML = n4;
      }
      if (fNumber.value.length < 1) {
        n1 = '0000';
        nSet1.innerHTML = n1;
        n2 = '0000';
        nSet2.innerHTML = n2;
        n3 = '0000';
        nSet3.innerHTML = n3;
        n4 = '0000';
        nSet4.innerHTML = n4;
      } else if (fNumber.value.length <= 4) {
        n2 = '0000';
        nSet2.innerHTML = n2;
      } else if (fNumber.value.length <= 8) {
        n3 = '0000';
        nSet3.innerHTML = n3;
      } else if (fNumber.value.length <= 12) {
        n4 = '0000';
        nSet4.innerHTML = n4;
      }
    }
    // expo change
    if (input === fMonth) {
      displayMonth.innerHTML = fMonth.value;
      if (fMonth.value === '') {
        displayMonth.innerHTML = '00';
      }
    }
    if (input === fYear) {
      displayYear.innerHTML = fYear.value;
      if (fYear.value === '') {
        displayYear.innerHTML = '00';
      }
    }
    //fCvc change
    if (input === fCvc) {
      backInfo.innerHTML = fCvc.value;
      if (fCvc.value === '') {
        backInfo.innerHTML = '000';
      }
    }
  });
});

/* -------------------------------------------------------------------------- */
/*                                DISPLAY ERROR                               */
/* -------------------------------------------------------------------------- */
const nameErr = document.getElementById('nameErr');
const numberErr = document.getElementById('numberErr');
const expoErr = document.getElementById('expoErr');
const cvcErr = document.getElementById('cvcErr');


  // name error
  fName.addEventListener('invalid', function (event) {
    if (event.target.validity.valueMissing) {
      event.target.setCustomValidity('');
      event.preventDefault();
      nameErr.innerHTML = " **No Name?**";
    } else if (event.target.validity.tooShort) {
      event.target.setCustomValidity('');
      event.preventDefault();
      nameErr.innerHTML = ' **Name too short..**';
    }
  });
  fName.addEventListener('change', function (event) {
    if (fName.value.length >= 5) {
      event.target.setCustomValidity('');
      nameErr.innerHTML = '';
    }
  });

  // card number error
  fNumber.addEventListener('invalid', function (event) {
    if (event.target.validity.valueMissing) {
      event.target.setCustomValidity('');
      event.preventDefault();
      numberErr.innerHTML = " **Where's the number?**";
    } else if (event.target.validity.tooShort) {
      event.target.setCustomValidity('');
      event.preventDefault();
      numberErr.innerHTML = ' **Must have at least 16 characters**';
    }
  });
  fNumber.addEventListener('change', function (event) {
    if (fNumber.value.length === 16) {
      event.target.setCustomValidity('');
      numberErr.innerHTML = '';
    }
  });

  // month error

  fMonth.addEventListener('invalid', function (event) {
    if (event.target.validity.valueMissing) {
      event.target.setCustomValidity('');
      event.preventDefault();
      expoErr.innerHTML = ' **Something is missing**';
    } else if (event.target.validity.patternMismatch) {
      event.target.setCustomValidity('');
      event.preventDefault();
      expoErr.innerHTML = ' **Are you a time traveller?**';
      if (fMonth.value[0] !== /[0-1]/ || fMonth.value > 12) {
        event.target.setCustomValidity('');
        event.preventDefault();
        expoErr.innerHTML = ' **Are you a time traveller?**';
      } else if (fMonth.value[0] === /[0-1]/ && fMonth.value[1] !== /[1-2]/) {
        event.target.setCustomValidity('');
        event.preventDefault();
        expoErr.innerHTML = ' **Are you a time traveller?**';
      }
    }
  });
  fMonth.addEventListener('change', function (event) {
    if (event.target.validity) {
      event.target.setCustomValidity('');
      expoErr.innerHTML = '';
    }
  });

  // year error

  fYear.addEventListener('invalid', function (event) {
    if (event.target.validity.valueMissing) {
      event.target.setCustomValidity('');
      event.preventDefault();
      expoErr.innerHTML = ' **Something is missing**';
    } else if (event.target.validity.patternMismatch) {
      event.target.setCustomValidity('');
      event.preventDefault();
      expoErr.innerHTML = ' **Are you a time traveller?**';
    }
  });
  fYear.addEventListener('change', function (event) {
    if (event.target.validity) {
      event.target.setCustomValidity('');
      expoErr.innerHTML = '';
    }
  });

  // cvc error

  fCvc.addEventListener('invalid', function (event) {
    if (event.target.validity.valueMissing) {
      event.target.setCustomValidity('');
      event.preventDefault();
      cvcErr.innerHTML = ' **No CVC?**';
    }
  });
  fCvc.addEventListener('change', function (event) {
    if (event.target.validity) {
      event.target.setCustomValidity('');
      cvcErr.innerHTML = '';
    }
  });
