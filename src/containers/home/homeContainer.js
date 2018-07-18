import { connect } from "react-redux";
import { Home } from "../../components/home/home";

import { logoutUser } from "../../actions/session/actions";
import { retrieveData } from '../../actions/beer/actions';

const mapStateToProps = ({ routes, sessionReducer }) => ({
  routes: routes,
  user: sessionReducer.user
});

const mapDispatchToProps = {
  logout: logoutUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);