import React from 'react'

import section3_img from '../../img/Home/section3_img.svg'
import styled from 'styled-components'

import { StyledSection, StyledTexts, Wrapper } from './reusableStyles'
import { showUp } from '../../animations'
import { useShowUp } from '../../useShowUp'


const Section3 = () => {
    const [element, controls] = useShowUp()

    return (
        <StyledSection3>
            <StyledWrapper initial="hidden" animate={controls} variants={showUp} ref={element}>
                <img src={section3_img} alt=""/>
                <StyledTexts>
                    <h2>From a few to a fandom</h2>
                    <p>Get a community of any size running with moderation tools and custom member access. Give members special powers, set up private channels, and more.</p>
                </StyledTexts>
            </StyledWrapper>
        </StyledSection3>
    )
}

const StyledSection3 = styled(StyledSection)`

    img {
        margin-right: 10%;
    }
`

const StyledWrapper = styled(Wrapper)`
    flex-direction: row;
`


export default Section3