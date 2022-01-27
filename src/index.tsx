import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Header from './components/Header';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { Fade } from '@mui/material';

const mainFadeinDelay = 500;

ReactDOM.render(
    <React.StrictMode>
        <Fade
            in={true}
            timeout={mainFadeinDelay}
            easing={'cubic-bezier(0.25, 0.1, 0.25, 0.1)'}
        >
            <div id="main">
                <Header />
                <App />
            </div>
        </Fade>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
