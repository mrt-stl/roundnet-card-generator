import Image from "next/image"
import { ImageWrapper, CardContainer, CardName, Stats, SmallText } from "./styles"
import { IData } from "components/generator/generator"

interface ICardProps {
    data: IData
    imgSrc: string
    cardRef: any
}

const Card = ({ data, imgSrc, cardRef }: ICardProps) => {
    return (
        <CardContainer ref={cardRef} backdropColor={data.color}>
            <CardName>{data.name ? data.name : "_"}</CardName>
            <CardName>
                {" "}
                <SmallText>aka {data.nickname}</SmallText>
            </CardName>

            <ImageWrapper imgSrc={imgSrc} imgX={data.imageX} imgY={data.imageY} imgSize={data.imageSize}/>
            <CardName>
                <SmallText block>Beschreibung</SmallText>
                {data.content}
            </CardName>
            <Stats alignLeft>ATK/ {data.attack}</Stats>
            <Stats>DEF/ {data.defense}</Stats>
        </CardContainer>
    )
}

export default Card
