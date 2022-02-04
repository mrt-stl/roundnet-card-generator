import Image from "next/image"
import { ImageWrapper, CardContainer, CardName, Stats, SmallText, LogoWrapper } from "./styles"
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
                <Image src="/logo.svg" alt="" layout="fill"/>
            </LogoWrapper>
            <CardName>{data.name ? data.name : "Dein Name"}</CardName>
            <CardName>
                {" "}
                <SmallText>aka {data.nickname ? data.nickname : "GOAT"}</SmallText>
            </CardName>

            <ImageWrapper imgSrc={imgSrc} imgX={data.imageX} imgY={data.imageY} imgSize={data.imageSize}/>
            <CardName>
                <SmallText block>Signature Move</SmallText>
                {data.content ? data.content : "Ist der Block gesetzt, fängt er mehr ab als jeder Spam-Filter"}
            </CardName>
            <Stats alignLeft>ATK/ {data.attack}</Stats>
            <Stats>DEF/ {data.defense}</Stats>
        </CardContainer>
    )
}

export default Card
