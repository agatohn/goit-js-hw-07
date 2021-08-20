const inputRef = document.querySelector('#validation-input');
const inputLength = inputRef.dataset.length;

inputRef.addEventListener('blur', checker);

function checker(event) {
    const value = event.target.value.length;
    if (value === 0) {
        inputRef.setAttribute('class', '')
        return;
    }
    if (value === inputLength) {
        inputRef.setAttribute('class', 'valid')
        return;
    }
    inputRef.setAttribute('class', 'invalid');
}
