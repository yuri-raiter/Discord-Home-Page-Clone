import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Raleway', sans-serif;
    }

    button {
        outline: none;
        border: none;
        background: none;
        cursor: pointer;
    }
`

export default GlobalStyle