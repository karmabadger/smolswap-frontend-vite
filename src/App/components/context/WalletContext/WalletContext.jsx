import { createContext } from 'react';

const WalletContext = createContext({
    web3Modal: null, 
    signer: null, 
    setSigner: (newSigner) => {},
});

export default WalletContext;