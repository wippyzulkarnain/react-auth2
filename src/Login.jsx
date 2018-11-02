import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div>
        Login
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleOnChange}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handleOnChange}
        />
        <br />
        <button
          onClick={() =>
            this.props.handleLogin(this.state.email, this.state.password)
          }
        >
          Login
        </button>
      </div>
    );
  }
}

export default Login;
