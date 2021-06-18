const motivationsContainer = document.querySelector('#motivations-container')
const form = document.querySelector('form')
const baseURL = "http://localhost:4000/api/compliment/"

const motivationsCallback = ({ data: motivations  }) => displayMotivations (motivations )
const errCallback = err => console.log(err)

const getAllmotivations  = () => axios.get(baseURL).then(motivationsCallback).catch(errCallback)
const createMotivation  = body => axios.post(baseURL, body).then(motivationsCallback).catch(errCallback)
const deleteMotivation = id => axios.delete(`${baseURL}/${id}`).then(motivationsCallback).catch(errCallback)
const updateMotivation = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(motivationsCallback).catch(errCallback)

function getHandler(e) {
    e.preventDefault()

    let title = document.querySelector('#title')
    let imageURL = document.querySelector('#img')

    let bodyObj = {
        title: title.value,
       
        imageURL: imageURL.value
    }

   createMotivation(bodyObj)

    title.value = ''

    imageURL.value = ''
}


function displaymotivations(arr) {
    motivationsContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createMotivationCard(arr[i])
    }
}

form.addEventListener(getHandler)

getAllMotivations()