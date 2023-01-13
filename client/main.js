

const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById('fortuneBtn')
const textBtn = document.getElementById('textBtn')
const input = document.getElementById('textInput')
const newColor = document.getElementById('options')
const deleteBtn = document.getElementById('deleteBtn')
const divChilds = document.getElementById('outputDiv').children
const colorBtn = document.getElementById('colorBtn')
// const h1 = document.querySelector('h1')

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data
        alert(data)
    })
}

const text = () => {
    const value = input.value
    axios.post("http://localhost:4000/api/text/").then(res => {

        const div = document.getElementById('outputDiv')
        h1 = document.createElement('h1')
        h1.innerHTML = value
        div.appendChild(h1)
    })
    
}

const updateColor = () => {
    axios.put("http://localhost:4000/api/updateColor/").then(res => {
        const color = newColor.value
        for(let i = divChilds.length - 1; i >= 0; i--){
            divChilds[i].style.color = color
        }
    })
}

const deleteText = () => {
    axios.delete("http://localhost:4000/api/deleteText/").then(res => {
        for(let i = divChilds.length - 1; i >= 0; i--){
            divChilds[i].remove()
        }
    })
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
textBtn.addEventListener('click', text)
colorBtn.addEventListener('click', updateColor)
deleteBtn.addEventListener('click', deleteText)