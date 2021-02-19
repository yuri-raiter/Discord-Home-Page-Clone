import React from 'react'

import styled from 'styled-components'
import Logo from './Logo'

import { Link } from 'react-router-dom'

const Nav = () => {

    return (
        <StyledNav>
            <Link to="/">
                <Logo />
            </Link>
            <List>
                <li><Link to="/download">Download</Link></li>
                <li><Link to="/">Why Discord?</Link></li>
                <li><Link to="/">Nitro</Link></li>
                <li><Link to="/">Safety</Link></li>
                <li><Link to="/">Suport</Link></li>
            </List>
            <Button>Login</Button>
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
                border-bottom: 1px solid #fff;
            }
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