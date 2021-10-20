import React from 'react';
import '../styles/Welcome.css';
import FadeIn from 'react-fade-in';

export default class Welcome extends React.Component<unknown, unknown> {
    constructor(props: unknown) {
        super(props);
        this.state = {};
    }

    private fadeInDelay = 60;

    render(): JSX.Element {
        return (
            <FadeIn className="welcome__title" delay={this.fadeInDelay}>
                <p>Welcome to GastonGit!</p>
            </FadeIn>
        );
    }
}
