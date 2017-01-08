import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';


// TODO: change ComponentTemplate
// eg. a table with all the users -> UserTable
class ComponentTemplate extends Component {

  componentDidMount() {

  }


  componentWillMount(){

  }


  componentDidUpdate(){
    
  }


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
function matchDispatchToProps(dispatch) {

  return bindActionCreators({}, dispatch);

}


// TODO: add your states
// seperate multiple states with a comma
// eg. is Authenticated? -> 
// inside of return {} 
// isAuthenticated: state.isAuthenticated
function mapStateToProps(state) {

  return {}

}

// TODO: change ComponentTemplate to the name of your Component
export default connect(mapStateToProps, matchDispatchToProps)(ComponentTemplate);