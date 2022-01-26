import React from 'react';
import '../styles/Projects.css';
import importedProjects from '../assets/projectData.json';
import Grid from '@mui/material/Grid';

export default function Projects(): JSX.Element {
    return (
        <Grid container spacing={1}>
            {importedProjects.map((project, index) => (
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
            ))}
        </Grid>
    );
}
