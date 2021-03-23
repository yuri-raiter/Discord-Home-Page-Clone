import styled from 'styled-components'

export const StyledLogo = styled.div`
    display: flex;
    align-items: center;
    color: #fff;

    ion-icon {
        font-size: 2.3rem;
        margin-right: 0.3rem;
    }

    h2 {
        text-transform: uppercase;
        font-size: 1.3rem;
    }
`

export const ButtonWrapper = styled.ul`
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

export const StyledDownloadButton = styled.li`
    background: #fff;
    color: #36393F;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1.5rem;

    ion-icon {
        font-size: 1.5rem;
        margin-right: 0.5rem;
    }

    &:hover {
        color: #638BFB;
    }
`

export const StyledTextButton = styled.li`
    background: #23272A;

    &:hover {
        background: #36393F;
    }
`