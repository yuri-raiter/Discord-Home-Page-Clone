import React from 'react'

import section2_img from '../../img/section2_img.svg'
import styled from 'styled-components'

import { StyledSection, StyledTexts } from './reusableStyles'


const Section2 = () => {
    return (
        <StyledSection2>
            <Background />
            <StyledTexts>
                <h2>Aqui é fácil se encontrar</h2>
                <p>Entre no canal de voz quando estiver à toa. Amigos no mesmo servidor podem te ver e entrar imediatamente, sem nem ter que fazer a chamada.</p>
            </StyledTexts>
            <img src={section2_img} alt=""/>
        </StyledSection2>
    )
}

const StyledSection2 = styled(StyledSection)`
    margin-top: 120px;
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