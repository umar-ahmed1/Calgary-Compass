import { createTheme } from '@mui/material/styles'

declare module "@mui/material/styles" {
    interface Palette {
        primaryRed: string;
        primaryRedAccent: string;
        secondaryBlue: string;
        secondaryBlueAccent: string;
        extraWhite: string
    }
    interface PaletteOptions {
        primaryRed: string;
        primaryRedAccent: string;
        secondaryBlue: string;
        secondaryBlueAccent: string;
        extraWhite: string
    }
}

const theme = createTheme({
    palette: {
        primary: {
            main: "#D80032",
    },
        secondary: {
            main: "#2B2D42",
    },
        error: {
            main: "#FF233C",
    },
        primaryRed: "#D80032",
        primaryRedAccent: "#Ef233C",
        secondaryBlue: "#2B2D42",
        secondaryBlueAccent: "#8D99AE",
        extraWhite: "#EDF2F4"
    },
    typography: {
        fontFamily: "Inter, sans-serif",
        fontSize: 14,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                contained: {
                    borderRadius: "25px",
                },
             },
        },
    },
})

export default theme