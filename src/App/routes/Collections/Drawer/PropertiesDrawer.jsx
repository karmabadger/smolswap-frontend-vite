import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Collapse from '@mui/material/Collapse';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';




function PropertiesDrawer({ drawerWidth, drawerMinWidth }) {
    // const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        console.log("handleDrawerClose", open);
        setOpen(false);
    };

    const handleChange = (event) => {
        // setState({
        //     ...state,
        //     [event.target.name]: event.target.checked,
        // });
    };

    const sections = [
        1, 2, 3, 4, 5, 6
    ];

    return (
        <Box>
            <Collapse sx={{ m: "0px" }} orientation="horizontal" in={open} collapsedSize={drawerMinWidth}>
                <Box sx={{ m: 0, height: "100%" }}
                    elevation={4}>
                    <Box
                        sx={{ width: drawerWidth, height: '100%' }}>
                        {open ? (
                            <IconButton onClick={handleDrawerClose}>
                                <ChevronLeftIcon />
                            </IconButton>
                        ) : (
                            <IconButton onClick={handleDrawerOpen}>
                                <ChevronRightIcon />
                            </IconButton>
                        )}

                        {
                            open ? (
                                <Box>
                                    {sections.map(section => (
                                        <Accordion disableGutters elevation={0}
                                            key={section}>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                            >
                                                <Typography sx={{ flexShrink: 0 }}>
                                                    General settings
                                                </Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <FormControl sx={{ m: 0 }} component="fieldset" variant="standard">
                                                    <FormGroup>
                                                        <FormControlLabel
                                                            control={
                                                                <Checkbox checked={false} onChange={handleChange} name="gilad" />
                                                            }
                                                            label="Gilad Gray"
                                                        />
                                                        <FormControlLabel
                                                            control={
                                                                <Checkbox checked={false} onChange={handleChange} name="jason" />
                                                            }
                                                            label="Jason Killian"
                                                        />
                                                        <FormControlLabel
                                                            control={
                                                                <Checkbox
                                                                    checked={false}
                                                                    onChange={handleChange}
                                                                    name="antoine"
                                                                />
                                                            }
                                                            label="Antoine Llorca"
                                                        />
                                                    </FormGroup>
                                                </FormControl>
                                            </AccordionDetails>
                                        </Accordion>
                                    ))}
                                </Box>
                            ) : (
                                null)
                        }

                    </Box>
                </Box>
            </Collapse>
        </Box>

    );
}


export default PropertiesDrawer;