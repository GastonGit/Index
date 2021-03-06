import React from 'react';
import {
    AppBar,
    Box,
    Button,
    Container,
    IconButton,
    Link,
    Menu,
    MenuItem,
    Toolbar,
    Fade,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const pages = [
    { name: 'Lurk', href: '/lurk' },
    { name: 'GitHub', href: 'https://github.com/GastonGit' },
];

export default function Header(): JSX.Element {
    const fadeInDelay = 500;

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null,
    );

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar
            sx={{
                position: {
                    md: 'sticky',
                    xs: 'static',
                },
                top: 0,
            }}
            style={{
                background: '#272727',
                boxShadow: 'none',
            }}
        >
            <Fade
                in={true}
                timeout={fadeInDelay}
                easing={'cubic-bezier(0.25, 0.1, 0.25, 0.1)'}
            >
                <Container maxWidth="md">
                    <Toolbar
                        disableGutters
                        sx={{
                            display: {
                                height: '69px',
                            },
                        }}
                    >
                        <Link
                            href="/"
                            variant="h6"
                            underline="none"
                            color="white"
                            sx={{
                                flexGrow: 1,
                                display: {
                                    md: 'flex',
                                    xs: 'flex',
                                    height: '60%',
                                    width: '150px',
                                },
                            }}
                        >
                            GastonGit
                        </Link>

                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'none', md: 'flex' },
                                justifyContent: 'flex-end',
                            }}
                        >
                            {pages.map((page) => (
                                <Button
                                    key={page.name}
                                    onClick={handleCloseNavMenu}
                                    href={page.href}
                                    sx={{
                                        my: 2,
                                        color: 'white',
                                        display: 'block',
                                    }}
                                >
                                    {page.name}
                                </Button>
                            ))}
                        </Box>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'flex', md: 'none' },
                                justifyContent: 'flex-end',
                            }}
                        >
                            <IconButton
                                size="large"
                                aria-label="url list"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem
                                        key={page.name}
                                        onClick={handleCloseNavMenu}
                                    >
                                        <Link
                                            textAlign="center"
                                            color="inherit"
                                            href={page.href}
                                            underline="none"
                                        >
                                            {page.name}
                                        </Link>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </Fade>
        </AppBar>
    );
}
