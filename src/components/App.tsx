import React from 'react';
import '../styles/App.css';
import { Fade } from '@material-ui/core';

interface Project {
    name: string;
    desc: string;
    progress: string;
    liveUrl: string | null;
    github: string;
}

interface AppState {
    projects: Array<Project>;
    fade1: boolean;
    fade2: boolean;
}

export default class App extends React.Component<unknown, AppState> {
    constructor(props: unknown) {
        super(props);
        this.state = { projects: [], fade1: false, fade2: false };
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
        const projects = [
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
                            <p className="Project-name">{projects[0].name}</p>
                            <p className="Project-description">
                                {projects[0].desc}
                            </p>
                            <i className="Project-progress">
                                {projects[0].progress}
                            </i>
                            {projects[0].liveUrl !== null && (
                                <a
                                    className="Project-link"
                                    href={projects[0].liveUrl}
                                >
                                    Live Example
                                </a>
                            )}
                            <a
                                className="Project-link"
                                href={projects[0].github}
                            >
                                Github
                            </a>
                        </div>
                    </Fade>
                    <Fade in={this.state.fade2}>
                        <div className="Project">
                            <p className="Project-name">{projects[1].name}</p>
                            <p className="Project-description">
                                {projects[1].desc}
                            </p>
                            <i className="Project-progress">
                                {projects[1].progress}
                            </i>
                            {projects[1].liveUrl !== null && (
                                <a
                                    className="Project-link"
                                    href={projects[1].liveUrl}
                                >
                                    Live Example
                                </a>
                            )}
                            <a
                                className="Project-link"
                                href={projects[1].github}
                            >
                                Github
                            </a>
                        </div>
                    </Fade>
                </div>
            </div>
        );
    }
}
