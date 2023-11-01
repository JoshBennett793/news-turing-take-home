import { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'

import './App.css'

import Nav from './Components/Nav/Nav'
import News from './Components/News'
import SingleArticle from './Components/SingleArticle/SingleArticle'

function App() {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/technology')
  }, [])

  return (
    <div id='App'>
      <Nav />
      <main>
        <Routes>
          <Route path='/' element={<News />}></Route>
          <Route path='/:category' element={<News />}></Route>
          <Route
            path='/:category/article/:title/:author'
            element={<SingleArticle />}
          ></Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
