import React from 'react';
import '../styles/Projects.css';
import projects from '../assets/projectData.json';
import Grid from '@mui/material/Grid';

interface AppState {
    projects: Array<JSX.Element>;
}

export default class Projects extends React.Component<unknown, AppState> {
    constructor(props: unknown) {
        super(props);
        this.state = { projects: [] };
        this.getProjects = this.getProjects.bind(this);
    }

    componentDidMount(): void {
        this.getProjects();
    }

    getProjects(): void {
        this.setState({
            projects: projects.map((project, index) => (
                <Grid item xs={12} md={6} key={'project-' + index}>
                    <div className="project">
                        <p className="project__name">{project.name}</p>
                        <p className="project__description">{project.desc}</p>
                        <div className="project__links">
                            {project.liveUrl !== null && (
                                <a
                                    className="project__link"
                                    href={project.liveUrl}
                                >
                                    Releases
                                </a>
                            )}
                            <a className="project__link" href={project.github}>
                                Github
                            </a>
                        </div>
                    </div>
                </Grid>
            )),
        });
    }

    render(): JSX.Element {
        const { projects } = this.state;

        return (
            <Grid container spacing={1}>
                {projects}
            </Grid>
        );
    }
}
