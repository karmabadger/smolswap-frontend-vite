import { styled, useTheme, alpha } from "@mui/material/styles";
import Button from '@mui/material/Button';

// const AppBar = styled(MuiAppBar, {})({

// })


const ConnectButton = ({ connected }) => {
    return (
        <Button variant="contained" sx={{px: "8px", py: "11px", width: "113px", height: "42px", mx: "5px"}} >Connect</Button>
    )
}

export default ConnectButton;