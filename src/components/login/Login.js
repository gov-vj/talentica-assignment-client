import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { login, setFormValue } from "../../redux/actions/login";
import { validateEmail } from "../../utility/validateEmail";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      error: {
        email: "",
        password: "",
      },
    };
  }

  handleSubmit(ev) {
    ev.preventDefault();
    const { email, password } = this.props;
    if (!validateEmail(email)) {
      this.setState({
        error: {
          email: "Invalid email",
        },
      });

      return;
    }

    if (password === "") {
      this.setState({
        error: {
          password: "Password is required",
        },
      });

      return;
    }

    this.setState({
      error: {
        email: "",
        password: "",
      },
    });

    this.props.handleSubmit(email, password);
  }

  componentDidMount() {
    if (this.props.isAuthenticated)
      return this.props.history.push("/dashboard");
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.isAuthenticated !== prevProps.isAuthenticated &&
      this.props.isAuthenticated
    ) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input
              type="text"
              onChange={(ev) =>
                this.props.handleChange("email", ev.target.value)
              }
              value={this.props.email}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              onChange={(ev) =>
                this.props.handleChange("password", ev.target.value)
              }
              value={this.props.password}
            />
          </label>
          <input type="submit" value="Submit" />
          <Link to="register">Register</Link>
        </form>
        <div className="error">
          {this.state.error.email ? <p>{this.state.error.email}</p> : ""}
          {this.state.error.password ? <p>{this.state.error.password}</p> : ""}
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return { ...state.login, isAuthenticated: state.isAuthenticated };
}

const mapDispatchToProps = {
  handleChange: setFormValue,
  handleSubmit: login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
