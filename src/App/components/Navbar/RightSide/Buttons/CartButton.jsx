
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";


const CartButton = ({ connected }) => {
    return (
        <IconButton
            disabled={!connected}
            color="secondary"
            aria-label="shopping cart checkout" sx={{ p: "12px", mx: "5px" }}>
            <ShoppingCartIcon />
        </IconButton>
    )
}

export default CartButton;