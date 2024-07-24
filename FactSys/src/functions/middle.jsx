import axios from 'axios'

export const loginBD = async (name, password) => {
    try {

        const token = await axios.get(`http://localhost:3001/api/v1/login?user=${name}&pass=${password}`)
        return token.data
    } catch (error) {
        console.error(error)
    }
}

export async function getBdProducts() {
    try {
        const products = await axios.get('http://localhost:3001/api/v1/getAllProducts')
        return products.data
    } catch (error) {
        console.error(error)
    }

}