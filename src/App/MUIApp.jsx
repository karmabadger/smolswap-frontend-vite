import { useContext } from 'react'

import { ThemeProvider } from '@mui/styles';
import { createTheme } from '@mui/material/styles';

import { handleConnect } from '../utils/wallet/web3wallet'

import WalletContext from './components/context/WalletContext/WalletContext'
import CartContext from './components/context/CartContext/CartContext'

import { Routes, Route, Link, Navigate } from "react-router-dom";
import Collections from './routes/Collections'
import Checkout from './routes/Checkout'

import Navbar from './components/Navbar/Navbar'

// const theme = createTheme();
const theme = createTheme({
    palette: { text: { hint: 'rgba(0, 0, 0, 0.38)' } }
});

function MUIApp() {

    const { web3Modal, signer, setSigner } = useContext(WalletContext);

    const cartContextObj = useContext(CartContext);

    const handleConnectWallet = async () => {
        const newSigner = await handleConnect();
        setSigner(newSigner);
    }

    const printSigner = () => {
        console.log(signer);
        console.log(cartContextObj);
    }

    return (
        <div className="MUIApp">
            <ThemeProvider theme={theme}>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Navigate to="/collection/smolbrains" replace />} />
                    <Route path="/collection"  >
                        <Route path=":collectionName" element={<Collections />} />
                    </Route>
                    <Route path="/checkout" element={<Checkout />} />
                </Routes>
            </ThemeProvider>
        </div>
    )
}

export default MUIApp
