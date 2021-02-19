import React from 'react'

import section3_img from '../../img/Home/section3_img.svg'
import styled from 'styled-components'

import { StyledSection, StyledTexts } from './reusableStyles'


const Section3 = () => {
    return (
        <StyledSection3>
            <img src={section3_img} alt=""/>
            <StyledTexts>
                <h2>From a few to a fandom</h2>
                <p>Get a community of any size running with moderation tools and custom member access. Give members special powers, set up private channels, and more.</p>
            </StyledTexts>
        </StyledSection3>
    )
}

const StyledSection3 = styled(StyledSection)`

    img {
        margin-right: 10%;
    }
`


export default Section3