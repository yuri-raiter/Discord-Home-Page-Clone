import React from 'react'

import styled from 'styled-components'

const Nav = () => {

    return (
        <StyledNav>
            <Logo>
                <ion-icon name="logo-discord"/>
                <h2>Discord</h2>
            </Logo>
            <List>
                <li><a href="/">Baixar</a></li>
                <li><a href="/">Por que usar o Discord?</a></li>
                <li><a href="/">Nitro</a></li>
                <li><a href="/">Segurança</a></li>
                <li><a href="/">Suporte</a></li>
            </List>
            <Button>Entrar</Button>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    min-height: 8vh;
    min-height: 80px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 2;
`

const Logo = styled.div`
    display: flex;
    align-items: center;
    color: #fff;

    ion-icon {
        font-size: 2.3rem;
        margin-right: 0.3rem;
    }

    h2 {
        text-transform: uppercase;
        font-size: 1.2rem;
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
            text-decoration: none;
            font-weight: 700;
            font-size: 15px;
            color: #fff;
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

    &:hover {
        color: #638BFB;
        box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
    }
`


export default Nav