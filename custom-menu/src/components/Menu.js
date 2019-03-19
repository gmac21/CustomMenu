import React, { Component } from "react";
import MenuItems from "./MenuItems";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: []
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

  render() {
    console.log(this.state.menu);
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
          {this.state.menu.map(item => (
            <div style={{ marginLeft: "8%" }}>
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
      </div>
    );
  }
}

export default App;
