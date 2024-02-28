import { getUser } from "../scripts/services/users.js"
import { getRepositories } from "../scripts/services/repositories.js"
import { getEvents } from "../scripts/services/events.js"

import { user } from "./objects/users.js"
import { screen } from "./objects/screen.js"

const inputSearch = document.getElementById("input-search")

document.getElementById("btn-search").addEventListener("click", () => {
    const userName = inputSearch.value
    if(validadeEmptyInput(userName)) return
    getUserData(userName)
})

inputSearch.addEventListener("keyup", (e) => {
    const userName = e.target.value
    if(e.keyCode === 13){
        if(validadeEmptyInput(userName)) return
        getUserData(userName)
    }
})

function validadeEmptyInput(userName){
    if(userName.length === 0){
        alert('Preencha o campo com o nome do usuário do Github')
        return true
    }
}

async function getUserData(userName){
    const userResponse = await getUser(userName)

    if(userResponse.message === "Not Found"){
        screen.renderNotFound()
        return
    }

    const repositoriesResponse = await getRepositories(userName)
    const eventsResponse = await getEvents(userName)

    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)
    user.setEvents(eventsResponse)

    screen.renderUser(user)
}