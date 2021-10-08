import React from 'react';
import '../styles/App.css';
import Projects from './Projects';
import Description from './Description';
import { Grid } from '@mui/material';
import Welcome from './Welcome';

export default class App extends React.Component<unknown, unknown> {
    constructor(props: unknown) {
        super(props);
        this.state = {};
    }

    render(): JSX.Element {
        return (
            <div className="App">
                <Grid
                    container
                    className="AppContent"
                    rowSpacing={{ xs: 0, md: 3 }}
                >
                    <Grid item xs={12} md={12}>
                        <Welcome />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Description />
                    </Grid>
                    <Grid item className="FlexCenter" xs={12} md={8}>
                        <Projects />
                    </Grid>
                </Grid>
            </div>
        );
    }
}
