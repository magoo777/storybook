import React from 'react';
import PropTypes from 'prop-types';

import '../css/kategori.css';


export const MissionsDropDown = ({modu, grid, imgsrc, margin, img, rubrik, href, header, subText, highImg,  ...props }) => {

let idKarusell = ""
if(!highImg){
  idKarusell = "co-karusell-mission"
}else {
  idKarusell = "co-karusell-mission-img"
}


let nr = parseInt(grid)
let mod = [];

const List = ({nr}) => (
    
    <li className="co-lista-mission accordion">
		<figure>
      		<div className="figure" style={{position: "relative"}}>
			<img src="https://images.clasohlson.com/SE/storybook/640x280.png" className="figimage"/>
			<div className="overlay">
        <a href="#"><img src="https://images.clasohlson.com/SE/storybook/640x280b.png" /></a>
			</div>
			</div>
			<figcaption>
			<strong className="mission-grid__link"><a href="#" style={{color: "black"}}>Lorem ipsum</a></strong>
			<ul class="accordion-content">
					<li><a href="#" className="linkNB">Länk 1</a></li>
					<li><a href="#" className="linkNB">Länk 2</a></li>
					<li><a href="#" className="linkNB">Länk 3</a></li>
					<li><a href="#" className="linkNB">Länk 4</a></li>
				</ul>
 			</figcaption>
		</figure>
	</li>
)

for (let i = 0; i < nr; i++) {
    
 mod.push(<List nr={i}  />)
}

return (<>
    <section
      className={'mission-carousell'}
      
    ><div>
<h3 className='heading3'>Kategorier och underkategorier</h3>
<ul className={['co-grid', `co-grid--${grid}-mission`, `${margin}`, 'owl-carousel slider-component owl-loaded owl-drag' ].join(' ')} data-desktop-item="4" data-mobile-item="1" data-slider="true" data-time="500000" id={`${idKarusell}`}>
	
    {
        mod
    }
	
    </ul>
    </div>
    </section>


  </>);
};

MissionsDropDown.propTypes = {
 
  
  margin: PropTypes.oneOf(['mb-48', 'mb-32', 'mb-16']),
  
    // modules: PropTypes.oneOf(['1', '2', '3', '4']),
  /**
   * Button contents
   */

}


MissionsDropDown.defaultProps = {
  grid: null,

};



