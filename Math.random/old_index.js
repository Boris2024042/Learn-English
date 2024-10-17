const question = document.getElementById('quest');
const btn = document.getElementById('btn');
const text = document.getElementById('text').value

let true1 = 'Правильно!'
let false1 = 'Неправильно. Попробуй еще раз'


let number = Math.ceil(Math.random() * 5)


if(number == 1) {
    question.textContent = 'Bug'
}


else if(number == 2) {
    question.textContent = 'Beg'
}


else if(number == 3) {
    question.textContent = 'Detain'
}


else if(number == 4) {
    question.textContent = 'Blend'
}


else if(number == 5) {
    question.textContent = 'Debt'
}

console.log(number);


const text1 = document.getElementById('text');
text1.addEventListener('mouseover', ()=> {
    console.log('Произошло наведение мыши на обьект');
})


btn.addEventListener("click", ()=> {
    let correctAnswer = document.getElementById('correctORno')
// От 1
        if(number == 1 && text == 'Клоп') {
            correctAnswer.innerHTML = true1
            correctAnswer.style.color = 'green'
            console.log(true1);
            localStorage.setItem('What the result?', 'True');
        }
        else if(number == 1 && text == 'клоп'){
            correctAnswer.innerHTML = true1
            correctAnswer.style.color = 'green'
            console.log(true1);
            localStorage.setItem('What the result?', 'True');
        }




// //От 2
        else if(number == 2 && text == 'Просить') {
            correctAnswer.innerHTML = true1
            correctAnswer.style.color = 'green'
            console.log(true1);
            localStorage.setItem('What the result?', 'True');
        }
        else if(number == 2 && text == 'просить'){
            correctAnswer.innerHTML = true1
            correctAnswer.style.color = 'green'
            console.log(true1);
            localStorage.setItem('What the result?', 'True');
        }

// // От 3
        else if(number == 3 && text == 'Задерживать') {
            correctAnswer.innerHTML = true1
            correctAnswer.style.color = 'green'
            console.log(true1);
            localStorage.setItem('What the result?', 'True');
        }
        else if(number == 3 && text == 'задерживать'){
            correctAnswer.innerHTML = true1
            correctAnswer.style.color = 'green'
            console.log(true1);
            localStorage.setItem('What the result?', 'True');
        }
// // От 4
        else if(number == 4 && text == 'Смесь') {
            correctAnswer.innerHTML = true1
            correctAnswer.style.color = 'green'
            console.log(true1);
            localStorage.setItem('What the result?', 'True');
        }
        else if(number == 4 && text == 'смесь'){
            correctAnswer.innerHTML = true1
            correctAnswer.style.color = 'green'
            console.log(true1);
            localStorage.setItem('What the result?', 'True');
        }
// // От 5
        else if(number == 5 && text == 'Долг') {
            correctAnswer.innerHTML = true1
            correctAnswer.style.color = 'green'
            console.log(true1);
            localStorage.setItem('What the result?', 'True');
        }
        else if(number == 5 && text == 'долг'){
            correctAnswer.innerHTML = true1
            correctAnswer.style.color = 'green'
            console.log(true1);
            localStorage.setItem('What the result?', 'True');

        }
        else {
            correctAnswer.innerHTML = false1
            correctAnswer.style.color = 'red'
            // console.log(false1);
            localStorage.setItem('What the next result?', 'False');
        }
        
})


console.log(localStorage.getItem('What the result?', correctAnswer))