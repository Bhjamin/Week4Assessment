const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById('fortuneBtn')
const input = document.getElementById('input')
const submitBtn = document.getElementById('submitBtn')
const listDiv = document.getElementById('listDiv')
const getAllBtn = document.getElementById('getAllBtn')
const byIdInput = document.getElementById('byIdInput')
const byIdBtn = document.getElementById('byIdBtn')

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

const createItem = () => {
    axios.post('http://localhost:4000/api/createItem/', {value: input.value})
    .then(res => {
        input.value = ''
        alert('Successfully added')
    })
}

const getAllItems = () => {
    axios.get('http://localhost:4000/api/getAllItems/')
    .then(res => {
        listDiv.innerHTML = ""
        let items = res.data
        for(let i = 0; i < items.length; i++){
           let newItem = document.createElement('p')
           newItem.innerText = res.data[i]
           listDiv.appendChild(newItem)
        }
    })
}

const getItemById = () => {
    
    axios.get(`http://localhost:4000/api/getItemById?id=${byIdInput.value}`)
    .then(res => {
        listDiv.innerHTML = ""
        let newItem = document.createElement('p')
        newItem.innerText = res.data.text
        listDiv.appendChild(newItem)
    })
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
submitBtn.addEventListener('click', createItem)
getAllBtn.addEventListener('click', getAllItems)
byIdBtn.addEventListener('click', getItemById)
