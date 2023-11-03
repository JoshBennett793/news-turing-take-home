import { mockData } from './mockData'
import { cleanData } from './utils'

export async function getTopHeadlinesByCategory(category) {
  // const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&sortBy=popularity&pageSize=20&apiKey=ae00f1046a14489a8d578e31c95336ff`
  // try {
  //   const response = await fetch(url)
  //   if (response.ok) {
  //     let data = await response.json()
  //     return cleanData(data.articles).slice(0, 4)
  return cleanData(mockData.articles).slice(0, 4)
  //   } else {
  //     throw new Error('Error fetching top headlines')
  //   }
  // } catch (error) {
  //   console.error(error)
  // }
}

export async function getLatestNewsByCategory(category) {
  // try {
  //   const url = `https://newsapi.org/v2/everything?q=${category} category&pageSize=40&apiKey=ae00f1046a14489a8d578e31c95336ff`
  //   const response = await fetch(url)
  //   if (response.ok) {
  //     let data = await response.json()
  //     return cleanData(data.articles).slice(4, 14)

  return cleanData(mockData.articles).slice(4, 14)
  //   } else {
  //     throw new Error('Error fetching latest news')
  //   }
  // } catch (error) {
  //   console.error(error)
  // }
}
