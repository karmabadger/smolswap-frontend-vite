import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#651FFF',
            contrastText: '#fff',
        },
        secondary: {
            main: '#EF6C00',
            contrastText: '#fff',
        },
        text: { hint: 'rgba(0, 0, 0, 0.38)' }
    },
    typography: {
        h3: {
            fontSize: "48px"
        }
    },
});

export default theme;