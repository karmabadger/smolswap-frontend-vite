import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from '@mui/material/InputAdornment';

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

    return (
        <Autocomplete
            sx={{ width: "100%" }}
            // size="small"
            multiple
            id="tags-filled"
            options={options.map((option) => option.title)}
            freeSolo
            renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                    <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                ))
            }
            renderInput={(params) => (
                <TextField {...params}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    label="Search Item"
                    placeholder="Enter an ID or search term..."
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
            )}
        />
    )
}


export default SearchBar;