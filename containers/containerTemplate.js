import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// TODO: change ComponentTemplate
// eg. a table with all the users -> UserTable
class {{ContainerTemplate}} extends Component {
  render() {
    // TODO: Add your Container
    return (
      <div>
      </div>
    );
  }
}

// TODO: add your actions
// seperate multiple actions with a comma
// eg. login ->
// import your login action at the top of this document
// import login from '../actions/auth/login'
// and then inside of bindActionCreators
// login: login
const matchDispatchToProps = (dispatch) => (bindActionCreators({
  // your actions
}, dispatch));


// TODO: add your states
// seperate multiple states with a comma
// eg. is Authenticated? ->
// inside of return {}
// isAuthenticated: state.isAuthenticated
const mapStateToProps = (state) => ({
  // add you state
})

export default connect(mapStateToProps, matchDispatchToProps)({{ContainerTemplate}});