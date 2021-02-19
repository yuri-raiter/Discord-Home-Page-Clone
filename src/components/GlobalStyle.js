import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Raleway', sans-serif;
    }

    body {
        overflow-x: hidden;
    }

    a {
        text-decoration: none;
        color: #000;
    }
    
    button {
        outline: none;
        border: none;
        background: none;
        cursor: pointer;
    }
`

export default GlobalStyle