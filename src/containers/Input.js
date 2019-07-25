import { fetchGithubRepos } from "../actions";
import { connect } from "react-redux";
import Input from "../components/Input";

const mapStateToProps = state => ({
  disabled: !!state.github.loading
});

const mapDispatchToProps = dispatch => ({
  onKeyEnter: username => dispatch(fetchGithubRepos(username))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);
