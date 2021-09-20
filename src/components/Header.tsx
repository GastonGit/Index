import React from 'react';
import '../styles/App.css';

export default class Header extends React.Component<unknown, unknown> {
    render(): JSX.Element {
        return (
            <header className="Head">
                <div className="HeaderContent">
                    <a
                        href="https://github.com/GastonGit"
                        className="Header-link"
                    >
                        GastonGit
                    </a>
                </div>
            </header>
        );
    }
}
