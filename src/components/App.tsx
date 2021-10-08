import React from 'react';
import '../styles/App.css';
import Projects from './Projects';
import Description from './Description';
import { Grid } from '@mui/material';

export default class App extends React.Component<unknown, unknown> {
    constructor(props: unknown) {
        super(props);
        this.state = {};
    }

    render(): JSX.Element {
        return (
            <div className="App">
                <Grid container className="AppContent" rowSpacing={0}>
                    <Grid item xs={4} md={4}>
                        <Description />
                    </Grid>
                    <Grid item className="FlexCenter" xs={8} md={8}>
                        <Projects />
                    </Grid>
                </Grid>
            </div>
        );
    }
}
