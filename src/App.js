import React, { Component } from "react";
import "./App.css";
import Login from "./Login";
import axios from "axios";
import Register from "./Register";
class App extends Component {
  constructor() {
    super();
    this.state = {
      isAuthenticated: false
    };
  }

  handleLogin = (email, password) => {
    const data = { email: email, password: password };
    axios
      .post(`https://impact-byte-demo.herokuapp.com/accounts/login`, data)
      .then(res => {
        console.log(res.data.message);
        if (res.data.message === "You are logged in") {
          this.setState({
            isAuthenticated: true
          });
        } else {
          alert("Wrong Password!");
        }
      })
      .catch(err => console.log(err));
  };
  handleRegister = (first_name, last_name, email, password) => {
    const body = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password
    };
    axios
      .post(`https://impact-byte-demo.herokuapp.com/accounts/register`, body)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div>
        <Login handleLogin={this.handleLogin} />
        <Register />
      </div>
    );
  }
}

export default App;
