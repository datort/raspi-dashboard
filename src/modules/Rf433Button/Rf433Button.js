import React from 'react';
import './style.css';

let ipcRenderer = process.env.NODE_ENV === 'development' ? false : window.require('electron').ipcRenderer;

export default class Rf433Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    }
  }

  render() {
    return (
      <div className="mod__rf433button">
        <div className="container">
          <button className={this.buttonClassName()} onClick={this.handleClick}>
            <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
              <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
              <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
            </svg>
            <span>{this.props.label}</span>
          </button>
        </div>
      </div>
    );
  }

  buttonClassName = () => {
    return this.state.active ? 'btn active' : 'btn';
  }

  handleClick = () => {
    if (!ipcRenderer) return;

    const code = this.state.active ? this.props.offCommand : this.props.onCommand;
    ipcRenderer.send('asynchronous-message', '/home/pi/rpi-rf/scripts/rpi-rf_send ' + code);
    this.setState({active: !this.state.active});
  }
}