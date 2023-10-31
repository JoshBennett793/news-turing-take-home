import { mockData } from "./mockData";

export async function getTopHeadlinesByCategory(category) {
  // const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=ae00f1046a14489a8d578e31c95336ff`;
  // const response = await fetch(url)
  // if (response.ok) {
  //   const data = await response.json()
    return mockData
  // } else {
  //   throw new Error('Error fetching news')
  // }
}

export async function getLatestNewsByCategory(category) {
  // const url = `https://newsapi.org/v2/everything?q=${category}&apiKey=ae00f1046a14489a8d578e31c95336ff`;
  // const response = await fetch(url)
  // if (response.ok) {
  //   const data = await response.json()
    return mockData
  // } else {
  //   throw new Error('Error fetching news')
  // }
}