import React from "react";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return <>das</>;
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    year: state.year,
    rooms: state.rooms
  };
};

const mapDispatchToProps = dispatch => {
  return {
    update: data => dispatch(updateStores(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
