const input = document.querySelector(".inpComment")
console.log(input)
const btnSave = document.querySelector(".btnSave")
console.log(btnSave)
const commentBox = document.querySelector(".commentBox")
console.log(commentBox)
const form = document.querySelector('form');

const listMaker = (text) => {
    const div = document.createElement('div');
    div.textContent = text;
    commentBox.appendChild(div);
}

form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    listMaker(input.value); 
    input.value="";  
});

commentBox.addEventListener('click', () => {
    e.preventDefault(); 
    listMaker(input.value); 
    input.value=""; 
})