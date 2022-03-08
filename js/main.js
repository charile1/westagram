const input = document.querySelector(".inpComment")
console.log(input)
const btnSave = document.querySelector(".btnSave")
console.log(btnSave)
const commentBox = document.querySelector(".commentBox")
console.log(commentBox)
const form = document.querySelector('form');
// let itemsArray = localStorage.getItem('items')?JSON.parse(localStorage.getItem('items')):[];

// localStorage.setItem('items',JSON.stringify(itemsArray));
// const data = JSON.parse(localStorage.getItem('items'));
// console.log(data);

const listMaker = (text) => {
    const div = document.createElement('div');
    div.textContent = text;
    commentBox.appendChild(div);
}

form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    itemsArray.push(input.value);
    // localStorage.setItem('items',JSON.stringify(itemsArray));
    listMaker(input.value); // input 값을 받아온다 
    input.value="";  // input은 다시 공백으로 만들기 
});
