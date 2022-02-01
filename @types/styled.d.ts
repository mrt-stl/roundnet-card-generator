import "styled-components"

declare module "styled-components" {
    export interface DefaultTheme {
        font: IFont
        color: Icolor
        fontSize: IFontSize
        fontWeight: IFontWeight
        spacing: ISpacing
        lineHeight: ILineHeight
    }
}

interface IFont {
    name?: string
    url?: string
}

interface Icolor {
    lionGold: string
    black: string
    anthracite: string
    white: string
}

interface IFontSize {
    xs: string
    s: string
    m: string
    l: string
    xl: string
    xxl: string
}

interface IFontWeight {
    light: string,
    regular: string,
    bold: string,
}

interface ISpacing {
    xs: string
    s: string
    m: string
    l: string
    xl: string
    xxl: string
}

interface ILineHeight {
        s: string
        m: string
        l: string
}