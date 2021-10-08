import React from 'react';
import '../styles/App.css';
import Projects from './Projects';
import Description from './Description';

export default class App extends React.Component<unknown, unknown> {
    constructor(props: unknown) {
        super(props);
        this.state = {};
    }

    render(): JSX.Element {
        return (
            <div className="App">
                <div className="AppContent">
                    <Description />
                    <Projects />
                </div>
            </div>
        );
    }
}
