import { crud } from '../api/crud'

const baseUrl = 'http://localhost:1337/api/users'

const register = (user) => crud.post(baseUrl, { user })

const login = (user) => crud.post(`${baseUrl}/login`, { user })

export const authService = {
  register,
  login
}
