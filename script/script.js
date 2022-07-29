//set initial count value  0
let count = 0;

//Selecting button

const btns = document.querySelectorAll('.btn');
const value = document.getElementById('value');

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const btnClass = e.currentTarget.classList;
        if (btnClass.contains('decrease')) {
            count--;
        } else if (btnClass.contains('increase')) {
            count++;
        } else if (btnClass.contains('reset')) {
            count = 0;
        }
        if(count > 0) {
            value.style.color = 'green';
        }
        if(count < 0) {
            value.style.color = 'red';
        }
        if(count === 0) {
            value.style.color = 'black';
        }
        value.textContent = count;

    })
})
