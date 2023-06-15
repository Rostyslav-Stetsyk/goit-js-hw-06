const refs = {
    input: document.querySelector('input#font-size-control'),
    text: document.querySelector('span#text')
};

const textStyle = refs.text.style
textStyle.fontSize = `${refs.input.value}px`

refs.input.addEventListener('input', onInputChange);

function onInputChange() {
    textStyle.fontSize = `${refs.input.value}px`
};