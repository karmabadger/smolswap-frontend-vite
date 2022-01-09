import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import { ethers } from "ethers";
import Web3Modal from "web3modal";
import WalletLink from "walletlink";
import Fortmatic from 'fortmatic';
// import WalletConnectProvider from "@walletconnect/web3-provider";

const infuraId = "9aa3d95b3bc440fa88ea12eaa4456161";
const providerOptions = {
  /* See Provider Options Section */
  // walletconnect: {
  //   package: WalletConnectProvider,
  //   options: {
  //     // Mikko's test key - don't copy as your mileage may vary
  //     infuraId: "8043bb2cf99347b1bfadfb233c5325c0",
  //   }
  // },
  walletlink: {
    package: WalletLink, // Required
    options: {
      appName: "My Awesome App", // Required
      infuraId: "INFURA_ID", // Required unless you provide a JSON RPC url; see `rpc` below
      rpc: "", // Optional if `infuraId` is provided; otherwise it's required
      chainId: 1, // Optional. It defaults to 1 if not provided
      appLogoUrl: null, // Optional. Application logo image URL. favicon is used if unspecified
      darkMode: false // Optional. Use dark theme, defaults to false
    }
  },
  fortmatic: {
    package: Fortmatic,
    options: {
      // Mikko's TESTNET api key
      key: "pk_test_391E26A3B43A3350"
    }
  }
};

const web3Modal = new Web3Modal({
  network: "mainnet", // optional
  cacheProvider: true, // optional
  providerOptions // required
});

const handleConnect = async () => {
  const instance = await web3Modal.connect();

  const provider = new ethers.providers.Web3Provider(instance);
  const signer = provider.getSigner();

  console.log(signer);
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={handleConnect}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
