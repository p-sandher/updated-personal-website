import React from 'react';
// import ReactDom, { createRoot } from 'react-dom/client';
import App from './App';
import { render, createRoot } from 'react-dom';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />)


// ReactDom.createRoot(document.getElementById('root')).render(<App />);
