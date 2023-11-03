import { createContext, useContext, useState } from 'react'
import { getLatestNewsByCategory, getTopHeadlinesByCategory } from '../apiCalls'

const NewsContext = createContext(null)

export function NewsProvider({ children }) {
  const [headlines, setHeadlines] = useState([])
  const [latest, setLatest] = useState([])
  const [currentCategory, setCurrentCategory] = useState('')
  const [singleArticle, setSingleArticle] = useState({})

  async function setNews(category) {
    const headlines = await getTopHeadlinesByCategory(category)
    const latest = await getLatestNewsByCategory(category)

    setHeadlines(headlines)
    setLatest(latest)
  }

  const value = {
    headlines,
    setHeadlines,
    latest,
    setLatest,
    currentCategory,
    setCurrentCategory,
    singleArticle,
    setSingleArticle,
    setNews
  }

  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>
}

export function useNews() {
  const context = useContext(NewsContext)

  if (!context) {
    throw new Error('useNews must be used within a NewsProvider')
  }

  return context
}
