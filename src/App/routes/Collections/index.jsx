
import { useTheme } from '@mui/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';

const Collections = (props) => {
    const theme = useTheme();
    const printTheme = () => {
        console.log(theme);
    }

    return (
        <Container>
            <Box sx={{ my: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: "48px" }}>
                {/* {[...new Array(120)]
                    .map(
                        () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                    )
                    .join('\n')} */}

                <Box sx={{ height: "56px", marginTop: "48px" }}>
                    <Typography variant="h3" align='center'>Smol Brains</Typography>
                </Box>

                <Box sx={{ backgroundColor: "yellow", width: "228px", height: "64px", display: 'flex', flexDirection: "row", gap: "48px" }}>


                    <Box sx={{ margin: "0px" }}>
                        <Typography variant="h6">
                            Floor price
                        </Typography>
                        <Typography variant="body1">
                            3,200 $MAGIC
                        </Typography>
                    </Box>
                    <Box sx={{ margin: "0px" }}>
                        <Typography variant="h6">
                            Floor price
                        </Typography>
                        <Typography variant="body1">
                            3,200 $MAGIC
                        </Typography>
                    </Box>

                </Box>
            </Box>
        </Container >
    )
}


export default Collections