import withService from './withService'
import ArticlesList from '../Articles/ArticlesList'
import { articleService } from '../../services/articleService'

export const ArticlesFeed = withService(ArticlesList, articleService.getFeed)
export const AllArticles = withService(ArticlesList, articleService.get)
