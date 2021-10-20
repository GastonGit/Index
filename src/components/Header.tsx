import React from 'react';
import '../styles/Header.css';
import githubLogo from '../assets/GitHub-Mark-Light-120px-plus.png';

export default class Header extends React.Component<unknown, unknown> {
    render(): JSX.Element {
        return (
            <header className="header">
                <div className="header__content">
                    <div className="header__content__main">
                        <a href="/" className="header__link">
                            GastonGit
                        </a>
                        <a
                            href="https://github.com/GastonGit/"
                            className="header__item"
                        >
                            <img src={githubLogo} alt="Github logo" />
                        </a>
                    </div>
                </div>
            </header>
        );
    }
}
