import { useParams } from 'react-router-dom'
import { findArticle } from '../../utils'
import { useNews } from '../../Context/NewsContext'

import './SingleArticle.css'

export default function SingleArticle() {
  const { title, author } = useParams()
  const { headlines } = useNews()
  const article = findArticle(title, author, headlines)
  console.log(article);

  return (
    <>
      <article className='single-article-container'>
        <img className='single-article-image' src={article.urlToImage} alt='Image provided by newsapi.org' />

      </article>
    </>
  )
}
