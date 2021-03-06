import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { Fade } from '@mui/material';
import Header from './components/Header';
import App from './components/App';
import Lurk from './components/Lurk';
import Boilerplates from './components/Boilerplates';
import Projects from './components/Projects';

const fadeInDelay = 500;

ReactDOM.render(
    <React.StrictMode>
        <Header />
        <Fade
            in={true}
            timeout={fadeInDelay}
            easing={'cubic-bezier(0.25, 0.1, 0.25, 0.1)'}
        >
            <div id="main">
                <App />
            </div>
        </Fade>
        <Fade
            in={true}
            timeout={fadeInDelay}
            easing={'cubic-bezier(0.25, 0.1, 0.25, 0.1)'}
        >
            <div id="lurk-section" className="section">
                <Lurk />
            </div>
        </Fade>
        <Fade
            in={true}
            timeout={fadeInDelay}
            easing={'cubic-bezier(0.25, 0.1, 0.25, 0.1)'}
        >
            <div id="boilerplate-section" className="section">
                <Boilerplates />
            </div>
        </Fade>
        <Fade
            in={true}
            timeout={fadeInDelay}
            easing={'cubic-bezier(0.25, 0.1, 0.25, 0.1)'}
        >
            <div id="projects-section" className="section">
                <Projects />
            </div>
        </Fade>
    </React.StrictMode>,
    document.getElementById('root'),
);

reportWebVitals();
