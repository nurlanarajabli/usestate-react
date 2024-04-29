
import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} style={{ backgroundColor: 'red', width: '20%', height: '100px', borderRadius: '15px' }}>
      <p>{text}</p>
    </button>
  );
};

export default Button;
