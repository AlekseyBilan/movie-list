import React from 'react';
import PropTypes from 'prop-types';

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

Button.propTypes = {
    text: PropTypes.string.isRequired,
    cName: PropTypes.string,
    disabled: PropTypes.bool,
    type: PropTypes.string,
    onClick: PropTypes.func
};

export default Button;