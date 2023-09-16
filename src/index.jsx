
import React from 'react';
import { createRoot } from 'react-dom';
import App from './components/App';
import './styles/style.css'
// import './styles/style.css'; // Import stylesheet

const root = createRoot(document.getElementById('root'));
root.render(<App />);
