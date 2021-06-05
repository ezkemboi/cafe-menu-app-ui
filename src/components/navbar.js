import React from 'react';
import styled from 'styled-components';

const StyledNavBar = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 5px 30px;
`

const NavBar = (props) => {
    return (
        <StyledNavBar>
            {props.children}
        </StyledNavBar>
    )
}

export default NavBar;
