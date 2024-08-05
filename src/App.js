import React from "react";

import UserDetails from "./UserDetatils";

class App extends React.Component {
  constructor() {
    super();
    this.state = { userName: "harshal" };
  }

  render() {
    return (
      <div>
        <h1>App</h1>
        <p>Username is {this.state.userName}</p>
        <button onClick={() => this.setState({ userName: "gaikwad" })}>
          Chnage Name
        </button>
        <UserDetails userName={this.state.userName} />
      </div>
    );
  }
}

export default App;