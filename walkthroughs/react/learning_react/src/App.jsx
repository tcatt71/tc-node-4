import { Component } from "react";
import Button from "./components/Button";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.buttonUnits = [-10, -5, -1, 1, 5, 10];
    this.state = {
      title: "Change Me",
      count: 0,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleClick(unit) {
    this.setState({ count: this.state.count + unit });
  }

  handleInput(event) {
    this.setState({ title: event.target.value });
  }

  render() {
    console.log("App - Render");

    return (
      <div className="App">
        <div>
          <h1>{this.state.title}</h1>
          <h2>Count: {this.state.count}</h2>
        </div>
        <div>
          <input
            type="text"
            name="title"
            id="title"
            onChange={this.handleInput}
          />
        </div>
        <div className="btn-group">
          {this.buttonUnits.map((unit, idx) => (
            <Button key={idx} unit={unit} handleClick={this.handleClick} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
