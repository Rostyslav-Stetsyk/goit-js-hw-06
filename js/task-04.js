const refs = {
    counterDecrementButton: document.querySelector('[data-action="decrement"]'),
    counterIncrementButton: document.querySelector('[data-action="increment"]'),
    counter: document.querySelector('span#value')
};

let counterValue = 0;

refs.counterIncrementButton.addEventListener('click', onIncrementButtonclick);
refs.counterDecrementButton.addEventListener('click', onDecrementButtonclick);

function onIncrementButtonclick() {
    counterValue += 1;
    refs.counter.textContent = counterValue;
};

function onDecrementButtonclick() {
    counterValue -= 1;
    refs.counter.textContent = counterValue;
};