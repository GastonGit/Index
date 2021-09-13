import React from 'react';
import '../styles/App.css';
import FadeIn from 'react-fade-in';
import projects from '../projectData.json';

interface AppState {
    projects: Array<JSX.Element>;
}

export default class App extends React.Component<unknown, AppState> {
    constructor(props: unknown) {
        super(props);
        this.state = { projects: [] };
        this.getProjects = this.getProjects.bind(this);
    }

    private fadeInDelay = 300;

    componentDidMount(): void {
        this.getProjects();
    }

    getProjects(): void {
        this.setState({
            projects: projects.map((project, index) => (
                <div className="Project" key={'project-' + index}>
                    <p className="Project-name">{project.name}</p>
                    <p className="Project-description">{project.desc}</p>
                    <i className="Project-progress">{project.progress}</i>
                    {project.liveUrl !== null && (
                        <a className="Project-link" href={project.liveUrl}>
                            Releases
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
                    <FadeIn delay={this.fadeInDelay}>{projects}</FadeIn>
                </div>
            </div>
        );
    }
}
