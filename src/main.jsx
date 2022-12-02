import React from 'react';
import ReactDOM from 'react-dom/client';
import { GiftExpertApp } from './GiftExpertApp';
import './styles.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  // modo esticto solo es en desarrollo, no en produccion
  <React.StrictMode> 
    <GiftExpertApp />
  </React.StrictMode>
)
