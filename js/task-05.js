const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');
console.log(inputRef);
console.log(outputRef);

inputRef.addEventListener('input', getvalue)
function getvalue({target}) {
    if (target.value !== '') {
        outputRef.textContent = target.value;    
    return;
}
    outputRef.textContent = 'незнакомец';
    }