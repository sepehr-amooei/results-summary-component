import React, { Component } from "react";
import { getItems } from "./data";
import Badge from "./common/badge";

class SummarySection extends Component {
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
      <section className="summary">
        <h3>summary</h3>
        <div className="rows">
          {items.map((item) => (
            <div
              className={`row ${item.category.toLowerCase()}`}
              key={item.category}
            >
              <Badge icon={item.icon} category={item.category} />
              <p style={{ color: "black" }}>
                <b>{item.score}</b> / 100
              </p>
            </div>
          ))}
        </div>
        <button className="btn">Continue</button>
      </section>
    );
  }
}

export default SummarySection;
