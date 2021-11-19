import React from 'react';
import '../styles/Welcome.css';

export default class Welcome extends React.Component<unknown, unknown> {
    render(): JSX.Element {
        return <p className="welcome__title">Welcome to GastonGit!</p>;
    }
}
