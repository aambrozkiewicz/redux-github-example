import { combineReducers } from "redux";
import { handleActions } from 'redux-actions';
import { setLoadingRepositories, setRepositories } from './actions';

const defaultState = { repos: [], loading: false };

const reducer = handleActions(
  {
    [setLoadingRepositories]: (state, { payload }) => ({ ...state, loading: payload }),
    [setRepositories]: (state, { payload }) => ({ ...state, repos: payload }),
  },
  defaultState
);

// function githubReducer(state = defaultState, action) {
//   switch (action.type) {
//     case "LOADING_REPOS":
//       return {
//         ...state,
//         loading: action.loading
//       };
//     case "REPOS_FETCH_SUCCESS":
//       return {
//         ...state,
//         repos: action.payload
//       };
//     default:
//       return state;
//   }
// }

export default combineReducers({
  github: reducer
});
