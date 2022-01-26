import React from 'react';
import Projects from './Projects';
import '../styles/App.css';
import Grid from '@mui/material/Grid';
import FadeIn from 'react-fade-in';

export default function App(): JSX.Element {
    const welcomeFadeInDelay = 60;
    const descriptionFadeInDelay = 250;
    const projectsFadeInDelay = 500;

    return (
        <div className="app">
            <Grid
                container
                className="app__content"
                rowSpacing={{ xs: 0, md: 3 }}
            >
                <Grid item xs={12} md={12}>
                    <FadeIn delay={welcomeFadeInDelay}>
                        <p className="welcome__title">Welcome to GastonGit!</p>;
                    </FadeIn>
                </Grid>
                <Grid item xs={12} md={4}>
                    <FadeIn delay={descriptionFadeInDelay}>
                        <p className="description__text">
                            This website showcases my most current projects.
                            Feel free to check out the releases and live
                            examples.
                        </p>
                    </FadeIn>
                </Grid>
                <Grid item className="flex--center" xs={12} md={8}>
                    <FadeIn
                        className="projects__fadein"
                        delay={projectsFadeInDelay}
                    >
                        <Projects />
                    </FadeIn>
                </Grid>
            </Grid>
        </div>
    );
}
