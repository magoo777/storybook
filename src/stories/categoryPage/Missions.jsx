import React from 'react';
import PropTypes from 'prop-types';

import '../css/kategori.css';


export const Missions = ({modu, grid, imgsrc, margin, img, rubrik, href, header, subText, highImg,  ...props }) => {

let idKarusell = ""
if(!highImg){
  idKarusell = "co-karusell-mission"
}else {
  idKarusell = "co-karusell-mission-img"
}

let nr = parseInt(grid)
let mod = [];

const List = ({nr}) => (
    
    <li class="co-lista-mission accordion">
		<figure>
      		<div className="figure" style={{position: "relative"}}>
			<img src="https://images.clasohlson.com/SE/storybook/640x280.png" className="figimage"/>
			<div className="overlay" style={{backgroundImage : 'url("https://images.clasohlson.com/SE/storybook/640x280b.png")'}}>

			</div>
			</div>
			<figcaption>
			<strong className="meny-grid__link-noAnim"><a href="#" style={{color: "black"}}>Lorem ipsum</a></strong>
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
<h3 className='heading3'>Kategorier</h3>
<ul className={['co-grid', `co-grid--${grid}-mission`, `${margin}`, 'owl-carousel slider-component owl-loaded owl-drag' ].join(' ')} style={{gridTemplateColumns: `${grid}`}} data-desktop-item="4" data-mobile-item="1" data-slider="true" data-time="500000" id={`${idKarusell}`}>
	
    {
        mod
    }
	
    </ul>
    </div>
    </section>


  </>);
};

Missions.propTypes = {
 
  
  margin: PropTypes.oneOf(['mb-48', 'mb-32', 'mb-16']),
  highImg: false
    // modules: PropTypes.oneOf(['1', '2', '3', '4']),
  /**
   * Button contents
   */

}


Missions.defaultProps = {
  grid: null,
  highImg: false
};



