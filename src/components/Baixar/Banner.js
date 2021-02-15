import React from 'react'

import styled from 'styled-components'
import banner_img1 from '../../img/banner_img1.svg'
import banner_img2 from '../../img/banner_img2.svg'
import banner_img3 from '../../img/banner_img3.svg'

import { ButtonWrapper, StyledDownloadButton, StyledTextButton} from '../GlobalReusableStyles'


const Banner = () => {

    return (
        <StyledBanner>
            <Background />
            <StyledTexts>
                <h1>Seu lugar para conversar</h1>
                <p>Não importa se você faz parte de um clube escolar, uma comunidade artística mundial ou só amigos querendo ficar de boa, o Discord torna mais fácil conversar todo dia e se ver com mais frequência.</p>
                <ButtonWrapper>
                    <StyledDownloadButton>
                        <ion-icon name="download-outline" />
                        Baixar para Windows
                    </StyledDownloadButton>
                    <StyledTextButton>Abra o Discord no seu navegador</StyledTextButton>
                </ButtonWrapper>
            </StyledTexts>
            <BannerImage1 src={banner_img1} alt=""/>
            <BannerImage2 src={banner_img2} alt=""/>
            <BannerImage3 src={banner_img3} alt=""/>
        </StyledBanner>
    )
}

const StyledBanner = styled.div`
    min-height: 540px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    
    img {
        position: absolute;
        bottom: 0;
    }
`

const Background = styled.div`
    width: 100vw;
    height: 620px;
    background: linear-gradient(to bottom, #2A5EE8, #638BFB);
    position: absolute;
    top: -80px;
    z-index: -3;
`

const StyledTexts = styled.div`
    text-align: center;
    width: 800px;
    color: #fff;

    h1 {
        font-size: 50px;
        margin-bottom: 3rem;
    }
    
    p {
        font-size: 18px;
        line-height: 2rem;
        margin-bottom: 2rem;
    }
`

const BannerImage1 = styled.img`
    margin-left: -1670px;
    z-index: -1;
`

const BannerImage2 = styled.img`
    margin-right: -1670px;
    z-index: -1;
`

const BannerImage3 = styled.img`
    margin-right: -120px;
    z-index: -2;
`

export default Banner