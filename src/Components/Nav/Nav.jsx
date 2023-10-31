import { useNavigate } from 'react-router-dom'

import './Nav.css'

import PropTypes from 'prop-types'

export default function Nav({ setNews }) {
  const navigate = useNavigate()
  return (
    <nav className='sidebar-nav'>
      <button className='nav-item' onClick={() => navigate('/business')}>
        Business
      </button>
      <button className='nav-item' onClick={() => navigate('/entertainment')}>
        Entertainment
      </button>
      <button className='nav-item' onClick={() => navigate('/general')}>
        General
      </button>
      <button className='nav-item' onClick={() => navigate('/health')}>
        Health
      </button>
      <button className='nav-item' onClick={() => navigate('/science')}>
        Science
      </button>
      <button className='nav-item' onClick={() => navigate('/sports')}>
        Sports
      </button>
      <button className='nav-item' onClick={() => navigate('/technology')}>
        Tech
      </button>
    </nav>
  )
}

Nav.propTypes = {
  setNews: PropTypes.func.isRequired
}
