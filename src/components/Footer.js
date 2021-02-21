import React from 'react'

import styled from 'styled-components'
import Logo from './Logo'

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
                <LinksColumn>
                    <span>Product</span>
                    <p>Download</p>
                    <p>Why Discord</p>
                    <p>Inspiration</p>
                    <p>College</p>
                    <p>Nitro</p>
                    <p>Status</p>
                </LinksColumn>
                <LinksColumn>
                    <span>Company</span>
                    <p>About</p>
                    <p>Jobs</p>
                    <p>Branding</p>
                    <p>Newsroom</p>
                    <p>Store</p>
                </LinksColumn>
                <LinksColumn>
                    <span>Resources</span>
                    <p>Support</p>
                    <p>Safety</p>
                    <p>Blog</p>
                    <p>Feedback</p>
                    <p>Partners</p>
                    <p>Verification</p>
                    <p>Developers</p>
                    <p>StreamKit</p>
                    <p>Open Source</p>
                    <p>Security</p>
                    <p>Moderation</p>
                </LinksColumn>
                <LinksColumn>
                    <span>Policies</span>
                    <p>Terms</p>
                    <p>Privacy</p>
                    <p>Guidelines</p>
                    <p>Acknowledgements</p>
                    <p>Licenses</p>
                </LinksColumn>
            </FirstPart>
            <SecondPart>
                <Logo/>
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

    &:nth-child(1) {
        margin-right: 2rem;
    }
`

const LinksColumn = styled.div`

    span {
        color: #4F80C9;
    }

    p {
        color: #fff;
        margin-top: 1rem;
    }

    span, p {
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