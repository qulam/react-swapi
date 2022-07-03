import axios from 'axios'

export const detectBaseURI = () => {
  const { NODE_ENV } = process.env

  switch (NODE_ENV) {
    case 'production':
      return 'https://swapi.dev/api' // production base url
    case 'development':
      return 'https://swapi.dev/api' // development base url
  }
}

const instanceAxios = axios.create({
  baseURL: detectBaseURI(),
  timeout: 10000,
})

export default instanceAxios
