import React, { Component } from "react";
import InputField from "./common/input";

class LoginPage extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {}
  };

  validate = () => {
    const errors = {};
    if (this.state.account.username == "")
      errors.username = "Username is required";
    if (this.state.account.password == "")
      errors.password = "Password is required";

    return Object.keys(errors).length === 0 ? errors : errors;
  };
  handleSubmit = e => {
    const errors = this.validate();
    this.setState({ errors });

    e.preventDefault();
    if (Object.keys(errors).length > 0) return;
    //form submit
    console.log("submit pressed");
  };
  handleChange = e => {
    const account = { ...this.state.account };
    account[e.currentTarget.id] = e.currentTarget.value;
    this.setState({ account });
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h1 className="text-center">Login</h1>
        <form onSubmit={this.handleSubmit} className="form-signin">
          <InputField
            value={account.username}
            onChange={this.handleChange}
            id="username"
            label="Username"
            errors={errors.username}
          />
          <InputField
            onChange={this.handleChange}
            value={account.password}
            id="password"
            label="Password"
            errors={errors.password}
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginPage;
