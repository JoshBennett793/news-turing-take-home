import './Headlines.css'
import { useNews } from '../../Context/NewsContext'
import { useNavigate } from 'react-router-dom'

export default function Headlines() {
  const navigate = useNavigate()
  const { headlines, currentCategory, setSingleArticle } = useNews()
  const category =
    currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1)

  return (
    <section className='headlines-container'>
      <h2>Top Headlines In {category}</h2>
      <div className='articles-container'>
        {headlines.map(headline => (
          <article
            className='headline-article'
            key={headline.title}
            onClick={() => {
              setSingleArticle(headline)
              navigate(`article/${headline.title}/${headline.author}`)
            }}
          >
            <p className='headline-date'>{headline.publishedAt}</p>
            <img className='headline-img' src={headline.urlToImage}></img>
            <h3 className='headline-title'>{headline.title}</h3>
            <p>{headline.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
