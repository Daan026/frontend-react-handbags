import React from 'react';



const Button = ({onDisabled, onClick, type, text, className}) => {
    return (
        <>
        <button
            disabled = {onDisabled}
            onClick = {onClick}
            type = {type}
            className={className}
            >
            {text}
        </button>
        </>
    );
};


export default Button;

