const inputFontSizeRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

inputFontSizeRef.addEventListener('input', changeFontSize);

function changeFontSize() {    
    textRef.style.fontSize = `${inputFontSizeRef.value}px`;
}