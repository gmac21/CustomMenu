import React, { Component } from "react";
import MenuItems from "./MenuItems";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [],
      show: "all"
    };
  }

  submit = menuItem => {
    this.setState({
      menu: [...this.state.menu, menuItem]
    });
  };

  deleteItem = id => {
    this.setState({
      menu: this.state.menu.filter(item => id !== item.id)
    });
  };

  changeMenu = param => {
    this.setState({
      show: param
    });
  };

  render() {
    let newMenu = [];
    if (this.state.show === "all") {
      newMenu = this.state.menu;
    } else if (this.state.show === "veg") {
      newMenu = this.state.menu.filter(item => item.veg === true);
    } else if (this.state.show === "nonVeg") {
      newMenu = this.state.menu.filter(item => item.veg !== true);
    } else if (this.state.show === "cheapest") {
      newMenu = this.state.menu.sort((a, b) => a.price - b.price);
    }
    debugger;

    return (
      <div className="App">
        <div style={{ paddingBottom: "5px", paddingTop: "5px" }}>
          {" "}
          Create your own custom menu....{" "}
        </div>
        <div>
          <MenuItems onSubmit={this.submit} />
        </div>
        <div className="">
          <div className="flexOutline">
            <div className="divElements"> food</div>{" "}
            <div className="divElements">price</div>
          </div>
          {newMenu.map(item => (
            <div style={{ marginLeft: "8%" }} key={item.id}>
              <div key={item.id} className="flexOutline">
                <div className="divElements1"> {item.food} </div>
                <div className="divElements1"> {item.price} </div>{" "}
                <span>
                  {" "}
                  <button onClick={() => this.deleteItem(item.id)}>
                    {" "}
                    remove from menu
                  </button>{" "}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div style={{ paddingTop: "15px" }}>
          <button onClick={() => this.changeMenu("all")}> show all menu</button>
          <button onClick={() => this.changeMenu("veg")}>
            {" "}
            show vegetarian menu
          </button>
          <button onClick={() => this.changeMenu("nonVeg")}>
            show non vegetarian menu
          </button>
          <button onClick={() => this.changeMenu("cheapest")}>
            show by cheapest
          </button>
        </div>
      </div>
    );
  }
}

export default App;
