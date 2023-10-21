import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <BrowserRouter basename="./dist"> */}
    <BrowserRouter>
    {/* <Home /> */}
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
