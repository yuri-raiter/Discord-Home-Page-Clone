import React from 'react'

import styled from 'styled-components'
import Logo from './Logo'
import { StyledLogo } from './GlobalReusableStyles'

const Footer = () => {

    return (
        <StyledFooter>
            <Background />
            <FirstPart>
                <Social>
                    <h3>Your place to talk</h3>
                    <ion-icon name="logo-twitter"></ion-icon>
                    <ion-icon name="logo-instagram"></ion-icon>
                    <ion-icon name="logo-facebook"></ion-icon>
                    <ion-icon name="logo-youtube"></ion-icon>
                </Social>
                <Links>
                    <LinksColumn>
                        <span>Product</span>
                        <a href="/">Download</a>
                        <a href="/">Why Discord</a>
                        <a href="/">Inspiration</a>
                        <a href="/">College</a>
                        <a href="/">Nitro</a>
                        <a href="/">Status</a>
                    </LinksColumn>
                    <LinksColumn>
                        <span>Company</span>
                        <a href="/">About</a>
                        <a href="/">Jobs</a>
                        <a href="/">Branding</a>
                        <a href="/">Newsroom</a>
                        <a href="/">Store</a>
                    </LinksColumn>
                    <LinksColumn>
                        <span>Resources</span>
                        <a href="/">Support</a>
                        <a href="/">Safety</a>
                        <a href="/">Blog</a>
                        <a href="/">Feedback</a>
                        <a href="/">Partners</a>
                        <a href="/">Verification</a>
                        <a href="/">Developers</a>
                        <a href="/">StreamKit</a>
                        <a href="/">Open Source</a>
                        <a href="/">Security</a>
                        <a href="/">Moderation</a>
                    </LinksColumn>
                    <LinksColumn>
                        <span>Policies</span>
                        <a href="/">Terms</a>
                        <a href="/">Privacy</a>
                        <a href="/">Guidelines</a>
                        <a href="/">Acknowledgements</a>
                        <a href="/">Licenses</a>
                    </LinksColumn>
                </Links>
            </FirstPart>
            <SecondPart>
                <StyledLogo>
                    <Logo/>
                </StyledLogo>
                <button>Sign up</button>
            </SecondPart>
        </StyledFooter>
    )    
}


const StyledFooter = styled.footer`
    width: 100%;
    height: 640px;
    position: relative;
`

const Background = styled.div`
    width: 100vw;
    height: 100%;
    background: #23272A;
    position: absolute;
    margin-left: calc(50% - 50vw);
    z-index: -1;
`

const FirstPart = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5rem 3rem 5rem 1rem;
    border-bottom: 1px solid #7289D4;
    width: 100%;
`

const Social = styled.div`

    h3 {
        color: #7289D4;
        font-size: 1.8rem;
        margin-bottom: 1.5rem;
    }

    ion-icon {
        color: white;
        font-size: 1.4rem;
        cursor: pointer;

        &:nth-child(-n + 4) {
            margin-right: 1.5rem;
        }
    }
`
const Links = styled.div`
    display: flex;
    width: 65%;
    justify-content: space-between;
`

const LinksColumn = styled.div`
    display: flex;
    flex-direction: column;

    span {
        color: #4F80C9;
    }

    a {
        color: #fff;
        margin-top: 1rem;

        &:hover {
            text-decoration: underline;
        }
    }

    span, a {
        font-size: 0.9rem;
    }
`

const SecondPart = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;

    button {
        background: #7289D4;
        padding: 0.7rem 0.8rem;
        border-radius: 2rem;
        color: #fff;
        font-weight: 500;
        transition: all 0.2s ease;

        &:hover {
            background: #8EA1E1;
        }
    }
`


export default Footer