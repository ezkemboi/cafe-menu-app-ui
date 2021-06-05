import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: ${props => props.primary ? "#008CBA" : 'white'};
    color: ${props => props.primary ? "#fff" : '#008CBA'};
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
    border: 2px solid #008CBA;
`

const Button = (props) => {
    const { primary, handleClick } = props;
    return (
        <StyledButton
            primary={primary}
            onClick={handleClick}
        >
            {props.children}
        </StyledButton>
    )
}

export default Button;
