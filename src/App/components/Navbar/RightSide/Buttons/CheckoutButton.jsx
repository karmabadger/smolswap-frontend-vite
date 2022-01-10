
import IconButton from "@mui/material/IconButton";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";


const CheckoutButton = ({ connected }) => {
    return (
        <IconButton aria-label="shopping cart checkout" sx={{ p: "12px", mx: "5px"}}>
            <ShoppingCartCheckoutIcon />
        </IconButton>
    )
}

export default CheckoutButton;