import React from 'react'

import section1_img from '../../img/Home/section1_img.svg'
import styled from 'styled-components'

import { StyledSection, StyledTexts, Wrapper } from './reusableStyles'
import { showUp } from '../../animations'
import { useShowUp } from '../../useShowUp'


const Section1 = () => {
    const [element, controls] = useShowUp()

    return (
        <StyledSection1 >
            <StyledWrapper initial="hidden" animate={controls} variants={showUp} ref={element}>
                <img src={section1_img} alt=""/>
                <StyledTexts>
                    <h2>An invite-only place with plenty of room to talk</h2>
                    <p>Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</p>
                </StyledTexts>
            </StyledWrapper>
        </StyledSection1>
    )
}

const StyledSection1 = styled(StyledSection)`

    img {
        margin-right: 10%;
    }
`

const StyledWrapper = styled(Wrapper)`
    flex-direction: row;
`


export default Section1