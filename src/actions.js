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

export function fetchGithubRepos(username) {
  return function(dispatch, getState) {
    dispatch(loadingRepos(true));

    return fetch(`https://api.github.com/users/${username}/repos`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error(response);
        }
      })
      .then(json => {
        dispatch(setRepos(json));
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => dispatch(loadingRepos(false)));
  };
}
