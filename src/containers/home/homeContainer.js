import { connect } from "react-redux";
import { Home } from "../../components/home/home";

import { logoutUser, getType } from "../../actions/session/actions";

const mapStateToProps = ({ routes, sessionReducer }) => ({
  routes: routes,
  user: sessionReducer.user,
  userType: sessionReducer.userType
});

const mapDispatchToProps = {
  logout: logoutUser,
  getType: getType
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);