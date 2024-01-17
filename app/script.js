const elInput1 = document.querySelector('.input1');
const elInput2 = document.querySelector('.input2');
const elBtn = document.querySelector('.btn');
const elRezult = document.querySelector('.rezalt');

console.log(elInput1, elInput2, elBtn);

// ============================= BTN START ============================= //

elBtn.addEventListener('click', () => {

    elRezult.style.display = 'inline-block';


    if (elInput1.value > elInput2.value) {
        elRezult.textContent = '>';
    } else if (elInput1.value < elInput2.value) {
        elRezult.textContent = '<';
    } else if (elInput1.value = elInput2.value) {
        elRezult.textContent = '=';
    } else if (elInput1.value == '') {
        elRezult.textContent = 'Iltimos: qayta urinib ko`ring!';
        elRezult.style.color = 'red';
    }
})

// ============================= BTN END ============================= //

// ============================= INPUTS START ============================= //

elInput1.addEventListener('input', () => {
    elRezult.style.display = 'none';
})

elInput2.addEventListener('input', () => {
    elRezult.style.display = 'none';
})

// ============================= INPUTS END ============================= //