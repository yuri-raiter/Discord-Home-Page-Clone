import React from 'react'

import styled from 'styled-components'

const Banner = () => {

    return (
        <StyledBanner>
            <StyledTexts>
                <h1>Seu lugar para conversar</h1>
                <p>Não importa se você faz parte de um clube escolar, uma comunidade artística mundial ou só amigos querendo ficar de boa, o Discord torna mais fácil conversar todo dia e se ver com mais frequência.</p>


                <Buttons>
                    <DownloadButton>
                        <ion-icon name="download-outline"/>
                        Baixar para Windows
                    </DownloadButton>
                    <OpenInBrowserButton>Abra o Discord no seu navegador</OpenInBrowserButton>
                </Buttons>
            </StyledTexts>
        </StyledBanner>
    )
}

const StyledBanner = styled.div`
    width: 100vw;
    height: 630px;
    background: linear-gradient(to bottom, #2A5EE8, #638BFB);
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledTexts = styled.div`
    text-align: center;
    width: 800px;
    color: #fff;
    margin-top: 4.5rem;

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

const Buttons = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;

    li {
        font-size: 18px;
        font-weight: 600;
        padding: 1rem 2rem;
        border-radius: 2rem;
        cursor: pointer;
        transition: 0.2s all ease;

        &:hover {
            box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
        }
    }
`

const DownloadButton = styled.li`
    background: #fff;
    color: #36393F;
    margin-right: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    ion-icon {
        font-size: 1.5rem;
        margin-right: 0.5rem;
    }

    &:hover {
        color: #638BFB;
    }
`
const OpenInBrowserButton = styled.li`
    background: #23272A;

    &:hover {
        background: #36393F;
    }
`


export default Banner