let spanElem = document.getElementById('char-remaining');
let inputElem = document.querySelector('input');

inputElem.addEventListener('input', (event) => {
    let len = 60 - inputElem.value.length;
    if (len <= 10) {
        spanElem.classList.add('warning');
        inputElem.classList.add('warning');
    } else {
        spanElem.classList.remove('warning');
        inputElem.classList.remove('warning');
    }
    spanElem.innerHTML = len;
});