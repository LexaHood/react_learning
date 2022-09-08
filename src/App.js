import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car';
import Clock from './Clock/Clock';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cars: [
        { name: 'Ford', year: 2019 },
        { name: 'Audi', year: 2022 },
        { name: 'Ferrari', year: 2008 },
        // { name: 'Ferrari', year: 2022 },
        // { name: 'Ford', year: 2002 },
      ],
      pageTitle: 'React components',
      showCars: false
    };
  }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  };

  changeTitleHandlerOld = () => {
    console.log('clicked');

    const oldTitle = this.state.pageTitle;
    const newTitle = oldTitle + ' (changed)';

    this.setState({
      pageTitle: newTitle
    });
  };

  onChangeName(name, index) {
    const car = this.state.cars[index];
    car.name = name;

    const cars = [...this.state.cars];
    cars[index] = car;
    this.setState({
      cars // cars: cars
    })
  }

  deleteHandler(index) {
    const cars = this.state.cars.concat();

    cars.splice(index, 1);

    this.setState({ cars })
  }

  handleInput = (event) => {
    console.log('chhh', event.target.value);
    this.setState({
      pageTitle: event.target.value
    })
  }

  render() {
    // console.log('render App');
    return (
      <div className="App">
        <div>
          <h2>{this.props.title}</h2>
          <input type='text' onChange={this.handleInput}></input>
          <button onClick={this.changeTitleHandlerOld}>Change title</button>
        </div>

        <Clock />

        <div style={{
          width: 400,
          margin: 'auto',
          paddingTop: '20px'
        }}>
          {this.state.showCars ?
            this.state.cars.map((car, index) => {
              return (
                <Car
                  key={index}
                  name={car.name}
                  year={car.year}
                  onDelete={this.deleteHandler.bind(this, index)}
                  onChangeName={event => this.onChangeName(event.target.value, index)} //люое название функции
                />
              );
            })
            : null
          }
        </div>

        <div>
          <h2>019 Работа с условными операторами</h2>
          <button onClick={this.toggleCarsHandler}>Toggle cars</button>
        </div>
      </div>
    );
  };
}

export default App;
