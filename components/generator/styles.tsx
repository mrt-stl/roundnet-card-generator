import styled from "styled-components"

export const Container = styled.main`
    display: flex;
    flex-wrap: wrap;
    width: 100vw;
    height: fit-content;
    overflow: auto;

    @media only screen and (max-width: 768px) {
        flex-direction: column-reverse;
    }
`

export const Col = styled.section<{ background?: boolean }>`
    flex-basis: 50%;
    max-width: 50%;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => (props.background ? props.theme.color.anthracite : null)};
    position: ${(props) => (props.background ? "sticky" : null)};
    top: ${(props) => (props.background ? "0" : null)};
    padding-top: ${props => props.theme.spacing.m};
    padding-bottom: ${props => props.theme.spacing.m};

    @media only screen and (max-width: 768px) {
        flex-basis: 100%;
        max-width: 100%;
        padding-left: ${props => props.theme.spacing.m};
        padding-right: ${props => props.theme.spacing.m};

    }
`
