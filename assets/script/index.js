'use strict';

const input = document.querySelector('.input-number');
const result = document.querySelector('.convert-button');
const outputP = document.querySelector('.output p');
const toF = document.querySelector('#toFahrenheit');
const toC = document.querySelector('#toCelsius');
const body = document.querySelector('body');
const output = document.querySelector('.output');
const convert = document.querySelector('.convert-button');
const switchAppearance = document.querySelector('.switch-appearance-button');

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

switchAppearance.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
  input.classList.toggle('dark-mode');
  convert.classList.toggle('dark-mode');
  output.classList.toggle('dark-mode');
  this.innerText = body.classList.contains('dark-mode') ? "Light Mode" : "Dark Mode";
});