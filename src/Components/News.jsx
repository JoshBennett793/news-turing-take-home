import { useParams } from 'react-router-dom'
import Headlines from './Headlines/Headlines'
import Latest from './Latest/Latest'
import { useNews } from '../Context/NewsContext'
import { useEffect } from 'react'

export default function News() {
  const { setCurrentCategory } = useNews()
  const { category } = useParams()
  const params = useParams()
  console.log(params);

  useEffect(() => {
    setCurrentCategory(category)
  }, [])

  useEffect(() => {
    setCurrentCategory(category)
  }, [category])

  return (
    <>
      <Headlines />
      <Latest />
    </>
  )
}
