const inputRef = document.querySelector('input#validation-input');

inputRef.addEventListener('blur', onInputChange);

function onInputChange(even) {
    const COUNT_SYMBOL = Number(even.currentTarget.dataset.length);
    if (inputRef.value.length === COUNT_SYMBOL) {
        inputRef.className = 'valid';
    } else {
        inputRef.className = 'invalid';
    }
};