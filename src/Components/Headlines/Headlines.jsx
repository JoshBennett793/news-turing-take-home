// make link take user to artcile in new tab
import './Headlines.css'

import PropTypes from 'prop-types'

export default function Headlines({ headlines }) {

  function convertDate(date) {
    // from 2021-07-08T14:00:00Z to 31 Oct 2023
    const dateArr = date.split('-')
    const year = dateArr[0]
    const month = dateArr[1]
    const day = dateArr[2].split('T')[0]
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
      'Oct', 'Nov', 'Dec']
    const monthName = months[parseInt(month) - 1]
    return `${day} ${monthName} ${year}`
  }

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
