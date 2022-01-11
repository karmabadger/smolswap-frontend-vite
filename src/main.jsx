import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css'
import App from './App'

import { BrowserRouter as Router } from "react-router-dom";

import { StyledEngineProvider } from '@mui/material/styles';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <StyledEngineProvider>
        <App />
      </StyledEngineProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
