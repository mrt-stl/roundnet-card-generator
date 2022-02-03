import styled from "styled-components"

export const CardContainer = styled.div<{ backdropColor?: string }>`
    position: relative;
    padding: ${(props) => props.theme.spacing.xs};
    padding-bottom: ${(props) => props.theme.spacing.m};
    border-radius: 5px;
    box-shadow: 2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02), 6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
    12.5px 12.5px 10px rgba(0, 0, 0, 0.035), 22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
    41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05), 100px 100px 80px rgba(0, 0, 0, 0.07);
    width: min(80vw, 300px);
    background-image: url("/smoke-background.jpeg");
    background-size: cover;
    border: 6px solid rgba(0, 0, 0, 0.2);

    :before {
        content: "";
        width: 100%;
        height: 100%;
        color: blue;
        position: absolute;
        top: 0;
        left: 0;
        background-color: ${(props) => (props.backdropColor ? props.backdropColor : null)};
        opacity: 0.2;
    }

    * {
        position: relative;
    }
`

export const CardName = styled.p`
    background-color: rgba(255, 255, 255, 0.3);
    width: 100%;
    padding-left: ${(props) => props.theme.spacing.xs};
    padding-right: ${(props) => props.theme.spacing.xs};
`

export const SmallText = styled.span<{ block?: boolean }>`
    display: ${(props) => (props.block ? "block" : null)};
    font-size: ${(props) => props.theme.fontSize.xs};
    font-weight: ${(props) => props.theme.fontWeight.bold};
`

export const ImageWrapper = styled.div<{ imgSrc?: string, imgX: number, imgY: number, imgSize: number }>`
    background-image: ${(props) => (props.imgSrc ? `url(${props.imgSrc})` : null)};
    background-size: ${props => props.imgSize}%;
    background-position: ${props => props.imgX}% ${props => props.imgY}%;
    background-repeat: no-repeat;
    width: 100%;
    aspect-ratio: 1;
`

export const Stats = styled.p<{ alignLeft?: boolean }>`
    position: absolute;
    bottom: 10px;
    left: ${(props) => (props.alignLeft ? "10px" : null)};
    right: ${(props) => (props.alignLeft ? null : "10px")};
    font-size: ${(props) => props.theme.fontSize.xs};
    font-weight: ${(props) => props.theme.fontWeight.bold};
`
