import React from 'react'

import section3_img from '../../img/section3_img.svg'
import styled from 'styled-components'

import { StyledSection, StyledTexts } from './reusableStyles'


const Section3 = () => {
    return (
        <StyledSection3>
            <img src={section3_img} alt=""/>
            <StyledTexts>
                <h2>Para poucos e para muitos</h2>
                <p>Organize uma comunidade de qualquer tamanho com ferramentas de moderação e acesso personalizado a membros. Dê poderes especiais aos membros, monte canais privados e muito mais.</p>
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