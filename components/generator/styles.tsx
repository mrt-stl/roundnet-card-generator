import styled from "styled-components"

export const Container = styled.main`
    display: flex;
    width: 100vw;
    height: 100vh;
`

export const Col = styled.section<{ background?: boolean }>`
    flex-basis: 50%;
    max-width: 50%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => (props.background ? props.theme.color.anthracite : null)};

    @media only screen and (max-width: 768px) {
        flex-basis: 100%;
        max-width: 100%;
    }
`
