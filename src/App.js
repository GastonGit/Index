import React from "react";
import './App.css';

function App() {
  return (
    <div className="App">
        <header className="Head">
            <a href="https://github.com/GastonGit" className="Header-link" >
                GastonGit
            </a>
        </header>
      <div className="Projects">
          <div className="Project">
              <p className="Project-name">Hot Twitch Clips</p>
              <p className="Project-description">Automatically clips exciting and funny moments from Twitch in real-time</p>
              <a className="Project-link" href="/hotclips">Live Example</a>
              <a className="Project-link" href="https://github.com/GastonGit/Hot-Twitch-Clips">Github</a>
          </div>
          <div className="Project">
              <p className="Project-name">HangulTrainer</p>
              <p className="Project-description">A simple game for learning the korean alphabet <i>hangul</i>.</p>
              {/*<a className="Project-link" href="/">Live Example</a>*/}
              <a className="Project-link" href="https://github.com/GastonGit/HangulTrainer">Github</a>
          </div>
      </div>
    </div>
  );
}

export default App;
