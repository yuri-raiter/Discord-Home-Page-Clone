import React from 'react'

import section2_img from '../../img/Home/section2_img.svg'
import styled from 'styled-components'

import { StyledSection, StyledTexts } from './reusableStyles'


const Section2 = () => {
    return (
        <StyledSection2>
            <Background />
            <StyledTexts>
                <h2>Where hanging out is easy</h2>
                <p>Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.</p>
            </StyledTexts>
            <img src={section2_img} alt=""/>
        </StyledSection2>
    )
}

const StyledSection2 = styled(StyledSection)`
    position: relative;

    img {
        margin-left: 10%;
    }
`

const Background = styled.div`
    background: #F6F6F6;
    position: absolute;
    height: 100%;
    width: 100vw;
    margin-left: calc(50% - 50vw);
    z-index: -1;
`

export default Section2