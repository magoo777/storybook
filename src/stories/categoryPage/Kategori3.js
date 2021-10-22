import React from 'react';
import PropTypes from 'prop-types';

import { Module4 } from '../Module4'

import '../css/kategori.css';

/**
 * Primary UI component for user interaction
 */
export const Kategori3 = ({modu, test, grid, imgsrc, margin, img, rubrik, href, header, subText, subText2,  ...props }) => {

let mod = [];

mod.push(<Module4 props={props} />)


return (
    <>
    <section
      className={['co-grid', `co-grid--${grid}`, `${margin}`].join(' ')}
      {...props}
    >
     <ul className="owl-carousel slider-component mb-32" data-desktop-item="4" data-margin="10" data-mobile-item="2" data-slider="false" data-time="500000" id="co-karusell">
     {
     mod
     }  
     </ul>   
    </section>
     </>
  );
};

Kategori3.propTypes = {
 margin: PropTypes.oneOf(['mb-48', 'mb-32', 'mb-16']),
    // modules: PropTypes.oneOf(['1', '2', '3', '4']),
  /**
   * Button contents
   */
 header: PropTypes.string.isRequired,
 subText: PropTypes.string.isRequired,
 subText2: PropTypes.string.isRequired
}

Kategori3.defaultProps = {
  rubrik: true,
  grid: 8,
  href: "#",
  imgsrc: 'https://images.clasohlson.com/SE/storybook/img236x236.webp', 
};



