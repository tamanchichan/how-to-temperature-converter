# Tutorial On How To Make A Simple Temperature Converter:

You will need:
* HTML (to be the body of your temperature converter)
* CSS (to style your temperature converter)
* JavaScript (to run your code through the body (HTML))

The code snippets of HTML, CSS and JavaScript is avaiable at the bottom of
the page.

The temperature converter will convert a given number to Fahrenheit or to
Celsius in whichever option is focused.

In this tutorial, the "body" was made with ```input``` so that you can insert a
given number, to be focused to Fahrenheit or to Celsius, and a button to display
the result with JavaScript.

On JavaScript, it is needed at least 3 functions:
* Function to calculate 'n' to Fahrenheit
* Function to calculate 'n' to Celsius
* Function to display the result

It is RECOMMENDED to create an additional function to validate if the given
input is a number.

```html
<!DOCTYPE html>
<html lang="en-US" dir="ltr">
  <head>
    <link rel='stylesheet' href='./assets/style/index.css'>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Temperature Converter</title>
    <script src="./assets/script/index.js" defer></script>
  </head>
  <body>
    <header></header>
    <main>
      <div>
        <h2>Temperature Converter</h2>
        <form>
          <input type="text" class="input-number" autofocus>
          <input type="button" value="convert" class="convert-button">
          <div class="flex convert-input">
            <div class="to-fahrenheit">
              <input type="radio" id="toFahrenheit" name="temperature">
              <label for="toFahrenheit">To Fahrenheit</label>
            </div>
            <div class="to-celsius">
              <input type="radio" id="toCelsius" name="temperature">
              <label for="toCelsius">To Celsius</label>
            </div>
          </div>
        </form>
        <div class="output">
          <p></p>
        </div>
      </div>
    </main>
  </body>
</html>
```
```css
@import url("./reset.css");

:root {
  --body-bg-color: #f2f4f6;
  --body-color: #000;
  --input-text-bg-color: #f2f2f2;
  --convert-button-bg-color: #294ef8;
  --convert-button-bg-color-hover: #1c36ad;
  --convert-button-bg-color-active: #4ef829;
  --convert-button-color: #fff;
  --output-bg-color: #2d2e35;
  --output-color: #fff;
}

/* <class> */
.flex {
  display: flex;
}

/* <body> */
body {
  background-color: var(--body-bg-color);
}

/* <main> */
main {
  display: flex;
  place-content: center;
}

main h2 {
  margin: 25px 0px 10px 0px;
}

main form {
  font-size: 0px;
}

main input[type=text] {
  background-color: var(--input-text-bg-color);
  border: 1px solid #000;
  border-radius: 8px;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  height: 35px;
  line-height: 35px;
  padding-left: 10px;
  width: 200px;
}

main input[type=text]:focus {
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
}

main .convert-button {
  background-color: var(--convert-button-bg-color);
  border-radius: 8px;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
  color: var(--convert-button-color);
  height: 35px;
  letter-spacing: 1.5px;
  margin-left: 25px;
  padding: 0px 10px;
  text-transform: uppercase;
  transition: all 0.25s ease-in-out;
  width: 100px;
}

main .convert-button:hover {
  background-color: var(--convert-button-bg-color-hover);
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 1);
}

main .convert-button:active {
  background-color: var(--convert-button-bg-color-active);
}

main .convert-input {
  margin-top: 15px;
}

main input[type=radio] {
  appearance: auto;
}

main label {
  font-size: 18px;
  margin-left: 5px;
}

main .to-celsius {
  margin-left: 25px;
}

main .output {
  background-color: var(--output-bg-color);
  border-radius: 8px;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
  color: var(--output-color);
  height: 35px;
  line-height: 35px;
  margin-top: 25px;
  padding-left: 10px;
  width: 325px;
}
```

```javascript
'use strict';

const input = document.querySelector('.input-number');
const result = document.querySelector('.convert-button');
const outputP = document.querySelector('.output p');
const toF = document.querySelector('#toFahrenheit');
const toC = document.querySelector('#toCelsius');
const body = document.querySelector('body');
const output = document.querySelector('.output');
const convert = document.querySelector('.convert-button');

function isNumber(num) {
  if (num.length > 0 && !isNaN(num)) {
    return true;
  } else {
    return false;
  }
}

toF.addEventListener('focus', function() {
  result.addEventListener('click', function() {
    let temperature = input.value.trim();
    
    if (isNumber(temperature)) {
      let result = (temperature * 1.8) + 32;
      outputP.innerText = `${temperature}°C = ${result.toFixed(2)}°F`;
      input.value;
    } else {
      outputP.innerHTML = 'Please, enter a valid number';
    }
  });
});

toC.addEventListener('focus', function() {
  result.addEventListener('click', function() {
    let temperature = input.value.trim();
    
    if (isNumber(temperature)) {
      let result = (temperature - 32) / 1.8;
      outputP.innerText = `${temperature}°F = ${result.toFixed(2)}°C`;
      input.value;
    } else {
      outputP.innerHTML = 'Please, enter a valid number';
    }
  });
});
```