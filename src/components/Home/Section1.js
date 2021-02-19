import React from 'react'

import section1_img from '../../img/Home/section1_img.svg'
import styled from 'styled-components'

import { StyledSection, StyledTexts } from './reusableStyles'


const Section1 = () => {
    return (
        <StyledSection1>
            <img src={section1_img} alt=""/>
            <StyledTexts>
                <h2>An invite-only place with plenty of room to talk</h2>
                <p>Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</p>
            </StyledTexts>
        </StyledSection1>
    )
}

const StyledSection1 = styled(StyledSection)`

    img {
        margin-right: 10%;
    }
`


export default Section1