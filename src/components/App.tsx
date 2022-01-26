import React from 'react';
import Projects from './Projects';
import '../styles/App.css';
import { Fade, Grid } from '@mui/material';

export default function App(): JSX.Element {
    const welcomeFadeInDelay = 500;
    const descriptionFadeInDelay = 1500;
    const projectsFadeInDelay = 1500;

    return (
        <div className="app">
            <Grid
                container
                className="app__content"
                rowSpacing={{ xs: 0, md: 3 }}
            >
                <Grid item xs={12} md={12}>
                    <Fade
                        in={true}
                        timeout={welcomeFadeInDelay}
                        easing={'cubic-bezier(0.25, 0.1, 0.25, 0.1)'}
                    >
                        <p className="welcome__title">Welcome to GastonGit!</p>
                    </Fade>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Fade
                        in={true}
                        timeout={descriptionFadeInDelay}
                        easing={'cubic-bezier(0.25, 0.1, 0.25, 0.1)'}
                    >
                        <p className="description__text">
                            This website showcases my most current projects.
                            Feel free to check out the releases and live
                            examples.
                        </p>
                    </Fade>
                </Grid>
                <Grid item className="flex--center" xs={12} md={8}>
                    <Fade
                        in={true}
                        timeout={projectsFadeInDelay}
                        easing={'cubic-bezier(0.25, 0.1, 0.25, 0.1)'}
                    >
                        {/* WARNING: This div is required for Fade not to freak out */}
                        <div className="projects__fadein">
                            <Projects />
                        </div>
                    </Fade>
                </Grid>
            </Grid>
        </div>
    );
}
