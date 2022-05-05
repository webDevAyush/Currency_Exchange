const currencyElOne = document.getElementById('currencyOne');
const currencyElTwo = document.getElementById('currencyTwo');
const currencyAmtOne = document.getElementById('amountOne');
const currencyAmtTwo = document.getElementById('amountTwo');

const swap = document.getElementById('swap');
const rateEl = document.getElementById('rate');
const date = document.getElementById('date');

function calculate() {
  const currency_one = currencyElOne.value;
  const currency_two = currencyElTwo.value;

  fetch(`https://v6.exchangerate-api.com/v6/5b480bcb7ffe65cf1020e01c/latest/${currency_one}`)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      const rates = data.conversion_rates[currency_two];
      rateEl.innerText = `1 ${currency_one} =  ${rates}  ${currency_two}`;
      currencyAmtTwo.value = (currencyAmtOne.value * rates).toFixed(2);
      console.log(currencyElTwo);

      
      const d = new Date();
      // console.log(d);
      date.innerText = d;

    });
};


currencyElOne.addEventListener('change', calculate);
currencyAmtOne.addEventListener('input', calculate);
currencyElTwo.addEventListener('change', calculate);
currencyAmtTwo.addEventListener('input', calculate);


swap.addEventListener('click', () => {
  const temp = currencyElOne.value;
  currencyElOne.value = currencyElTwo.value;
  currencyElTwo.value = temp;
  calculate();
});


calculate();