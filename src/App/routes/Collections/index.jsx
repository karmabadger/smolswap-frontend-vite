
import { useState } from 'react';

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
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Collapse from '@mui/material/Collapse';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';

import TopBox from './TopBox/TopBox';
import SortSelect from './SortBar/SortSelect';
import SizeSelect from './SizeSelect/SizeSelect';
import SearchBar from './SearchBar/SearchBar';
import CardGrid from './CardGrid/CardGrid';
import PropertiesDrawer from './Drawer/PropertiesDrawer';


const drawerWidth = 296;

const Collections = (props) => {
    const theme = useTheme();
    const printTheme = () => {
        console.log(theme);
    }

    // const [open, setOpen] = useState(false);

    // const handleDrawerOpen = () => {
    //     setOpen(true);
    // };

    // const handleDrawerClose = () => {
    //     console.log("handleDrawerClose", open);
    //     setOpen(false);
    // };

    return (
        <Box id="collections-main-page" sx={{ padding: "0px", mx: "24px" }}>

            <TopBox />
            <Divider ></Divider>

            <Box id="collection-main-box" sx={{ marginTop: "32px", mx: "0px", display: "flex", flexDirection: "row" }}>

                <PropertiesDrawer />
                <Box id="collection-main-right-box" sx={{ flexGrow: "1", marginLeft: "40px", }}>
                    <Box id="collection-grid-top-box" sx={{ display: "flex", flexDirection: "row", gap: "24px" }}>
                        <Box id="collection-search-box" sx={{ minWidth: "200px", flexGrow: "4" }}>
                            <SearchBar />
                        </Box>
                        <Box id="collection-sort-box" sx={{ width: "220px", minWidth: "100px", flexGrow: "1" }}>
                            <SortSelect />
                        </Box>
                        <Box id="collection-size-box" sx={{ width: "70px", minWidth: "50px", flexGrow: "0" }}>
                            <SizeSelect />
                        </Box>
                    </Box>
                    <Box id="grid-info" sx={{ my: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
                        <Box id="results-text">
                            <Typography variant="body2" color={theme.palette.text.secondary}>
                                1234 results
                            </Typography>
                        </Box>
                        <Box id="search-chips-box" sx={{ display: "flex", flexDirection: "row", gap: "8px" }}>
                            <Chip label="Deletable" color="secondary" onDelete={() => { console.info('You clicked the delete icon.'); }} />
                            <Chip label="Deletable" color="secondary" onDelete={() => { console.info('You clicked the delete icon.'); }} />
                            <Chip label="Deletable" color="secondary" onDelete={() => { console.info('You clicked the delete icon.'); }} />
                        </Box>
                    </Box>
                    <Box id="collection-grid-main-box">
                        <CardGrid />
                    </Box>
                </Box>
            </Box>
        </Box >
    )
}


export default Collections