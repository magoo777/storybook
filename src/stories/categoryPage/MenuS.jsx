import React from 'react';
import PropTypes from 'prop-types';

import '../css/grid.css';
import '../css/menu.css';

/**
 * Primary UI component for user interaction
 */
export const MenuS = ({...props }) => {
const {href, label, meny, link, margin} = props;

let nr = parseInt(meny)
let li = [];
for (let i = 0; i < nr; i++) {
 li.push(<li className="co-meny-carousell"><a className="text-white" href={href}>{link}</a></li>)
}
return (


     <section className="meny-carousell">
<div>
<ul className={['co-grid', `co-grid--${meny}-mission`, `${margin}`, 'owl-carousel slider-component'].join(' ')} data-desktop-item="4" data-mobile-item="1" data-slider="true" data-time="500000" id="meny-carousell">
     { li } 
</ul>
</div></section>   




  );
};

MenuS.propTypes = {
  margin: PropTypes.oneOf(['mb-48', 'mb-32', 'mb-16']),

};


MenuS.defaultProps = {
  link: 'Lorem Ipsum',
  href: '#',
};





