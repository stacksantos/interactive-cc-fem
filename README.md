# Interactive card details form

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### Screenshot

![cc-fem-screenshot](https://user-images.githubusercontent.com/100369086/187326222-ed645a5e-321d-447c-8de6-aa09c7763ca2.png)

### Links

- Live Site URL: [Visit Site](https://stacksantos.github.io/interactive-cc-fem/)

## My process

I started out my build with plain html, and css.  Then I build the logic with vanilla JS.  After I got everything to look correct and the logic worked completely, I refactored it using Bootstrap starting ground up from a mobile first design.  Again after I got everything to look correct, I am now going to refactor it all with React and Tailwind.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

This project helped me to understand more about validation events for forms and manipulating form error messages.

Here's an example:

```javascript
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
```

### Continued development

I'm going continue refactoring this project with React and stop after this version is complete.


## Author

- Website - [stackSantos](https://www.stacksantos.dev)
- Twitter - [@stacksantos](https://www.twitter.com/stacksantos)

