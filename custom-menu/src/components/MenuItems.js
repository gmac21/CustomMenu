import React, { Component } from "react";

class MenuItems extends Component {
  state = {
    food: "",
    price: "",
    veg: false,
    id: ""
  };

  handleFood = event => {
    this.setState({
      food: event.target.value
    });
  };

  handlePrice = event => {
    this.setState({
      price: event.target.value
    });
  };

  handleVeg = event => {
    this.setState({
      veg: event.target.checked
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({
      food: this.state.food,
      price: this.state.price,
      veg: this.state.veg,
      id: Math.random()
    });
    this.setState({ food: "", price: "", veg: false });
    event.preventDefault();
  };

  render() {
    return (
      <div style={{ padding: "5px" }}>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder={"add food"}
            type={"text"}
            value={this.state.food}
            onChange={this.handleFood}
          />
          <input
            placeholder={"add price"}
            type={"number"}
            value={this.state.price}
            onChange={this.handlePrice}
          />
          <span> vegetarian </span>
          <input
            placeholder={"vegetarian?"}
            type={"checkbox"}
            checked={this.state.veg}
            onChange={this.handleVeg}
          />
          <div style={{ paddingTop: "5px" }}>
            <button style={{ color: "blue" }} onSubmit={this.handleSubmit}>
              {" "}
              Add new menu item{" "}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default MenuItems;
