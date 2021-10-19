import React from 'react';
import PropTypes from 'prop-types';
import {GridDemo} from './GridDemo'
import './css/grid.css';

/**
 * Primary UI component for user interaction
 */
export const Grid = ({ grid, margin, img, col, positionrow, descriptionforga, href, header, subText,  ...props }) => {

let nr = parseInt(grid)
let div = [];
for (let i = 0; i < nr; i++) {
 div.push(<GridDemo col={col} key={i} />)
}


return (

    <section
      className={['co-grid', `co-grid--${grid}`, `${margin}`].join(' ')}
      {...props}
    >
     {
       div
     }     
</section>


  );
};

Grid.propTypes = {
 

  margin: PropTypes.oneOf(['mb-48', 'mb-32', 'mb-16']),
  img: PropTypes.oneOf(['yes', 'no']),
  col: true,
  
};


