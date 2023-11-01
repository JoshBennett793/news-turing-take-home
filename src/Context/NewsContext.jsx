import { createContext, useContext, useState, useEffect } from 'react'
import { getLatestNewsByCategory, getTopHeadlinesByCategory } from '../apiCalls'
import { cleanData } from '../utils'

const NewsContext = createContext(null)

export function NewsProvider({ children }) {
  const [headlines, setHeadlines] = useState([])
  const [latest, setLatest] = useState([])
  const [currentCategory, setCurrentCategory] = useState('')

  async function setNews() {
    console.log('currentCategory each time setNews is invoked', currentCategory)
    const headlines = await getTopHeadlinesByCategory(currentCategory)
    const cleanHeadlines = cleanData(headlines).slice(0, 4)
    setHeadlines(cleanHeadlines)

    const latest = await getLatestNewsByCategory(currentCategory)
    const cleanLatest = cleanData(latest).slice(0, 10)
    setLatest(cleanLatest)
  }

  useEffect(() => {
    setNews()
  }, [currentCategory])

  const value = {
    headlines,
    setHeadlines,
    latest,
    setLatest,
    currentCategory,
    setCurrentCategory,
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
