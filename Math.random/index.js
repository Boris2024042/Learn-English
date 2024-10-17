const question = document.getElementById('quest');
const answerOnWord = document.getElementById('answerOnWord')
const btn = document.getElementById('btn');
const correct = document.getElementById('correctORno');
////////////////////////////////////////////
let getcorrectWord = {} 
let true1 = 'Правильно!'
let false1 = 'Неправильно. Попробуй еще раз'
let kol_vo = "";
let dataWords = './data.json'
//////////////////////////////

fetch(dataWords) //data -'https/...'
.then((response) => response.json())
.then((data) => LookRandomWord(data))
.catch((error) => console.log('error'));






function LookRandomWord(data) {

    // for (key in data) {
    //     console.log(data[key]);
    // }
    kol_vo = Object.keys(data).length;
    let randomNumber = Math.ceil(Math.random() * kol_vo)
    question.textContent = data[randomNumber].word
    // console.log(data[randomNumber]);
    getcorrectWord = data[randomNumber]

}


// const text = document.getElementById('text').value

let answerSave = "";
answerOnWord.value = answerSave
answerOnWord.addEventListener('input', (event)=>{
    answerSave = event.target.value
    // console.log(answerSave);
})




btn.addEventListener('click', ()=>{
    console.log(answerSave, getcorrectWord.ru);
    const massa = getcorrectWord.ru
    let result = massa.find((element) => element === answerSave);
    
    let Ourresult = `<span style = 'color: ${result === undefined? "red":"green" }'>${result === undefined? "Неправильно":"Правильно" }</span>`;
    console.log(result);
    correct.innerHTML = Ourresult
    


})



/* 1. После нажатия кнопки 
- Проверяем локал стореж на количество обьектов (Отдельная функция)
- Если локал стореж нету то просто создать пустой: key: []
- Если неправильно добавляем в массив и записываем в локал стореж
сделать запись 
{
key: ['слово неправ 1', 'Слово неправ 2']
}
после нажатия кно
*/