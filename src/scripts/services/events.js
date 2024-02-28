import { baseUrl, maxItems } from "../variables.js"

async function getEvents(userName){
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${maxItems}`)
    const event = await response.json()
    return event.filter(element => element.type === 'CreateEvent' || element.type === 'PushEvent')
}

export { getEvents }