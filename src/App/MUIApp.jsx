import { useState, useContext } from 'react'
import logo from './logo.svg'
import './App.css'

import { handleConnect } from '../utils/wallet/web3wallet'

import WalletContext from './components/context/WalletContext/WalletContext'
import CartContext from './components/context/CartContext/CartContext'

import { Routes, Route, Link } from "react-router-dom";
import Collections from './routes/Collections'

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
            {/* <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    <button type="button" onClick={handleConnectWallet}>
                        connect
                    </button>
                </p>
                <button type="button" onClick={printSigner}>
                    info
                </button>

            </header> */}

            <Switch>
                <Route path="/">
                    
                </Route>
                <Route path="/collections">
                    <Collections />
                </Route>
            </Switch>
        </div>
    )
}

export default MUIApp
