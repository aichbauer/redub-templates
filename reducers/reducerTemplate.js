// TODO: change the path to your action
// TODO: change REQUEST, SUCCESS, FAILURE to the consts you export there
import {
  REQUEST,
  SUCCESS,
  FAILURE
} from '../../actions/path/to/your/action';

// TODO: change templateReducer
// eg. -> you fetched all user and save them into state userlist
// userList
const {{reducerTemplate}} = (state = {

  isFetching: false,

}, action) => {
  // TODO: change case REQUEST, SUCCESS, FAILURE
  // to the constats you imported
  // add your state
  // eg. userlist ->
  // userlist: action.userlist
  switch (action.type) {

    case REQUEST:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
      });

    case SUCCESS:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
      });

    case FAILURE:
      return Object.assign({}, state, {
        isFetching: action.isFetching,
      });

    default:
      return state
  }
};

export default {{reducerTemplate}};
