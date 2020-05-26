import { bindActionCreators } from "redux";
import * as CountActions from "../actions/actions";
import { connect } from "react-redux";
import App from "../components/App";

// state props mapping
const mapStateToProps = (state) => ({
  count: state.count,
});

// action props mapping
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(CountActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
