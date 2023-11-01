import { useParams } from 'react-router-dom'
import { findArticle } from '../../utils'
import { useNews } from '../../Context/NewsContext'

import './SingleArticle.css'

export default function SingleArticle() {
  const { title, author } = useParams()
  const { headlines } = useNews()
  const article = findArticle(title, author, headlines)

  return (
    <>
      <article className='single-article-container'>
        <img
          className='single-article-image'
          src={article.urlToImage}
          alt='Image provided by newsapi.org'
        />
        <h1 className='single-article-title'>{article.title}</h1>
        <p className='single-article-author'>By {article.author}</p>
        <p className='single-article-source'>{article.source}</p>
        <p className='single-article-date'>{article.publishedAt}</p>
        <p className='single-article-content'>{article.content}</p>
      </article>
    </>
  )
}
