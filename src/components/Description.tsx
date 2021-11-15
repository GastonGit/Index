import React from 'react';
import '../styles/Description.css';

export default class Description extends React.Component<unknown, unknown> {
    constructor(props: unknown) {
        super(props);
        this.state = {};
    }

    render(): JSX.Element {
        return (
            <p className="description__text">
                This website showcases my most current projects. Feel free to
                check out the releases and live examples.
            </p>
        );
    }
}
