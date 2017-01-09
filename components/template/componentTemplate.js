import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';


// TODO: change ComponentTemplate
// eg. Navigation
class componentTemplate extends Component {

  render() {

    // TODO: Add your Component
    return (

      <div>
      </div>

    );

  }

}


/////////////
// WARNING //
/////////////

// rarely use this on components 
// if your component uses actions
// its pobably better as a container
function matchDispatchToProps(dispatch) {

  return bindActionCreators({}, dispatch);

}

/////////////
// WARNING //
/////////////

// rarely use this on components 
// if your component depends on too much states
// its pobably better as a container
function mapStateToProps(state) {

  return {}

}


// TODO: change ComponentTemplate to the name of your Component
export default connect(mapStateToProps, matchDispatchToProps)(componentTemplate);