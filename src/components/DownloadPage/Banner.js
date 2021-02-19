import React from 'react'

import styled from 'styled-components'
import banner_img from '../../img/DownloadPage/banner_img.svg'

import { ButtonWrapper, StyledDownloadButton } from '../GlobalReusableStyles'


const Banner = () => {

    return (
        <StyledBanner>
            <Background />
            <StyledTexts>
                <h1>Get Discord for any device</h1>
                <p>An adventure awaits. Hang out with yout friends on out desktop app and keep the conversation going on mobile.</p>
                <DownloadDiv>
                    <ButtonWrapper>
                        <DownloadButton>
                            <ion-icon name="download-outline" />
                            Download for Windows
                        </DownloadButton>
                    </ButtonWrapper>
                    <p>Windows 7 or higher</p>
                </DownloadDiv>
            </StyledTexts>
            <img src={banner_img} alt=""/>
        </StyledBanner>
    )
}


const StyledBanner = styled.div`
    min-height: 570px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 85%;
    }
`

const Background = styled.div`
    width: 100vw;
    height: 650px;
    background: #23272A;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
`

const StyledTexts = styled.div`
    display: flex;
    flex-direction: column;
    color: #fff;

    h1 {
        font-size: 55px;
        margin-bottom: 2rem;
    }

    p {
        font-size: 22px;
        font-weight: 500;
        line-height: 2rem;
        margin-bottom: 2rem;
    }
`

const DownloadDiv = styled.div`
    display: flex;
    align-items: center;

    p {
        font-size: 0.9rem;
        margin: 0;
    }
`

const DownloadButton = styled(StyledDownloadButton)`
    background: #7289DA;
    color: #fff;

    &:hover {
        background: #8EA1E1;
        color: #fff;
    }
`


export default Banner