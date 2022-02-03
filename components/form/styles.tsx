import styled from "styled-components"

export const FormContainer = styled.form`
    padding-top: ${(props) => props.theme.spacing.l};
`

export const Label = styled.label`
    display: block;
    text-align: center;
`

export const ColorPicker = styled.input`
    width: 100%;
    height: 60px;
    border: none;
    appearance: none;
    border-radius: 0;
    background-color: ${(props) => props.theme.color.anthracite};
    padding: ${(props) => props.theme.spacing.xs};
    margin-bottom: ${(props) => props.theme.spacing.l};
`

export const Input = styled.input`
    width: 100%;
    border: none;
    background-color: ${(props) => props.theme.color.anthracite};
    padding: ${(props) => props.theme.spacing.xs};
    margin-bottom: ${(props) => props.theme.spacing.l};
    min-height: 30px;
`

export const Textarea = styled.textarea`
    width: 100%;
    border: none;
    appearance: none;
    background-color: ${(props) => props.theme.color.anthracite};
    padding: ${(props) => props.theme.spacing.xs};
    margin-bottom: ${(props) => props.theme.spacing.l};
`
