import './Latest.css'
import { useNews } from '../../Context/NewsContext'

export default function Latest() {
  const { latest, currentCategory } = useNews()
  const category =
    currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1)

  return (
    <section className='latest-container'>
      <h2>Latest News In {category}</h2>
      <div className='latest-articles-container'>
        {latest.map(article => (
          <article className='latest-article' key={article.title}>
            <img className='latest-img' src={article.urlToImage}></img>
            <div>
              <p className='latest-date'>{article.publishedAt}</p>
              <h3 className='latest-title'>{article.title}</h3>
              <p>{article.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
