import { useNavigate } from 'react-router-dom'
import './Nav.css'

export default function Nav() {
  const navigate = useNavigate()
  const categories = [
    'business',
    'entertainment',
    'general',
    'health',
    'science',
    'sports',
    'technology'
  ]

  return (
    <nav className='sidebar-nav'>
      <ul>
        {categories.map(category => (
          <button
            className='nav-item'
            key={category}
            onClick={() => navigate(`/${category}`)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </ul>
    </nav>
  )
}
