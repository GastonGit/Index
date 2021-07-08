import React from "react";
import './App.css';
import { Fade } from '@material-ui/core';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {fade1: false, fade2: false};
    }

    componentDidMount() {

        setTimeout(function (){
            this.setState({fade1: true})
        }.bind(this), 200)

        setTimeout(function (){
            this.setState({fade2: true})
        }.bind(this), 600)
    }

    render() {
        return (
            <div className="App">
                <header className="Head">
                    <a href="https://github.com/GastonGit" className="Header-link" >
                        GastonGit
                    </a>
                </header>
                <div className="Projects">
                    <Fade in={this.state.fade1}>
                        <div className="Project">
                            <p className="Project-name">Hot Twitch Clips</p>
                            <p className="Project-description">Automatically clips exciting and funny moments from Twitch in real-time</p>
                            <i className="Project-progress">In the final stages of development</i>
                            <a className="Project-link" href="/hotclips">Live Example</a>
                            <a className="Project-link" href="https://github.com/GastonGit/Hot-Twitch-Clips">Github</a>
                        </div>
                    </Fade>
                    <Fade in={this.state.fade2}>
                        <div className="Project">
                            <p className="Project-name">HangulTrainer</p>
                            <p className="Project-description">A simple game for learning the korean alphabet <i>hangul</i>.</p>
                            <i className="Project-progress">In the early stages of development</i>
                            {/*<a className="Project-link" href="/">Live Example</a>*/}
                            <a className="Project-link" href="https://github.com/GastonGit/HangulTrainer">Github</a>
                        </div>
                    </Fade>
                </div>
            </div>
        );
    }
}