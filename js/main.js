function Random(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function compCrossword(strLetters, length, rounds) {
    // strLetters - Example - 'abc'
    // length - Example - 4
    strLetters = strLetters.toUpperCase();
    let res = '';
    let result = [];

    for(let j = 0; j <= rounds; j++) {
        for(let i = 0; i <= length; i++) {
            if(res.length != length) {
                res += strLetters[Random(0, strLetters.length -1)];
            } else {
                result.push(res);
                res = '';
            }
        }
    
    }

    return result;
}

let letters = document.querySelector('#inp1');
let length = document.querySelector('#inp2');
let rounds = document.querySelector('#inp3');
let button = document.querySelector('#btn');
let ul = document.querySelector('ul');

button.addEventListener('click', ()=>{
    ul.innerHTML = '';
    for(let elem of compCrossword(letters.value, +length.value, +rounds.value)) {
        let li = document.createElement('li');
        li.textContent = `---> ${elem} <---`;
        ul.appendChild(li);
    }
})