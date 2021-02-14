import React from 'react'

import section1_img from '../../img/section1_img.svg'
import styled from 'styled-components'

import { StyledSection, StyledTexts } from './reusableStyles'


const Section1 = () => {
    return (
        <StyledSection1>
            <img src={section1_img} alt=""/>
            <StyledTexts>
                <h2>Ambientes controlados por convites, com muito espaço pra conversar</h2>
                <p>Os servidores Discord são organizados em canais com tópicos para vocês colaborarem, compartilharem ou simplesmente falarem do dia sem entupir um chat geral.</p>
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