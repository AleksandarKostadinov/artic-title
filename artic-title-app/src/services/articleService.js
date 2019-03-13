import { crud } from '../api/crud'

const baseUrl = 'http://localhost:1337/api/'
const articleUrl = `${baseUrl}articles`

const create = (article) => crud.post(articleUrl, { article })
const getFeed = () => crud.get(articleUrl)
const getDetails = (slug) => crud.get(`${articleUrl}/${slug}`)

export const articleService = {
  create,
  getFeed,
  getDetails
}
