import React from 'react';
import './Common.css';

function Button({ type = 'primary', children, onClick, className = '' }) {
  return (
    <button 
      className={`btn btn-${type} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button; 