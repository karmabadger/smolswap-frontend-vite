
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
import Divider from '@mui/material/Divider';


import SortSelect from './SortBar/SortSelect';
import SearchBar from './SearchBar/SearchBar';

const Collections = (props) => {
    const theme = useTheme();
    const printTheme = () => {
        console.log(theme);
    }

    return (
        <Box id="collections-main-page" sx={{ padding: "0px", mx: "24px" }}>
            <Box id="collection-top-box" sx={{ my: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: "48px" }} >

                <Box id="collection-name-info-box" sx={{ height: "56px", marginTop: "48px" }}>
                    <Typography variant="h3" align='center'>Smol Brains</Typography>
                </Box>

                <Box id="collection-info-box" sx={{ height: "64px", display: 'flex', flexDirection: "row", marginBottom: "32px", gap: "30px" }}>
                    <Box id="collection-floor-price-box" sx={{ margin: "0px", flexGrow: "1", display: 'flex', flexDirection: "column", gap: "8px" }}>
                        <Typography variant="h6" color={theme.palette.secondary.dark}>
                            Floor price
                        </Typography>
                        <Typography variant="body1" color={theme.palette.text.secondary}>
                            3 200 200 $MAGIC
                        </Typography>
                    </Box>
                    <Box id="collection-listings-box" sx={{ margin: "0px", flexGrow: "1", display: 'flex', flexDirection: "column", gap: "8px" }}>
                        <Typography variant="h6" color={theme.palette.secondary.dark}>
                            Listings
                        </Typography>
                        <Typography variant="body1" color={theme.palette.text.secondary}>
                            1040000 Listed
                        </Typography>
                    </Box>
                </Box>

            </Box>
            <Divider ></Divider>

            <Box id="collection-main-box" sx={{ marginTop: "32px", mx: "0px", display: "flex", flexDirection: "row" }}>
                <Box id="collection-main-left-box" sx={{ backgroundColor: "red", width: "100px", minWidth: "50px" }}>
                    <Box sx={{ height: "56px" }}>

                    </Box>
                    <Box sx={{ backgroundColor: "green", height: "543px" }}>

                    </Box>
                </Box>
                <Box id="collection-main-right-box" sx={{ flexGrow: "1", marginLeft: "40px", }}>
                    <Box id="collection-grid-top-box" sx={{ display: "flex", flexDirection: "row", gap: "24px" }}>
                        <Box id="collection-search-box" sx={{ minWidth: "200px", flexGrow: "4" }}>
                            <SearchBar />
                        </Box>
                        <Box id="collection-sort-box" sx={{ width: "220px", minWidth: "100px", flexGrow: "1" }}>
                            <SortSelect />
                        </Box>
                    </Box>
                    <Box id="collection-grid-main-box">

                    </Box>
                </Box>
            </Box>
        </Box >
    )
}


export default Collections