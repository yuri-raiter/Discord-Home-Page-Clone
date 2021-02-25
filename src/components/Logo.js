import React from 'react'

import styled from 'styled-components'


const Logo = () => {
    return (
        <StyledLogo>
            <ion-icon name="logo-discord"/>
            <h2>Discord</h2>
        </StyledLogo>
    )
}


const StyledLogo = styled.div`
    display: flex;
    align-items: center;
    color: #fff;

    ion-icon {
        font-size: 2.3rem;
        margin-right: 0.3rem;
    }

    h2 {
        text-transform: uppercase;
        font-size: 1.3rem;
    }
`


export default Logo