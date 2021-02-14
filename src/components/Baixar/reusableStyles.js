import styled from 'styled-components'

export const StyledSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8rem 0;

    img {
        width: 60%;
    }
`

export const StyledTexts = styled.div`
    display: flex;
    flex-direction: column;

    h2 {
        font-size: 47px;
        margin-bottom: 1.5rem;
    }

    p {
        font-size: 1.1rem;
        font-weight: 500;
        line-height: 2rem;
    }
`