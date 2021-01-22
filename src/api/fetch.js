import axios from "axios";

export function conversationsList() {
    return axios.get(`https://jsonplaceholder.typicode.com/users`)
}
export function avatars() {
    return axios.get(`https://jsonplaceholder.typicode.com/albums/1/photos`)
}
export function currentConversation(id) {
    return axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
}