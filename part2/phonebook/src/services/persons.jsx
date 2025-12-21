import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  return axios.get(baseUrl)
}

const create = newObject => {
  return axios.post(baseUrl, newObject)
}

const deletenumber = id => {
  const request = axios.delete(`${baseUrl}/${id}`, id)
  return request.then(response => response.data.id)
}
const update = (newObject) => {
  return axios.put(`${baseUrl}/${newObject.id}`, newObject)
}

export default {
  getAll,
  create,
  update,
  deletenumber
}