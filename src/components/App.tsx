import React from 'react';
import Description from './Description';
import Projects from './Projects';
import Welcome from './Welcome';
import '../styles/App.css';
import Grid from '@mui/material/Grid';

export default class App extends React.Component<unknown, unknown> {
    constructor(props: unknown) {
        super(props);
        this.state = {};
    }

    render(): JSX.Element {
        return (
            <div className="app">
                <Grid
                    container
                    className="app__content"
                    rowSpacing={{ xs: 0, md: 3 }}
                >
                    <Grid item xs={12} md={12}>
                        <Welcome />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Description />
                    </Grid>
                    <Grid item className="flex--center" xs={12} md={8}>
                        <Projects />
                    </Grid>
                </Grid>
            </div>
        );
    }
}
