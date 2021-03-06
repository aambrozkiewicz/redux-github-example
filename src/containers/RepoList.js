import { fetchGithubRepos } from "../actions";
import { connect } from "react-redux";
import List from "../components/List";

const mapStateToProps = state => ({
  items: state.github.repos,
  loading: state.github.loading
});

const mapDispatchToProps = dispatch => ({
  onKeyEnter: username => dispatch(fetchGithubRepos(username))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
