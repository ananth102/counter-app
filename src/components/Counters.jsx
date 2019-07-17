import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onRest, counters, onDelete, onIncrement } = this.props;
    let arr = this.props.counters.map(counter => (
      <Counter
        key={counter.id}
        onDelete={onDelete}
        onIncrement={onIncrement}
        counter={counter}
      />
    ));
    //console.log(arr[0]);

    return (
      <div>
        <button onClick={this.props.onRest} className="btn-primary btn-sm m-2">
          Reset
        </button>
        {arr}
      </div>
    );
  }
}

export default Counters;
