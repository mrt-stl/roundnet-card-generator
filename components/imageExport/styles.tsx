import styled from "styled-components"

export const ButtonContainer = styled.div`
    width: 100%;
    text-align: center;
`

export const Button = styled.button`
    border: 0px;
    background-color: ${(props) => props.theme.color.lionGold};
    color: ${(props) => props.theme.color.white};
    padding: ${(props) => props.theme.spacing.s};
    border-radius: 5px;
    cursor: pointer;
`
