const screen = {
    userProfile: document.querySelector(".profile-data"),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class = "info">
                                        <img src="${user.avatarUrl}" alt="Foto de perfil do usuário"/>
                                        <div class="data">
                                            <h1>${user.name ?? 'Não possui nome cadastrado 😢'}</h1>
                                            <h3>${user.login}</h3>
                                            <p>${user.bio ?? 'Não possui bio cadastrada 😢'}</p>
                                            <div class="social">
                                                <ul>
                                                    <li>👥 Seguidores ${user.followers}</li>
                                                    <li>👥 Seguindo ${user.following}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>`

        let repositoriesItens = ""

        user.repositories.forEach(repo => repositoriesItens += 
        `<div>
            <li><a href="${repo.html_url}" target="_blank">${repo.name}</a>
                <ul class="engagement">
                    <li>🍴 ${repo.forks_count}</li>
                    <li>⭐ ${repo.stargazers_count}</li>
                    <li>👀 ${repo.watchers_count}</li>
                    <li>🌅 ${repo.language}</li>
                </ul>
            </li>
        </div>`)

        if(user.repositories.length > 0){
            this.userProfile.innerHTML += `<div class = "repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                            </div>`
        }

        let eventsItens = ""

        user.events.forEach(event => eventsItens +=
        `<li>
            <p>${event.repo.name} <span>- ${event.payload.commits ? event.payload.commits[0].message : `evento sem mensagem`}</span></p> 
            
        </li>`)

        if(user.events.length > 0){
            this.userProfile.innerHTML += `<div class = "events section">
                                                <h2>Eventos</h2>
                                                <ul>${eventsItens}</ul>
                                            </div>`
        }
    },

    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }