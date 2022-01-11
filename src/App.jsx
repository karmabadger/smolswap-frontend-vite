import { useState } from 'react'

import { ThemeProvider } from '@mui/material/styles';
import theme from './App/mui/theme/theme';

import MUIApp from './App/MUIApp'

import { web3Modal } from './utils/wallet/web3wallet.js';

import WalletContextProvider from './App/components/context/WalletContext/WalletContextProvider';

import CartContextProvider from './App/components/context/CartContext/CartContextProvider';

function App() {
    const [signer, setSigner] = useState(null);

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <WalletContextProvider web3Modal={web3Modal} signer={signer} setSigner={setSigner}
                    childrenEl={
                        <CartContextProvider childrenEl={
                            <MUIApp inputTheme={theme} />
                        } />
                    } />
            </div>
        </ThemeProvider>
    )
}

export default App
