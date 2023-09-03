import React, { Component } from "react";
import { getItems } from "./data";
import Badge from "./common/badge";

class SummaryItems extends Component {
  state = {
    items: [],
  };
  componentDidMount() {
    const items = getItems();
    this.setState({ items });
  }
  render() {
    const { items } = this.state;
    return (
      <div className="rows">
        {items.map((item) => (
          <div className="row" key={item.category}>
            <Badge icon={item.icon} category={item.category} />
            <p>
              <b>{item.score}</b> / 100
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default SummaryItems;
