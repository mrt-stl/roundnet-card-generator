import { DefaultTheme } from "styled-components"

export const theme: DefaultTheme = {
    font: {
        name: "Open Sans",
        url: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600&display=swap",
    },
    color: {
        lionGold: "#CDAB54",
        black: "#143646",
        anthracite: "#475F62",
        white: "#FFFFFF",
    },
    fontSize: {
        xs: "0.75rem",
        s: "0.875rem",
        m: "1rem",
        l: "1.125rem", // chrome default h3 font size
        xl: "1.75rem", // h3 global
        xxl: "2rem",
    },
    fontWeight: {
        light: "300",
        regular: "400",
        bold: "700",
    },
    spacing: {
        xs: "10px",
        s: "20px",
        m: "40px",
        l: "60px",
        xl: "80px",
        xxl: "120px",
    },
    lineHeight: {
        s: "1.25",
        m: "1.5",
        l: "1.75",
    },
}
