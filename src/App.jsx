import { useEffect, useState } from 'react'
import { Route, Routes, useParams } from 'react-router-dom'

import './App.css'

import { getLatestNewsByCategory, getTopHeadlinesByCategory } from './apiCalls'
import Nav from './Components/Nav/Nav'
import Headlines from './Components/Headlines/Headlines'
import Latest from './Components/Latest/Latest'

function App() {
  const [headlines, setHeadlines] = useState([])
  const [latest, setLatest] = useState([])
  const [currentCategory, setCurrentCategory] = useState('general')
  const { category } = useParams()
  console.log('category', category);

  async function getHeadlines(category) {
    try {
      const headlines = await getTopHeadlinesByCategory(
        category || currentCategory
      )
      console.log(headlines)
      return headlines
    } catch (error) {
      console.error(error)
    }
  }

  async function getLatest(category) {
    try {
      const latest = await getLatestNewsByCategory(category || currentCategory)
      console.log(latest)
      return latest
    } catch (error) {
      console.error(error)
    }
  }

  async function setNews(category) {
    setCurrentCategory(category)

    const headlines = await getHeadlines(currentCategory)
    setHeadlines(headlines)

    const latest = await getLatest(currentCategory)
    setLatest(latest)
  }

  useEffect(() => {
    setCurrentCategory(category)
    setNews(category)
  }, [category])

  useEffect(() => {
    setNews()
  }, [])

  return (
    <div id='App'>
      <Nav setNews={setNews} />
      <main>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Headlines headlines={headlines} />
                <Latest latest={latest} />
              </>
            }
          ></Route>
          <Route
            path='/:category'
            element={
              <>
                <Headlines headlines={headlines} />
                <Latest latest={latest} />
              </>
            }
          ></Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
