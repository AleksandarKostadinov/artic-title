import { crud } from '../api/crud'

const baseUrl = 'http://localhost:1337/api/users'

const register = (user) => {
  return crud.post(baseUrl, { user })
}

export const authService = {
  register
}
