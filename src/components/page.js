import React from 'react';
import styled from 'styled-components';

const StyledPage = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    flex-direction: column;
    background-color: #FAFAF8;
`

const Page = (props) => {
    return (
        <StyledPage>
            {props.children}
        </StyledPage>
    )
}

export default Page;
