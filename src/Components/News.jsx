import { useParams } from 'react-router-dom'
import Headlines from './Headlines/Headlines'
import Latest from './Latest/Latest'
import { useNews } from '../Context/NewsContext'
import { useEffect } from 'react'

export default function News() {
  const { currentCategory, setCurrentCategory, setNews } = useNews()
  const { category } = useParams()

  // useEffect(() => {
  //   setCurrentCategory(category)
  // }, [])

  useEffect(() => {
    setNews(category)
    setCurrentCategory(category)
  }, [category])

  // useEffect(() => {
  //   setCurrentCategory(category)
  // }, [category])

  return (
    <>
      <p>current category {currentCategory}</p>
      <Headlines />
      <Latest />
    </>
  )
}
