import React from 'react'

import styled from 'styled-components'
import section1_img from '../../img/section1_img.svg'


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

const StyledSection1 = styled.div`
    margin-top: 550px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8rem 0;

    img {
        margin-right: 10%;
        width: 60%;
    }
`

const StyledTexts = styled.div`
    display: flex;
    flex-direction: column;

    h2 {
        font-size: 47px;
        margin-bottom: 1.5rem;
    }

    p {
        font-size: 1.1rem;
        font-weight: 500;
        line-height: 2rem;
    }
`


export default Section1