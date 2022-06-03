import { useState, useEffect, ChangeEvent } from "react"
import Image from "next/image"
import { FormContainer, Input, Label, Textarea, ColorPicker } from "./styles"
import { IData } from "components/generator/generator"

interface IFormProps {
    setData: any
    data: IData
}

const Form = ({ setData, data }: IFormProps) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const target = e.target
        const name = target.name
        let value
        switch (true) {
            case name === "image":
                const imgTarget = target as HTMLInputElement
                if (imgTarget.files) value = imgTarget.files[0]
                break

            default:
                value = target.value
                break
        }

        setData({ ...data, [name]: value })
    }

    return (
        <>
            <FormContainer>
                <Label>
                    Bild
                    <Input type="file" accept="image/*" name="image" onChange={handleChange} />
                </Label>

                <Label>
                    Name
                    <Input type="text" name="name" onChange={handleChange} value={data.name} />
                </Label>
                <Label>
                    Spitzname
                    <Input
                        type="text"
                        name="nickname"
                        onChange={handleChange}
                        value={data.nickname}
                    />
                </Label>
                <Label>
                    Beschreibung
                    <Textarea name="content" onChange={handleChange} value={data.content} />
                </Label>
                <Label>
                    Angriff
                    <Input
                        type="range"
                        min="0"
                        max="1000"
                        name="attack"
                        onChange={handleChange}
                        value={data.attack}
                    />
                </Label>
                <Label>
                    Verteidigung
                    <Input
                        type="range"
                        min="0"
                        max="1000"
                        name="defense"
                        onChange={handleChange}
                        value={data.defense}
                    />
                </Label>

                <Label>
                    Farbe
                    <ColorPicker
                        type="color"
                        name="color"
                        onChange={handleChange}
                        value={data.color}
                    />
                </Label>

                <Label>
                    Bildgröße
                    <Input
                        type="range"
                        min="0.1"
                        max="100"
                        name="imageSize"
                        onChange={handleChange}
                        value={data.imageSize}
                    />
                </Label>

                <Label>
                    Bild X
                    <Input
                        type="range"
                        min="-200"
                        max="200"
                        name="imageX"
                        onChange={handleChange}
                        value={data.imageX}
                    />
                </Label>

                <Label>
                    Bild Y
                    <Input
                        type="range"
                        min="-200"
                        max="200"
                        name="imageY"
                        onChange={handleChange}
                        value={data.imageY}
                    />
                </Label>
            </FormContainer>
            {/* {imgSrc ? <Image src={imgSrc} alt="" width="200" height="200" /> : null} */}
        </>
    )
}

export default Form
