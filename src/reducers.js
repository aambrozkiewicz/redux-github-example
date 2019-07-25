import { combineReducers } from "redux";

function githubReducer(state = { repos: [], loading: false }, action) {
  switch (action.type) {
    case "LOADING_REPOS":
      return {
        ...state,
        loading: action.loading
      };
    case "REPOS_FETCH_SUCCESS":
      return {
        ...state,
        repos: action.payload
      };
    default:
      return state;
  }
}

export default combineReducers({
  github: githubReducer
});
