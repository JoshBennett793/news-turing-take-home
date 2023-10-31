import './Headlines.css'

import { convertDate } from '../../utils.js'

import PropTypes from 'prop-types'

export default function Headlines({ headlines }) {
  return (
    <section className='headlines-container'>
      <h2>Top Headlines</h2>
      <div className="articles-container">
        {headlines.map(headline => (
          <article className='headline-article' key={headline.source.id}>
            <p className="headline-date">{convertDate(headline.publishedAt)}</p>
            <img className='headline-img' src={headline.urlToImage}></img>
            <h3 className='headline-title'>{headline.title}</h3>
            <p>{headline.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

Headlines.propTypes = {
  headlines: PropTypes.array.isRequired
}
