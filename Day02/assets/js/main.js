const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

console.log(buttons);

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        console.log(e.target);

        if (e.target.id === 'cor01'){
            body.style.backgroundColor = '#F57FA2';
        }

        if (e.target.id === 'cor02') {
            body.style.backgroundColor = '#FCCCED';
        }

        if (e.target.id === 'cor03') {
            body.style.backgroundColor = '#C79AD8';
        }

        if (e.target.id === 'cor04') {
            body.style.backgroundColor = '#7D87C1';
        }

        if (e.target.id === 'cor05') {
            body.style.backgroundColor = '#85ABD9';
        }
    })
})