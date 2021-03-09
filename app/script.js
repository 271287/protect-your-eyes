import React from 'react';
import { render } from 'react-dom';
import AppDescription from '../app/components/AppDescription';

class App extends React.Component {

  state = {
    status: 'off',
    time: '5',
    timer: null,
  }

  formatTime = time => {

    const sec = Math.floor(seconds % 60).toString();
    const min = Math.floor((seconds / 60) % 60).toString();

    return min.padStart(2, '0') + ':' + sec.padStart(2, '0');

  }

  step = () => { };

  startTimer = () => {

    this.setState({
      timer: setInterval(this.step, 1000),
    });

  };

  render() {
    const { status, time } = this.state;

    return (
      <div>
        <h1>Protect your eyes</h1>
        {(status === 'off') && <AppDescription />}
        {(status === 'work') && <img src="./images/work.png" />}
        {(status === 'rest') && <img src="./images/rest.png" />}
        {(status !== 'off') && <div className="timer">18:23</div>}
        {(status === 'off') && <button className="btn">Start</button>}
        {(status !== 'off') && <button className="btn">Stop</button>}
        <button className="btn btn-close">X</button>
      </div>
    )
  }
};

render(<App />, document.querySelector('#app'));
