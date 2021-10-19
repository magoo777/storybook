import React from 'react';
import PropTypes from 'prop-types';

import { Module2 } from '../Module2'

import '../css/kategori.css';

/**
 * Primary UI component for user interaction
 */
export const Kategori2 = ({modu, test, grid, imgsrc, margin, img, rubrik, href, header, subText, subText2,  ...props }) => {

let mod = [];
let scriptTag = [];
mod.push(<Module2 props={props} />)


return (
    <>
    <section
      className={['co-grid', `co-grid--${grid}`, `${test}`, `${margin}`].join(' ')}
      {...props}
    >
     {
     mod
     }     
    </section>
     </>
  );
};

Kategori2.propTypes = {
 margin: PropTypes.oneOf(['mb-48', 'mb-32', 'mb-16']),
    // modules: PropTypes.oneOf(['1', '2', '3', '4']),
  /**
   * Button contents
   */
 header: PropTypes.string.isRequired,
 subText: PropTypes.string.isRequired,
 subText2: PropTypes.string.isRequired
}

Kategori2.defaultProps = {
  rubrik: true,
  grid: 1,
  test: "co-grid-acc",
  href: "#",
  imgsrc: 'https://images.clasohlson.com/SE/storybook/img236x236.webp', 
};



