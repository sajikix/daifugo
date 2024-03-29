import { connect } from "react-redux";
import { Dispatch } from "redux";
import App from "../components/App";
import { ReduxState } from "../interfaces";

const mapStateToProps = (state: ReduxState) => {
  return {
    currentPageName: state.user.currentPage,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
