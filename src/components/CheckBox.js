
import React from 'react';
import { Check } from '../styles/components'
import checkError from '../media/checkError.svg';
import unchecked from '../media/unchecked.svg';
import checked from '../media/checked.svg';

const Checked = props => {
  const checkBox = () => {
    if (props.checked) {
      return <Check src={checked} />;
    } else if (props.error[props.box]) {
      return <Check src={checkError}/>;
    }
    return <Check src={unchecked}/>;
  };
  return (
    
    <div>
        <div onClick={() => props.setCheckBox(props.box)} style={{ display: 'grid' }}>
          {checkBox()}
        </div>
      </div>
  );
};

export default Checked;