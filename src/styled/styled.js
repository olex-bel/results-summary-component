import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import HankenGrotesk from '../assets/fonts/HankenGrotesk-VariableFont_wght.ttf'

let theme = createTheme({
    palette: {
        melrose: {
            main: '#C3BFFF',
        },
        cornflowerBlue: {
            main: '#7A6CFD',
        },
        reaction: {
            main: '#C66C6E',
            light: '#FFF6F5',
        },
        memory: {
            main: '#E9B758',
            light: '#FFFBF2',
        },
        verbal: {
            main: '#45AE90',
            light: '#F2FBFA',
        },
        visual: {
            main: '#202778',
            light: '#F3F3FD',
        },
        santasGray: {
            main: '#A2A5B4',
        }
    },
    typography: {
        fontFamily: 'HankenGrotesk, Arial, Roboto, sans-serif',
    },
    components: {
        MuiCssBaseline: {
          styleOverrides: `
            @font-face {
              font-family: 'HankenGrotesk';
              font-style: normal;
              font-display: swap;
              font-weight: 400 900;
              src: local('HankenGrotesk'), local('HankenGrotesk-VariableFont'), url(${HankenGrotesk}) format('truetype');
              unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
            }
          `,
        },
    },
});

theme = responsiveFontSizes(theme);

export default theme;
