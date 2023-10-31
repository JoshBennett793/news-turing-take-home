// make 5 more nav components for these topics: entertainments, general, health, science, sports

import './Nav.css';

import PropTypes from 'prop-types';

export default function Nav({ setNews }) {
  return (
    <nav className='sidebar-nav'>
      <button className='nav-item' onClick={() => setNews('business')}>
        Business
      </button>
      <button className='nav-item' onClick={() => setNews('entertainment')}>
        Entertainment
      </button>
      <button className='nav-item' onClick={() => setNews('general')}>
        General
      </button>
      <button className='nav-item' onClick={() => setNews('health')}>
        Health
      </button>
      <button className='nav-item' onClick={() => setNews('science')}>
        Science
      </button>
      <button className='nav-item' onClick={() => setNews('sports')}>
        Sports
      </button>
      <button className='nav-item' onClick={() => setNews('technology')}>
        Tech
      </button>
    </nav>
  );
}

Nav.propTypes = {
  setNews: PropTypes.func.isRequired
};
