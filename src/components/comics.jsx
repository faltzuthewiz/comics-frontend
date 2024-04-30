import axios from "axios";

let server = 'http://localhost:8080'

export const getComics = async () => {
    try {
        const response = await axios.get(server + '/comics/all')
        return (response)
    } catch (error) {
        return ({ status: 500, message: 'The search was not successfull: ' + error.message })
    }
}

export const addComic = async (comic) => {
    try {
        const response = await axios.post(server + '/comics/add', comic, {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
    } catch (error) {
        return ({ status: 500, message: 'Adding a new item was not successfull : ' + error.message })
    }
}

export const deleteComic = async (id) => {
    try {
        const response = await axios.delete(server + '/comics/delete' + id)
        return (response)
    } catch (error) {
        return ({ status: error.status, message: 'The deletion was not successfull' + error.message })
    }
}