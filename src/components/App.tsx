import React from 'react';
import styles from '../styles/sApp';
import { withStyles } from '@material-ui/core';
import Boil from '../lib/Boil';

const boil = new Boil('rice');

interface AppProps {
    classes: {
        App: string;
        'App-header': string;
    };
}

class App extends React.Component<AppProps, unknown> {
    constructor(props: AppProps) {
        super(props);
        boil.boilFood();
    }

    render(): JSX.Element {
        const { classes } = this.props;
        const food = boil.getBoiledFood();

        return (
            <div className={classes.App}>
                <header className={classes['App-header']}>
                    <p>{food}</p>
                </header>
            </div>
        );
    }
}

export default withStyles(styles)(App);
