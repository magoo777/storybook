import React from 'react';
import PropTypes from 'prop-types';

import {Link} from '../Link';
import '../css/grid.css';
import '../css/menu.css';

/**
 * Primary UI component for user interaction
 */
export const Menu = ({...props }) => {
const {href, label, meny, link, margin, accordionText} = props;
let nr = parseInt(meny)
let div = [];
if(meny=== "1"){
  div.push(<div className="meny-grid__container co__accordian ms-grid1-acc">
        <input type="checkbox" id="meny" />
        <label for="meny"><span class="meny-grid__btn">{link}</span></label>
        <div class="inside-container">
        <p>{accordionText}</p>
        <Link href={href} label={label} className="acc-link" />  
        </div>
    </div>)

}else {
for (let i = 0; i < nr; i++) {
 div.push(<div className="meny-grid__container"><a href={href}><span className="meny-grid__btn">{link}</span></a></div>)
}
}


return (

<section className={['co-grid', `co-grid-menu-${meny}`, `${margin}`].join(' ')}>
     { div }     
</section>


  );
};

Menu.propTypes = {
  margin: PropTypes.oneOf(['mb-48', 'mb-32', 'mb-16']),
  link: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};


Menu.defaultProps = {
  link: 'Lorem Ipsum',
  href: '#',
};





