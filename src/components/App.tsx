import React from 'react';
import Description from './Description';
import Projects from './Projects';
import '../styles/App.css';
import Grid from '@mui/material/Grid';
import FadeIn from 'react-fade-in';

export default class App extends React.Component<unknown, unknown> {
    private welcomeFadeInDelay = 60;
    private descriptionFadeInDelay = 250;
    private projectsFadeInDelay = 500;

    render(): JSX.Element {
        return (
            <div className="app">
                <Grid
                    container
                    className="app__content"
                    rowSpacing={{ xs: 0, md: 3 }}
                >
                    <Grid item xs={12} md={12}>
                        <FadeIn delay={this.welcomeFadeInDelay}>
                            <p className="welcome__title">
                                Welcome to GastonGit!
                            </p>
                            ;
                        </FadeIn>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <FadeIn delay={this.descriptionFadeInDelay}>
                            <Description />
                        </FadeIn>
                    </Grid>
                    <Grid item className="flex--center" xs={12} md={8}>
                        <FadeIn
                            className="projects__fadein"
                            delay={this.projectsFadeInDelay}
                        >
                            <Projects />
                        </FadeIn>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
