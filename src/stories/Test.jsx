import React from 'react';
import PropTypes from 'prop-types';
import Test2 from './Test2';

export const Test = ({antal, header, ...props}) => {

const numberOfArticles = () => {
    let div = []
    switch (antal) {
  default:
    header = "Case 1 antal";
    break;
  case 2:
    header = "Case 2 antal";
    break;
  case 3:
    header = "Case 3 antal";
}
    for (let i = 0; i < antal; i++){
       div.push(<Test2 header={header} props={props} key={i} />)
    }
    return div
}


return (<>
  {numberOfArticles()}
</>
  );
};


Test.propTypes = {
 
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