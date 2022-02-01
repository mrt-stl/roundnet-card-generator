import styled from "styled-components"

interface IGridContainerProps {
    templateAreas?: string
    templateAreasBreakS?: string
    templateAreasBreakM?: string
    templateColumns?: string
    templateColumnsBreakM?: string
    templateColumnsBreakS?: string
    templateRows?: string
}

export const GridContainer = styled.div<IGridContainerProps>`
    display: grid;
    grid-template-areas: ${(props) => (props.templateAreas ? props.templateAreas : null)};
    grid-template-columns: ${(props) => (props.templateColumns ? props.templateColumns : null)};
    grid-template-rows: ${(props) => (props.templateRows ? props.templateRows : null)};
    grid-gap: ${(props) => props.theme.spacing.s};
    margin-left: ${(props) => props.theme.spacing.l};
    margin-right: ${(props) => props.theme.spacing.l};

    @media (max-width: 1100px) {
        grid-template-columns: ${(props) =>
            props.templateColumnsBreakM ? props.templateColumnsBreakM : " 1fr 1fr"};
        grid-template-areas: ${(props) =>
            props.templateAreasBreakM ? props.templateAreasBreakM : '"headline headline"'};
        margin-left: ${(props) => props.theme.spacing.m};
        margin-right: ${(props) => props.theme.spacing.m};
    }

    @media (max-width: 678px) {
        grid-template-columns: ${(props) =>
            props.templateColumnsBreakS ? props.templateColumnsBreakS : " 1fr"};
        grid-template-areas: ${(props) =>
            props.templateAreasBreakS ? props.templateAreasBreakS : '"headline"'};
        grid-gap: ${(props) => props.theme.spacing.m};
        margin-left: ${(props) => props.theme.spacing.s};
        margin-right: ${(props) => props.theme.spacing.s};
    }
`
