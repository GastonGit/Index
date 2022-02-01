import React from 'react';
import '../styles/App.css';
import { Grid } from '@mui/material';

export default function App(): JSX.Element {
    return (
        <div className="app">
            <Grid
                container
                className="app__content"
                rowSpacing={{ xs: 0, md: 3 }}
            >
                <Grid item xs={12} md={12}>
                    <p className="welcome__title">Welcome to GastonGit!</p>
                </Grid>
                <Grid item xs={12} md={12}>
                    <p className="description__text">
                        This website showcases my most current projects. Feel
                        free to check out the releases and live examples.
                    </p>
                </Grid>
            </Grid>
        </div>
    );
}
