import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

import { styled } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";

import Box from "@mui/material/Box";

import smol from "../../../../../../../__mock_data__/img/smol.png";

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;


export default function ImgMediaCard() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Card sx={{ maxWidth: 256 }}>
            <CardMedia
                component="img"
                alt="smol"
                // height="360"
                image={smol}
                onClick={handleOpen}
            />

            <StyledModal
                aria-labelledby="unstyled-modal-title"
                aria-describedby="unstyled-modal-description"
                open={open}
                onClose={handleClose}
                BackdropComponent={Backdrop}
            >
                <Box>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="360"
                        width="360"
                        image="/static/images/cards/smol.png"
                        onClick={handleOpen}
                    />

                    <h2 id="unstyled-modal-title">Smol Brain #4324</h2>
                    <Typography variant="body1" color="text.secondary">
                        Owned by: 0x0000000000000000000000000000000000
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        4314 $MAGIC
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        Properties:
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        background: gray (13.88% have this trait)
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        background: gray (13.88% have this trait)
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        background: gray (13.88% have this trait)
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        background: gray (13.88% have this trait)
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        background: gray (13.88% have this trait)
                    </Typography>

                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Add To Cart"
                            size="large"
                        />
                    </FormGroup>

                    <Button variant="contained">Buy Now</Button>
                    <Button variant="contained">Link</Button>
                </Box>
            </StyledModal>

            <CardContent
                style={{ paddingBottom: "21px" }}
                sx={{
                    px: "16px",
                    paddingBottom: "0px"
                }}
            >
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                        m: "0px"
                    }}
                >
                    Smol Brain # 243243
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    4314 $MAGIC
                </Typography>

                <Box
                    sx={{
                        height: "37px"
                    }}
                ></Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "18px",
                        paddingBottom: "0px"
                    }}
                >
                    <Button
                        size="small"
                        sx={{
                            p: "0px",
                            height: "22px"
                        }}
                    >
                        Buy Now
                    </Button>
                    <Button
                        size="small"
                        sx={{
                            p: "0px",
                            height: "22px"
                        }}
                    >
                        See details
                    </Button>
                    <IconButton
                        sx={{
                            py: "0px",
                            px: "0px",
                            marginLeft: "10px"
                        }}
                        aria-label="add-to-cart"
                    >
                        <AddShoppingCartIcon fontSize="inherit" color="primary" />
                    </IconButton>
                </Box>
            </CardContent>
        </Card>
    );
}
