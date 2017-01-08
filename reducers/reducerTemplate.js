// TODO: change the path to your action
// TODO: change REQUEST, SUCCESS, FAILURE to the consts you export there
import {

  REQUEST, 
  SUCCESS, 
  FAILURE
  
} from '../../actions/path to your action';


// TODO: change templateReducer
// eg. -> you fetched all user and save them into state userlist
// userList
export default function templateReducer(state = {

  isFetching: false,

}, action) {

  // TODO: change case REQUEST, SUCCESS, FAILURE
  // to the constats you imported
  // add your state
  // eg. userlist ->
  // userlist: action.userlist
  switch (action.type) {

    case REQUEST:

      return Object.assign({}, state, {

        isFetching: true,

      });


    case SUCCESS:

      return Object.assign({}, state, {

        isFetching: false,

      });


    case FAILURE:

      return Object.assign({}, state, {

        isFetching: false,

      });


    default:
    
      return state

  }

}
