const user = {
    avatarUrl:'',
    name: '',
    login: '',
    bio: '',
    userName: '',
    followers:'',
    following:'',
    reposiories: [],
    events:[],
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.login = gitHubUser.login
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
    },
    setRepositories(repositories){
        this.repositories = repositories
    },
    setEvents(events){
        this.events = events
    }
}

export { user }