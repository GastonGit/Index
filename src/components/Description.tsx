import React from 'react';
import '../styles/Description.css';
import FadeIn from 'react-fade-in';

export default class Description extends React.Component<unknown, unknown> {
    constructor(props: unknown) {
        super(props);
        this.state = {};
    }

    private fadeInDelay = 60;

    render(): JSX.Element {
        return (
            <FadeIn className="" delay={this.fadeInDelay}>
                <p>Welcome to GastonGit!</p>
            </FadeIn>
        );
    }
}
