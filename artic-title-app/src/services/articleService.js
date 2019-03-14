import { crud } from '../api/crud'

const baseUrl = 'http://localhost:1337/api/'
const articleUrl = `${baseUrl}articles`

const create = (article) => crud.post(articleUrl, { article })
const getFeed = () => crud.get(`${articleUrl}/feed`)
const get = () => crud.get(articleUrl)
const getDetails = (slug) => crud.get(`${articleUrl}/${slug}`)
const edit = (slug, article) => crud.put(`${articleUrl}/${slug}`, { article })

export const articleService = {
  create,
  getFeed,
  getDetails,
  edit,
  get
}
