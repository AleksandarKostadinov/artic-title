import { crud } from '../api/crud'

const baseUrl = 'http://localhost:1337/api/'
const usersUrl = `${baseUrl}users/`
const profilesUrl = `${baseUrl}profiles/`

const getMe = () => crud.get(`${usersUrl}me`)
const getProfile = (username) => crud.get(`${profilesUrl}${username}`)
const follow = (username) => crud.post(`${profilesUrl}${username}/follow`)
const unfollow = (username) => crud.remove(`${profilesUrl}${username}/follow`)

export const profilesService = {
  getMe,
  getProfile,
  follow,
  unfollow
}
