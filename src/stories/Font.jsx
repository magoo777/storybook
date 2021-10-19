import React from 'react';
import PropTypes from 'prop-types';
import './css/font.css';

/**
 * Primary UI component for user interaction
 */
export const Header = ({ label, infotext, ...props }) => {
  
  return (<>
  <h1>Headings</h1>
  <p>The standard headings of Clas Ohlson eCom is shown below. There’s 6 different sizes used in different scenarions all over the website. The standard color is black (#000000), but in some cases if necessary, a heading can also be colored with the Text blue color (#008DC1). Always follow the designs to make sure the right color is used. </p>
  <h3>Headings desktop</h3>

  <h1 className={['heading1'].join(' ')}>{label}</h1>
  <span>D - H1 - Clas Ohlson Sans Web - Size: 28px Weight: Medium/500, Line-height: 34px</span>
  <h2 className={['heading2'].join(' ')}>{label}</h2>
    <span>D - H2 - Clas Ohlson Sans Web - Size: 24px
Weight:  Medium/500, Line-height: 28px</span>

    <h3 className={['heading3'].join(' ')}>{label}</h3>
        <span>D- H3 - Clas Ohlson Sans Web - Size: 20px
Weight: Medium/500, Line-height: 24px</span>

    <h4 className={['heading4'].join(' ')}>{label}</h4>
    <span>D  -H4 - Clas Ohlson Sans Web - Size: 16px
Weight: Bold/700, Line-height: 20px</span>

    <h5 className={['heading5'].join(' ')}>{label}</h5>
        <span>D - H5 - Clas Ohlson Sans Web - Size: 14px
Weight: Bold/700, Line-height: 18px</span>
    </>
  );
};

Header.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  
  /**
 
  /**
   * How large should the button be?
   * size: PropTypes.oneOf(['small', 'medium', 'large']),
   */
  
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,

};


