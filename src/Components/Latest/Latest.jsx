import './Latest.css'

import { convertDate } from '../../utils.js'

import PropTypes from 'prop-types'

export default function Latest({ latest }) {
  return (
    <section className='latest-container'>
      <h2>Latest News</h2>
      <div className="latest-articles-container">
        {latest.map(article => (
          <article className='latest-article' key={article.title}>
            <img className='latest-img' src={article.urlToImage}></img>
            <div>
              <p className="latest-date">{convertDate(article.publishedAt)}</p>
              <h3 className='latest-title'>{article.title}</h3>
            <p>{article.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

Latest.propTypes = {
  latest: PropTypes.array.isRequired
}