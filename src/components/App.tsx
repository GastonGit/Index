import React from 'react';
import '../styles/App.css';
import Projects from './Projects';

export default class App extends React.Component<unknown, unknown> {
    constructor(props: unknown) {
        super(props);
        this.state = {};
    }

    render(): JSX.Element {
        return (
            <div className="App">
                <header className="Head">
                    <a
                        href="https://github.com/GastonGit"
                        className="Header-link"
                    >
                        GastonGit
                    </a>
                </header>
                <Projects />
            </div>
        );
    }
}
