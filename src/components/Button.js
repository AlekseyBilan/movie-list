import React from 'react';
const Button = ({ text, onClick, type, disabled, cName }) => (
    <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={cName}
    >
        {text}
    </button>
);

export default Button;