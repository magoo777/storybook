import React from 'react';
import PropTypes from 'prop-types';
import './css/module.css';

/**
 * Primary UI component for user interaction
 */



export const Module4 = ({ ...props }) => {
const { rubrik, imgsrc, href, grid, header, subText } = props

let liMod = [];

for(let i=0; i< grid;i++){
  liMod.push(  <li className={'co-module'} >
  <a href={href}><img alt={header} src={imgsrc} /></a>
  {rubrik ? <h5 className="heading5"><a href={href}>{header}</a></h5> : false}
  <p><a href={href}>{subText}</a></p>
</li>)
}


return (<>
  <ul class="owl-carousel slider-component" data-desktop-item="4" data-margin="10" data-mobile-item="2"
		data-slider="false" data-time="500000" id="co-karusell">
    {liMod}    
  </ul>
  </>);
};

Module4.propTypes = {
 
  /**
   * How large should the button be?
   */
  /**
   * Button contents
   */
  href: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  subText: PropTypes.string.isRequired
};


