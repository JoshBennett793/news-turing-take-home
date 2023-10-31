import { useEffect, useState } from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import { getNewsByCategory } from './apiCalls';

function App() {
  const [news, setNews] = useState([]);

  async function getNews(category = 'technology') {
    try {
      const data = await getNewsByCategory(category);
      setNews(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getNews();
  }, []);

  return (
    <>
      <Nav setNews={getNews} />
    </>
  );
}

export default App;
