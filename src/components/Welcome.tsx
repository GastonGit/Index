import React from 'react';
import '../styles/Welcome.css';

export default class Welcome extends React.Component<unknown, unknown> {
    constructor(props: unknown) {
        super(props);
        this.state = {};
    }

    render(): JSX.Element {
        return <p className="welcome__title">Welcome to GastonGit!</p>;
    }
}
