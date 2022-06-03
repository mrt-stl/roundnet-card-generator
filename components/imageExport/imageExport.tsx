import { MouseEvent } from "react"
import { ButtonContainer, Button } from "./styles"
import html2canvas from "html2canvas"

interface IImageExportProps {
    cardRef: any
}

const imageExport = ({ cardRef }: IImageExportProps) => {
    const handleDownload = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (cardRef.current === null) return

        html2canvas(cardRef.current, {
            scale: 5,
        })
            .then((canvas) => {
                const image = canvas.toDataURL("image/png", 1.0)
                return image
            })
            .then((image) => {
                saveAs(image, "player-card.png")
            })
    }

    const saveAs = (blob: any, fileName: string) => {
        var elem = window.document.createElement("a")
        elem.href = blob
        elem.download = fileName
        ;(document.body || document.documentElement).appendChild(elem)
        if (typeof elem.click === "function") {
            elem.click()
        } else {
            elem.target = "_blank"
            elem.click()
        }
        URL.revokeObjectURL(elem.href)
        elem.remove()
    }
    return (
        <ButtonContainer>
            <Button onClick={handleDownload}>Als PNG Speichern</Button>
        </ButtonContainer>
    )
}

export default imageExport
