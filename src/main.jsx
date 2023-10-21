import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx"
import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>      
    {/* <BrowserRouter> */}
    {/* <Home /> */}
    <App />
    {/* </BrowserRouter> */}
    </HashRouter>
  </React.StrictMode>,
)
