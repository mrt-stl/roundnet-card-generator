/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import {
    ImageWrapper,
    CardContainer,
    CardName,
    Stats,
    SmallText,
    LogoWrapper,
    CardDescription,
} from "./styles"
import { IData } from "components/generator/generator"

interface ICardProps {
    data: IData
    imgSrc: string
    cardRef: any
}

const Card = ({ data, imgSrc, cardRef }: ICardProps) => {
    return (
        <CardContainer ref={cardRef} backdropColor={data.color}>
            <LogoWrapper>
                <img src="/logo.svg" alt="" />
            </LogoWrapper>
            <CardName>{data.name ? data.name : "Dein Name"}</CardName>
            <CardName>
                {" "}
                <SmallText>aka {data.nickname ? data.nickname : "GOAT"}</SmallText>
            </CardName>
            <ImageWrapper
                imgSrc={imgSrc}
                imgX={data.imageX}
                imgY={data.imageY}
                imgSize={data.imageSize}
            >
                {imgSrc ? <img src={imgSrc} alt="" /> : null}
            </ImageWrapper>
            <CardDescription length={data.content ? data.content.length : 0}>
                <SmallText block>Signature Move</SmallText>
                {data.content
                    ? data.content
                    : "Ist der Block gesetzt, fängt er mehr ab als jeder Spam-Filter"}
            </CardDescription>
            <Stats alignLeft>ATK/ {data.attack}</Stats>
            <Stats>DEF/ {data.defense}</Stats>
        </CardContainer>
    )
}

export default Card
