import { crud } from '../api/crud'

const baseUrl = 'http://localhost:1337/api/'
const authUrl = `${baseUrl}users`

const register = (user) => crud.post(authUrl, { user })

const login = (user) => crud.post(`${authUrl}/login`, { user })

export const authService = {
  register,
  login
}
