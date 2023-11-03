import { useParams } from 'react-router-dom'
import { findArticle } from '../../utils'
import { useNews } from '../../Context/NewsContext'

import './SingleArticle.css'

export default function SingleArticle() {
  const { branch, title } = useParams()
  console.log('branch', branch);
  console.log('title', title);
  const { headlines, latest } = useNews()
  console.log('headlines', headlines);
  console.log('latest', latest);
  const headlinesOrLatest = branch === 'headline' ? headlines : latest
  console.log('which branch:', headlinesOrLatest);
  const article = findArticle(title, headlinesOrLatest)
  console.log(article);
  console.log(article.urlToImage);

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
        <p className='single-article-content'>
          {article.content}
          <a href={article.url} target='_blank' rel='noopener noreferrer'>
            read more
          </a>
        </p>
      </article>
    </>
  )
}
