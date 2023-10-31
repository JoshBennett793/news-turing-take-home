import { useEffect, useState } from 'react'
import './App.css'
import Nav from './Components/Nav/Nav'
import { getLatestNewsByCategory, getTopHeadlinesByCategory } from './apiCalls'

function App() {
  const [headlines, setHeadlines] = useState([])
  const [latest, setLatest] = useState([])

  async function getHeadlines(category = 'technology') {
    try {
      const headlines = await getTopHeadlinesByCategory(category)
      console.log(headlines)
      return headlines
    } catch (error) {
      console.error(error)
    }
  }

  async function getLatest(category = 'technology') {
    try {
      const latest = await getLatestNewsByCategory(category)
      console.log(latest)
      return latest
    } catch (error) {
      console.error(error)
    }
  }

  async function setNews(category) {
    const headlines = await getHeadlines(category)
    setHeadlines(headlines)

    const latest = await getLatest(category)
    setLatest(latest)
  }

  useEffect(() => {
    const headlines = getHeadlines()
    setHeadlines(headlines)

    const latest = getLatest()
    setLatest(latest)
  }, [])

  return (
    <>
      <Nav setNews={setNews} />
      {/* <Headlines headlines={headlines} /> */}
      {/* <Latest latest={latest} /> */}
    </>
  )
}

export default App
