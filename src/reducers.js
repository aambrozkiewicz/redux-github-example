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

export default combineReducers({
  github: reducer
});
