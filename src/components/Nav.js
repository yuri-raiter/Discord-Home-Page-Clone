import React, { useState } from 'react'

import styled from 'styled-components'
import Logo from './Logo'

import { StyledLogo, ButtonWrapper, StyledDownloadButton } from './GlobalReusableStyles'
import { sideMenu } from '../animations'
import { motion } from 'framer-motion'


const Nav = () => {

    const [isActive, setIsActive] = useState(false)

    const onClick = () => {
        return setIsActive(!isActive)
    }

    return (
        <StyledNav>
            <a href="/">
                <StyledLogo>
                    <Logo />
                </StyledLogo>
            </a>
            <MobileMenu initial="hidden" animate={isActive ? "visible" : "hidden"} variants={sideMenu}>
                <TopWrapper>
                    <a href="/">
                        <MobileLogo>
                            <Logo />
                        </MobileLogo>
                    </a>
                    <CloseButton onClick={onClick}>
                        <ion-icon name="close-sharp"></ion-icon>
                    </CloseButton>
                </TopWrapper>
                <List>
                    <HomeLink><a href="/">Home</a></HomeLink>
                    <li><a href="/">Download</a></li>
                    <li><a href="/">Why Discord?</a></li>
                    <li><a href="/">Nitro</a></li>
                    <li><a href="/">Safety</a></li>
                    <li><a href="/">Suport</a></li>
                </List>
                <BottomWrapper>
                    <DownloadButton>
                        <ion-icon name="download-outline" />
                        Download for Windows
                    </DownloadButton>
                </BottomWrapper>
            </MobileMenu>
            <Wrapper>
                <Button>Login</Button>
                <HamburguerIcon onClick={onClick}>
                    <ion-icon name="menu"></ion-icon>
                </HamburguerIcon>
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

const MobileMenu = styled(motion.div)`
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
        padding: 1.3rem;
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
    }
    
`

const MobileLogo = styled(StyledLogo)`
    color: #36393F;
`

const CloseButton = styled.div`
    position: absolute;
    right: 10px; 
    cursor: pointer;   

    ion-icon {
        color: #36393F;
        font-size: 1.5rem;
    }
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

            &:nth-last-child(-n + 5) {
                a {
                    color: #36393F;
                }
            }

            &:nth-child(1) {
                a {
                    color: #7289D4;
                }
            }

            a {
                font-weight: 500;
                font-size: 0.85rem;
            }
        }
    }
`

const HomeLink = styled.li`
    display: none;

    @media (max-width: 1023px) {
        display: flex;
        background: #F6F6F6;
        border-radius: 1rem;
    }
`

const BottomWrapper = styled(ButtonWrapper)`
    display: none;

    @media (max-width: 1023px) {
        display: flex;
        flex: 1;
        align-items: flex-end;

        li {
            padding: 0.5rem 2.8rem;
            font-size: 0.8rem;
        }
    }
`

const DownloadButton = styled(StyledDownloadButton)`
    margin-right: 0;
    background: #7289DA;
    color: #fff;

    &:hover {
        color: #fff;
        opacity: 0.8;
    }
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
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

const HamburguerIcon = styled.div`
    cursor: pointer;
    
    ion-icon {
        font-size: 2rem;
        color: #fff;
        display: none;

        @media (max-width: 1023px) {
            display: flex;
        }
    }
`

export default Nav