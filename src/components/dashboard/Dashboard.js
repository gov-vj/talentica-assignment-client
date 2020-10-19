import React from "react";
import { connect } from "react-redux";
import { logout } from "../../redux/actions/logout";
import { getUserInfo } from "../../redux/actions/dashboard";

class Dashboard extends React.Component {
  componentDidMount() {
    if (!this.props.isAuthenticated) return this.props.history.push("/");
    this.props.getUserInfo();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.isAuthenticated !== prevProps.isAuthenticated &&
      !this.props.isAuthenticated
    ) {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <>
        <h2>Dashboard</h2>
        <div>
          <p>Name: {this.props.name}</p>
          <p>Email: {this.props.email}</p>
          <p>Mobile: {this.props.mobile}</p>
        </div>
        <button onClick={this.props.logout}>logout</button>
      </>
    );
  }
}

function mapStateToProps(state) {
  return { ...state.user, isAuthenticated: state.isAuthenticated };
}

const mapDispatchToProps = {
  logout,
  getUserInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
