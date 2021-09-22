import React from 'react';
import '../styles/Header.css';
import githubLogo from '../assets/GitHub-Mark-Light-120px-plus.png';

export default class Header extends React.Component<unknown, unknown> {
    render(): JSX.Element {
        return (
            <header className="Head">
                <div className="HeaderContent">
                    <div className="HeaderContentMain">
                        <a href="/" className="Header-link">
                            GastonGit
                        </a>
                        <a
                            href="https://github.com/GastonGit/"
                            className="HeaderItem"
                        >
                            <img src={githubLogo} alt="Github logo" />
                        </a>
                    </div>
                </div>
            </header>
        );
    }
}
