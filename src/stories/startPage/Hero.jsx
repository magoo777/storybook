import React from 'react';
import PropTypes from 'prop-types';

export const Hero = ({antal, rubrik, subText}) => {
return (
  <div>
    <p>Hej hej</p>
  {/* <p>{antal}</p>
  <p>{rubrik}</p>
  <p>{subText}</p> */}
    </div>
)

}


Hero.propTypes = {
 
  /**
   * How large should the button be?
   */
  /**
   * Button contents
   */
  antal: PropTypes.number.isRequired,
  rubrik: PropTypes.bool,
  imgsrc: PropTypes.string.isRequired,
  
  subText: PropTypes.string.isRequired
};