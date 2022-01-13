import { useState } from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

import { VariableSizeList } from 'react-window';

const getItemSize = (index) => {
    return 46;
};
function renderRow(props) {
    const { index, style } = props;

    return (
        <ListItem style={style} key={index} component="div" disablePadding>
            <ListItemButton>
                <ListItemText primary={`Item ${index + 1}`} />
            </ListItemButton>
        </ListItem>
    );
}

function VirtualizedList() {
    return (
        <Box
            style={{ margin: '0px' }}
            sx={{
                margin: '0px',
                width: '100%',
                height: 400,
                bgcolor: 'background.paper',
            }}
        >
            <VariableSizeList
                height={400}
                width="100%"
                itemSize={getItemSize}
                itemCount={200}
            // overscanCount={5}
            >
                {renderRow}
            </VariableSizeList>
        </Box>
    );
}

const SearchBar = () => {
    const options = [
        { title: 'The Shawshank Redemption', year: 1994 },
        { title: 'The Godfather', year: 1972 },
        { title: 'The Godfather: Part II', year: 1974 },
        { title: 'The Dark Knight', year: 2008 },
        { title: '12 Angry Men', year: 1957 },
        { title: "Schindler's List", year: 1993 },
        { title: 'Pulp Fiction', year: 1994 },
    ];

    const [open, setOpen] = useState(false);

    const handleOnClick = () => {
        setOpen(true);
    };
    const handleClickAway = () => {
        console.log('closing..');
        setOpen(false);
    };


    return (
        <Box
            sx={{
                m: "0px",
                width: '100%',
            }}
        >
            <ClickAwayListener
                onClickAway={handleClickAway}
            >
                <Box
                    component="form"
                    sx={{
                        width: '100%',
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        sx={{ margin: '0px', width: '100%' }}
                        id="search-item"
                        label="Search Item"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                        onClick={handleOnClick}
                        placeholder="Enter an ID or search term..."
                    />
                    {open ? <VirtualizedList /> : null}
                </Box>
            </ClickAwayListener>
        </Box>
    )
}


export default SearchBar;