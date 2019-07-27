import { notification } from "antd";

export function setRepos(repos) {
  return {
    type: "REPOS_FETCH_SUCCESS",
    payload: repos
  };
}

export function loadingRepos(loading) {
  return {
    type: "LOADING_REPOS",
    loading
  };
}

export function showNotification(message) {
  return function(dispatch, getState) {
    notification.open({
      message: "API Error",
      description: message.toString()
    });
  };
}

export function fetchGithubRepos(username) {
  return function(dispatch, getState) {
    dispatch(loadingRepos(true));

    fetch(`https://api.github.com/users/${username}/repos`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error("Username not found");
        }
      })
      .then(json => {
        dispatch(setRepos(json));
      })
      .catch(err => {
        dispatch(showNotification(err));
        dispatch(setRepos([]));
      })
      .finally(() => dispatch(loadingRepos(false)));
  };
}
