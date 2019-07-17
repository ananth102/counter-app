import React, { Component } from "react";
import logo, { ReactComponent } from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/Counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 2 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleRest = () => {
    console.log("reeeeee");
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = counter => {
    //console.log("before", counters[0]);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };

    counters[index].value++;
    //console.log("onUpdate", counters);
    this.setState({ counters });
  };

  handleDelete = CounterId => {
    //console.log("Deleted", CounterId);

    const counters = this.state.counters.filter(c => c.id !== CounterId);
    // console.log("counters", counters);
    this.setState({ counters });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <NavBar />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onRest={this.handleRest}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
