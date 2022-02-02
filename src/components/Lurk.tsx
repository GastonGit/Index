import React from 'react';
import '../styles/Lurk.css';
import Grid from '@mui/material/Grid';
import rollImage from '../assets/lurkRoll.png';
import { Link, Typography } from '@mui/material';

export default function Projects(): JSX.Element {
    return (
        <Grid
            container
            justifyContent="center"
            sx={{ textAlign: 'center' }}
            rowSpacing={{ xs: 5, md: 0 }}
        >
            <Grid
                container
                item
                xs={12}
                md={6}
                alignItems="flex-start"
                rowSpacing={{ xs: 3, md: 0 }}
            >
                <Grid item xs={12} md={12}>
                    <Link
                        href="/lurk"
                        variant="h2"
                        underline="none"
                        color="#b3243f"
                    >
                        Lurk
                    </Link>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Typography
                        variant="h4"
                        color="#F2F4F3"
                        sx={{ paddingLeft: 2, paddingRight: 2 }}
                    >
                        Automatically clips exciting and funny moments from
                        Twitch in real-time.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Link
                        href="https://github.com/GastonGit/Lurk.Client"
                        variant="h6"
                        underline="none"
                        color="#b3243f"
                    >
                        GitHub
                    </Link>
                </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
                <img src={rollImage} className="lurk__image" />
            </Grid>
        </Grid>
    );
}
