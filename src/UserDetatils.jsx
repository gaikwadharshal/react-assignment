import React from "react";

class UserDetails extends React.Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = {
      userName: props.userName,
      message: "",
    };
  }

  // when component get update ? state or props update
  shouldComponentUpdate() {
    return false;
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");
    if (nextProps.userName !== prevState.userName) {
      return { userName: nextProps.userName };
    } else {
      return null;
    }
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>UserDetails</h1>
        <h2>UserName is {this.state.userName}</h2>
        <p>{this.state.message}</p>
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount");
    setTimeout(() => {
      this.setState({ message: "welcome user to our website" });
    }, 3000);
  }
}

export default UserDetails;