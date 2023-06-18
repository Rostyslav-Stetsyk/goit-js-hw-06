const refs = {
    input: document.querySelector('input#name-input'),
    nameOutput: document.querySelector('span#name-output')
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(even) {
    if (!even.currentTarget.value) {
        refs.nameOutput.textContent = 'Anonymous'
    } else {
        refs.nameOutput.textContent = even.currentTarget.value
    }
};