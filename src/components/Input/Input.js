import React, { useState } from 'react';
import './Input.css';

function Input(props) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className='Input w-100 d-flex'>
      <input
        type={props.type}
        value={inputValue} 
        onChange={handleInputChange}
        placeholder={props.placeholder}
        name={props.name}
        className={props.className}
      />
      {
        props.showBtn === true ?
        <button className="btn" type="submit">Submit</button>
        : ''
      }
    </div>
  );
}

export default Input;
