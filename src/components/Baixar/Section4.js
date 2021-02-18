import React from 'react'

import section4_img from '../../img/section4_img.svg'
import section4_img2 from '../../img/section4_img2.svg'
import styled from 'styled-components'

import { StyledSection, StyledTexts } from './reusableStyles'
import { ButtonWrapper, StyledDownloadButton } from '../GlobalReusableStyles'


const Section4 = () => {
    return (
        <StyledSection4>
            <Background />
            <Texts>
                <h2>Reliable tech for staying close</h2>
                <p>Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.</p>
            </Texts>
            <img src={section4_img} alt=""/>
            <BottomTitle>
                <h3>Ready to start your journey?</h3>
                <img src={section4_img2} alt=""/>
            </BottomTitle>
            <ButtonWrapper>
                <DownloadButton>
                    <ion-icon name="download-outline" />
                    Download for Windows
                </DownloadButton>
            </ButtonWrapper>
        </StyledSection4>
    )
}

const StyledSection4 = styled(StyledSection)`
    position: relative;
    flex-direction: column;
    text-align: center;

    img {
        width: 100%;
        margin-bottom: 7rem;
    }
`

const Texts = styled(StyledTexts)`
    margin: 0 2.5rem;
`

const Background = styled.div`
    background: #F6F6F6;
    position: absolute;
    top: 0;
    height: 100%;
    width: 100vw;
    z-index: -1;
`

const BottomTitle = styled.div`
    position: relative;
    width: 530px;
    margin-bottom: 2.5rem;

    h3 {
        font-size: 1.8rem;
    }

    img {
        position: absolute;
        top: -30px;
        left: 0;
        width: 100%;
    }
`

const DownloadButton = styled(StyledDownloadButton)`
    background: #7289DA;
    color: #fff;

    &:hover {
        color: #fff;
        opacity: 0.8;
    }
`


export default Section4