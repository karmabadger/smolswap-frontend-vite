import { createContext } from 'react';

import { infuraId, providerOptions, web3Modal } from './../../../../api/web3Modal/web3Modalapi.js';

const WalletContext = createContext({
    web3Modal: web3Modal,
    signer: null,
    setSigner: (newSigner) => { },
});

export default WalletContext;