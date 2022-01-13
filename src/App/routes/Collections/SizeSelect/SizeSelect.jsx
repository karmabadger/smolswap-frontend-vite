import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



export function SizeSelect() {
    const sortOptions = [
        "S",
        "M",
        "L",
    ];
    const [sortOption, setSortOption] = React.useState(sortOptions[0]);

    const handleChange = (event) => {
        setSortOption(event.target.value);
    };


    return (
        <Box sx={{ width: "100%" }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Size</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={sortOption}
                    label="Size"
                    onChange={handleChange}
                // size="small"
                >

                    {sortOptions.map((option, index) => {
                        return (
                            <MenuItem key={index} value={option}>{option}</MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
        </Box>
    );
}

export default SizeSelect;