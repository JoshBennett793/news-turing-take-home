import { mockData } from './mockData'

export async function getTopHeadlinesByCategory(category) {
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&sortBy=popularity&pageSize=4&apiKey=ae00f1046a14489a8d578e31c95336ff`
  try {
    const response = await fetch(url)
    if (response.ok) {
      const data = await response.json()
      return data.articles
    // return mockData.articles.slice(0, 4)
    } else {
      console.log(response);
      throw new Error('Error fetching top headlines')
    }
  } catch (error) {
    console.error(error)
  }
}

export async function getLatestNewsByCategory(category) {
  try {
    const url = `https://newsapi.org/v2/everything?q=${category}&pageSize=10&apiKey=ae00f1046a14489a8d578e31c95336ff`
    const response = await fetch(url)
    if (response.ok) {
      const data = await response.json()
      return data.articles
    // return mockData.articles.slice(4, 14)
    } else {
      throw new Error('Error fetching latest news')
    }
  } catch (error) {
    console.error(error)
  }
}
