// const { default: axios } = require("axios")

// const { default: axios } = require("axios")
// const { default: axios } = require("axios")

const getBtn = document.querySelector('#get-dogs')
const dogContainer = document.querySelector('#dog-container')

function displayDogs(dogsArr) {
    dogContainer.innerHTML = ``

    dogsArr.forEach((dogObj) => {
        const dogCard = document.createElement('div')
        const dogName = document.createElement('h2')
        const dogOtherName = document.createElement('h3')
        const dogAge = document.createElement('h4')
        const deleteBtn = document.createElement('button')
        const birthdayBtn = document.createElement('button')

        dogName.textContent = dogObj.breedName
        dogOtherName.textContent = dogObj.latinBreed
        deleteBtn.textContent = 'Delete'
        birthdayBtn.textContent = 'Birthday!'
        dogAge.textContent = `Age:` + dogObj.age

        dogCard.appendChild(dogName)
        dogCard.appendChild(dogOtherName)
        dogCard.appendChild(dogAge)
        dogCard.appendChild(deleteBtn)
        dogCard.appendChild(birthdayBtn)

        dogContainer.appendChild(dogCard)

        deleteBtn.addEventListener('click', () => {deleteDogFront(dogObj.id)})
        birthdayBtn.addEventListener('click', () => {birthdayFront(dogObj.id)} )
    })
}

function getDogsFrontEnd() {
    axios.get('http://localhost:4000/api/dogs')
        .then(res => displayDogs(res.data))
}

function deleteDogFront(id) {
    console.log('clicked', id)
    axios.delete(`http://localhost:4000/api/dogs/${id}`)
        .then(res => displayDogs(res.data))
}

function birthdayFront(id) {
    axios.put(`http://localhost:4000/api/dogs/${id}`)
        .then(res => displayDogs(res.data))
}


getBtn.addEventListener('click',getDogsFrontEnd)
