import React from 'react';
import '../styles/App.css';
import { Fade } from '@material-ui/core';

interface AppState {
    fade1: boolean;
    fade2: boolean;
}

export default class App extends React.Component<unknown, AppState> {
    constructor(props: unknown) {
        super(props);
        this.state = { fade1: false, fade2: false };
    }

    componentDidMount(): void {
        setTimeout(() => {
            this.setState({ fade1: true });
        }, 200);

        setTimeout(() => {
            this.setState({ fade2: true });
        }, 600);
    }

    render(): JSX.Element {
        const data = [
            {
                name: 'Hot Twitch Clips',
                desc: 'Automatically clips exciting and funny moments from Twitch in real-time',
                progress: 'In the final stages of development',
                liveUrl: '/hotclips',
                github: 'https://github.com/GastonGit/Hot-Twitch-Clips',
            },
            {
                name: 'HangulTrainer',
                desc: 'A simple game for learning the korean alphabet hangul.',
                progress: 'In development',
                liveUrl: null,
                github: 'https://github.com/GastonGit/HangulTrainer',
            },
        ];

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
                <div className="Projects">
                    <Fade in={this.state.fade1}>
                        <div className="Project">
                            <p className="Project-name">{data[0].name}</p>
                            <p className="Project-description">
                                {data[0].desc}
                            </p>
                            <i className="Project-progress">
                                {data[0].progress}
                            </i>
                            {data[0].liveUrl !== null && (
                                <a
                                    className="Project-link"
                                    href={data[0].liveUrl}
                                >
                                    Live Example
                                </a>
                            )}
                            <a className="Project-link" href={data[0].github}>
                                Github
                            </a>
                        </div>
                    </Fade>
                    <Fade in={this.state.fade2}>
                        <div className="Project">
                            <p className="Project-name">{data[1].name}</p>
                            <p className="Project-description">
                                {data[1].desc}
                            </p>
                            <i className="Project-progress">
                                {data[1].progress}
                            </i>
                            {data[1].liveUrl !== null && (
                                <a
                                    className="Project-link"
                                    href={data[1].liveUrl}
                                >
                                    Live Example
                                </a>
                            )}
                            <a className="Project-link" href={data[1].github}>
                                Github
                            </a>
                        </div>
                    </Fade>
                </div>
            </div>
        );
    }
}
