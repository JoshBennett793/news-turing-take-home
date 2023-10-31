import './Nav.css';

import PropTypes from 'prop-types';

export default function Nav({ setNews }) {
  return (
    <nav className='sidebar-nav'>
      <button className='nav-item' onClick={() => setNews('technology')}>
        Tech
      </button>
      <button className='nav-item' onClick={() => setNews('business')}>
        Business
      </button>
      <button className='nav-item' onClick={() => setNews('travel')}>
        Travel
      </button>
    </nav>
  );
}

Nav.propTypes = {
  setNews: PropTypes.func.isRequired
};
