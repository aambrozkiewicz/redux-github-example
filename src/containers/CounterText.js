import { connect } from "react-redux";
import Text from "../components/Text";

const mapStateToProps = state => ({
  count: state.github.repos.length
});

export default connect(
  mapStateToProps,
)(Text);
