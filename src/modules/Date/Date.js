import React from 'react';
import moment from 'moment';
import './style.css';

export default class Date extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: moment().format('LTS'),
      date: moment().format('LL')
    }
  }

  componentDidMount() {
    const intervalId = setInterval(this.tick, 1000);
    this.setState({intervalId: intervalId});
  }
 
  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }
 
  tick = () => {
    this.setState({
      time: moment().format('LTS'),
      date: moment().format('LL')
    });
  }

  render() {
    return (
      <div className="mod__date">
        {this.state.time}
        <br />
        {/*this.state.date*/}
      </div>
    );
  }
}