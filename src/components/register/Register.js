import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setFormValue, submit } from "../../redux/actions/register";
import { validateEmail } from "../../utility/validateEmail";
import { validateMobileNumber } from "../../utility/validateMobileNumber";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      error: {
        name: "",
        email: "",
        mobile: "",
        password: "",
      },
    };
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

  handleSubmit(ev) {
    ev.preventDefault();
    const { name, email, mobile, password } = this.props;
    if (name === "") {
      this.setState({
        error: {
          email: "Name is required",
        },
      });

      return;
    }

    if (!validateEmail(email)) {
      this.setState({
        error: {
          email: "Invalid email",
        },
      });

      return;
    }

    if (!validateMobileNumber(mobile)) {
      this.setState({
        error: {
          email: "Invalid mobile number",
        },
      });

      return;
    }

    if (password.length < 4) {
      this.setState({
        error: {
          password: "Password lenght should be greater than 3",
        },
      });

      return;
    }

    this.setState({
      error: {
        name: "",
        email: "",
        mobile: "",
        password: "",
      },
    });
    this.props.handleSubmit(name, email, mobile, password);
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              onChange={(ev) =>
                this.props.handleChange("name", ev.target.value)
              }
              value={this.props.name}
            />
          </label>
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
            Mobile:
            <input
              type="text"
              onChange={(ev) =>
                this.props.handleChange("mobile", ev.target.value)
              }
              value={this.props.mobile}
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
          <Link to="/">Login</Link>
        </form>
        <div className="error">
          {this.state.error.name ? <p>{this.state.error.name}</p> : ""}
          {this.state.error.email ? <p>{this.state.error.email}</p> : ""}
          {this.state.error.mobile ? <p>{this.state.error.mobile}</p> : ""}
          {this.state.error.password ? <p>{this.state.error.password}</p> : ""}
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return { ...state.registration, isAuthenticated: state.isAuthenticated };
}

const mapDispatchToProps = {
  handleChange: setFormValue,
  handleSubmit: submit,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
