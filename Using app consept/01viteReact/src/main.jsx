
import { createRoot } from 'react-dom/client';
import React, { StrictMode } from 'react';
import App from './App.jsx'
import New from './new.jsx';
import './index.css'

const reactEl = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank",},
  "click to GOOGLE"
)




createRoot(document.getElementById('root')).render(
 
<StrictMode>   
  <New/> 
{reactEl}
  <App/>
</StrictMode>    
  
)

