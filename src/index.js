import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {hotjar} from 'react-hotjar'

hotjar.initialize(3529714, 6)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

