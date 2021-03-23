import React from 'react'

import styled from 'styled-components'
import Logo from './Logo'

import { StyledLogo, ButtonWrapper, StyledDownloadButton } from './GlobalReusableStyles'


const Nav = () => {  
    return (
        <StyledNav>
            <a href="/">
            <StyledLogo>
                <Logo />
            </StyledLogo>
            
            </a>
            <MobileMenu>
                <TopWrapper>
                    <a href="/">
                        <MobileLogo>
                            <Logo />
                        </MobileLogo>
                    </a>
                    <ion-icon name="close-sharp"></ion-icon>
                </TopWrapper>
                <List>
                    <HomeLink><a href="/">Home</a></HomeLink>
                    <li><a href="/">Download</a></li>
                    <li><a href="/">Why Discord?</a></li>
                    <li><a href="/">Nitro</a></li>
                    <li><a href="/">Safety</a></li>
                    <li><a href="/">Suport</a></li>
                </List>
                <HamburguerMenuButton>
                    <DownloadButton>
                        <ion-icon name="download-outline" />
                        Download for Windows
                    </DownloadButton>
                </HamburguerMenuButton>
            </MobileMenu>
            <Wrapper>
                <Button>Login</Button>
                <ion-icon name="menu"></ion-icon>
            </Wrapper>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    min-height: 80px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const MobileMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1023px) {
        position: fixed;
        right: 0;
        top: 0;
        background: #fff;
        height: 100vh;
        width: 315px;
        z-index: 2;
        flex-direction: column;
        justify-content: flex-start;
        border-radius: 0.5rem 0 0 0.5rem;
        padding: 1.3rem 3rem 1.3rem 1.3rem;
    }
`

const TopWrapper = styled.div`
    display: none;

    @media (max-width: 1023px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding-bottom: 1.8rem;
        border-bottom: 1px solid #EBEDEF;

        ion-icon {
            color: #36393F;

            &:nth-child(2) {
                font-size: 1.5rem;
            }
        }
    }
    
`

const MobileLogo = styled(StyledLogo)`
    color: #36393F;
`

const List = styled.ul`
    display: flex;
    list-style: none;

    li {
        &:nth-child(-n + 4) { // the first four
            margin-right: 2.5rem;
        }

        a {
            font-weight: 700;
            font-size: 15px;
            color: #fff;

            &:hover {
                text-decoration: underline;
            }
        }
    }

    @media (max-width: 1023px) {
        flex-direction: column;
        width: 100%;
        margin-top: 1rem;

        li {
            padding: 0.8rem;

            &:nth-child(-n + 4) { // the first four
                margin-right: 0;
            }
        }

         li a {
            font-weight: 500;
            font-size: 0.85rem;
            color: #36393F;
        }
    }
`

const HomeLink = styled.li`
    display: none;

    @media (max-width: 1023px) {
        display: flex;
        background: #F6F6F6;
        border-radius: 1rem;
        
        a:hover {
            color: #7289D4;
        }
    }
`

const HamburguerMenuButton = styled(ButtonWrapper)`
    display: none;

    @media (max-width: 1023px) {
        display: flex;

        li {
            padding: 0.3rem 2rem;
            font-size: 0.8rem;
        }
    }
`

const DownloadButton = styled(StyledDownloadButton)`
    margin-right: 0;
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;

    ion-icon {
        font-size: 2rem;
        color: #fff;
        cursor: pointer;
        display: none;

        @media (max-width: 1023px) {
            display: flex;
        }
    }
`

const Button = styled.button`
    font-size: 13px;
    font-weight: 500;
    border-radius: 2rem;
    background: #fff;
    padding: 11px 15px;
    color: #36393F;
    transition: 0.2s all ease;
    margin-right: 1rem;

    &:hover {
        color: #638BFB;
        box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
    }
`


export default Nav