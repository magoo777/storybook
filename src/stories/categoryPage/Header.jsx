import React from 'react';
import PropTypes from 'prop-types';


import '../css/header.css';

export const Header = ({ rubrik, img, margin}) => (

    <div className={['co-header-container', `${margin}`].join(' ')}><img
            src={img} alt={rubrik} />
        <div class="co-header__textarea">
            <h1>{rubrik}</h1>
        </div>
    </div>

);

Header.propTypes = {
 
  /**
   * How large should the button be?
   */
  img: PropTypes.string.isRequired,
  rubrik: PropTypes.string.isRequired,
  margin: PropTypes.oneOf(['mb-48', 'mb-32', 'mb-16']),
};
