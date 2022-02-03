import React from 'react';
import '../styles/Lurk.css';
import Grid from '@mui/material/Grid';
import reactImage from '../assets/boilerplate1.png';
import nodeImage from '../assets/boilerplate2.png';
import { Link, Typography } from '@mui/material';

export default function Boilerplates(): JSX.Element {
    return (
        <Grid
            container
            justifyContent="center"
            sx={{ textAlign: 'center' }}
            rowSpacing={{ xs: 5, md: 5 }}
            columnSpacing={{ xs: 5, md: 5 }}
        >
            <Grid item container xs={12} md={6} spacing={6}>
                <Grid item xs={12} md={12}>
                    <Link
                        href="https://github.com/GastonGit/react-typescript-boilerplate"
                        variant="h3"
                        underline="none"
                        color="#b3243f"
                    >
                        react-typescript-boilerplate
                    </Link>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Typography
                        variant="h4"
                        color="#F2F4F3"
                        sx={{ paddingLeft: 2, paddingRight: 2 }}
                    >
                        No better way to start a project...
                    </Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                    <img src={reactImage} className="lurk__image" />
                </Grid>
            </Grid>
            <Grid item container xs={12} md={6} spacing={6}>
                <Grid item xs={12} md={12}>
                    <Link
                        href="https://github.com/GastonGit/node-typescript-boilerplate"
                        variant="h3"
                        underline="none"
                        color="#b3243f"
                    >
                        node-typescript-boilerplate
                    </Link>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Typography
                        variant="h4"
                        color="#F2F4F3"
                        sx={{ paddingLeft: 2, paddingRight: 2 }}
                    >
                        Make things easy for once...
                    </Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                    <img src={nodeImage} className="lurk__image" />
                </Grid>
            </Grid>
        </Grid>
    );
}
