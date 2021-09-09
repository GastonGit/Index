import React from 'react';
import '../styles/App.css';
import FadeIn from 'react-fade-in';

interface AppState {
    projects: Array<JSX.Element>;
}

export default class App extends React.Component<unknown, AppState> {
    constructor(props: unknown) {
        super(props);
        this.state = { projects: [] };
        this.getProjects = this.getProjects.bind(this);
    }

    componentDidMount(): void {
        this.getProjects();
    }

    getProjects(): void {
        // TODO: this should be fetched from a database
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

        this.setState({
            projects: projects.map((project, index) => (
                <div className="Project" key={'project-' + index}>
                    <p className="Project-name">{project.name}</p>
                    <p className="Project-description">{project.desc}</p>
                    <i className="Project-progress">{project.progress}</i>
                    {project.liveUrl !== null && (
                        <a className="Project-link" href={project.liveUrl}>
                            Live Example
                        </a>
                    )}
                    <a className="Project-link" href={project.github}>
                        Github
                    </a>
                </div>
            )),
        });
    }

    render(): JSX.Element {
        const { projects } = this.state;

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
                    <FadeIn delay={300}>{projects}</FadeIn>
                </div>
            </div>
        );
    }
}
