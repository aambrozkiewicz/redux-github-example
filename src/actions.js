import { notification } from "antd";
import createAction from "redux-actions/lib/createAction";

export const setLoadingRepositories = createAction('LOADING_REPOS');
export const setRepositories = createAction('SET_REPOSITORIES');

export function showApiErrorNotification(message) {
  return function(dispatch, getState) {
    notification.open({
      message: "API Error",
      description: message.toString(),
    });
  };
}

export function fetchGithubRepos(username) {
  return function(dispatch, getState) {
    dispatch(setLoadingRepositories(true));

    fetch(`https://api.github.com/users/${username}/repos`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error("Username not found");
        }
      })
      .then(json => {
        dispatch(setRepositories(json));
      })
      .catch(err => {
        dispatch(showApiErrorNotification(err));
        dispatch(setRepositories([]));
      })
      .finally(() => dispatch(setLoadingRepositories(false)));
  };
}
