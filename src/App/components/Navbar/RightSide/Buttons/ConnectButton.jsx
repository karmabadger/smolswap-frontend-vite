import Button from '@mui/material/Button';

const ConnectButton = ({ connected }) => {
    return (
        <Button color="secondary" variant="contained"
            sx={{ px: "8px", py: "11px", width: "113px", height: "42px", mx: "5px", my: "0px" }}
        >
            Connect
        </Button>
    )
}

export default ConnectButton;