import { useState, useEffect, useRef } from "react"
import Form from "components/form/form"
import Card from "components/card/card"
import ImageExport from "components/imageExport/imageExport"
import { Container, Col } from "./styles"

// html-to-image
// https://www.npmjs.com/package/html-to-image

export interface IData {
    imageSize: number
    imageX: number
    imageY: number
    image?: string
    name?: string
    nickname?: string
    content?: string
    attack?: number
    defense?: number
    color?: string
}

const Generator = () => {
    const [data, setData] = useState<IData>({
        image: "",
        name: "",
        nickname: "",
        content: "",
        attack: 0,
        defense: 0,
        imageX: 0,
        imageY: 0,
        imageSize: 10,
    })
    const [imgSrc, setImgSrc] = useState("")
    const [imgCopy, setImgCopy] = useState(data.image)

    const cardRef = useRef()

    useEffect(() => {
        if (data.image && imgCopy !== data.image) {
            const src = URL.createObjectURL(new Blob([data.image], { type: "image/*" }))
            setImgCopy(data.image)
            setImgSrc(src)
        }
    }, [data, imgCopy])
    return (
        <Container>
            <Col>
                <Form setData={setData} data={data} />
            </Col>
            <Col background>
                <Card data={data} imgSrc={imgSrc} cardRef={cardRef} />
                <ImageExport cardRef={cardRef} />
            </Col>
        </Container>
    )
}

export default Generator
