import { connect } from "react-redux";
import Color from "../components/Color";

const mapStateToProps = (state) => ({
  count: state.count,
});

export default connect(mapStateToProps, null)(Color);
