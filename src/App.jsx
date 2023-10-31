import { useState } from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';

function App() {
  const [news, setNews] = useState([]);

  return (
    <>
      <Nav setNews={setNews} />
    </>
  );
}

export default App;
