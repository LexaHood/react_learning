import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      isToggleOn: true
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    if (this.state.isToggleOn) {
      this.setState({
        date: new Date()
      });
    }
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    // console.log('render Clock');
    return (
      <div>
        <p>Сейчас <strong>{this.state.date.toLocaleTimeString()}</strong></p>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      </div>
    )
  }
}

export default Clock;