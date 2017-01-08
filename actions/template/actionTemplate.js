import { hashHistory } from 'react-router';
import axios from 'axios';


/*****************************************
 ***
 ***              Template
 ***
 *****************************************/


// TODO: change REQUEST, SUCCESS, FAILURE
// eg. login -> REQUEST_LOGIN = 'REQUEST_LOGIN'
//              SUCCESS_LOGIN = 'SUCCESS_LOGIN' 
//              FAILURE_LOGIN = 'FAILURE_LOGIN'
export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';


// TODO: change request, success, failure
// eg. login -> requestLogin, successLogin, failureLogin
// change the types REQUEST, SUCCESS, FAILURE
// eg. login -> REQUEST_LOGIN, SUCCESS_LOGIN, FAILURE_LOGIN
function request() {

  return {

    type: REQUEST,
    isFetching: true

  }

}


function success() {

  return {

    type: SUCCESS,
    isFetching: false,

  }

}


function failure() {

  return {

    type: FAILURE,
    isFetching: false

  }
  
}


// TODO: change template
// eg. login -> login(email, password)
export const postTemplate = () => {

    return dispatch => {

      // TODO: change 'url' to your api-url
      axios.post('url', {

        headers: {

          'Content-Type': 'application/x-www-form-urlencoded'

        },

        // TODO: add your postparameters (seperate them by a comma)
        // eg. login ->
        // email: email,
        // password: password

      })
        .then(function (response) {

          if (response) {

            dispatch(success());
            // TODO: change '/somewhere' to the path you want to redirect
            hashHistory.push('/somwhere');

          }
          else dispatch(failure());

        })
        .catch(function (error) {

          dispatch(failure());

        })

    }

};


// TODO: change template
// eg. fetching all users -> fetchAllUser()
export const getTemplate = () => {

  return dispatch => {

    // TODO: change 'url' to your api-url
    axios.get('url', {

      // TODO: change your Authorization token or delete if not needed
      headers: {

        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${localStorage.getItem('token')}`

      },

      data: {}

    })
      .then(function (response) {

        if(response) dispatch(success(response.data));
        else dispatch(failure());

      })
      .catch(function (error) {

        dispatch(failure());

      })

  }

};