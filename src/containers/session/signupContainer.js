import { connect } from "react-redux";
import { SignupFormComponent } from "../../components/auth/SignupForm/signupForm";
import { signupUser } from "../../actions/session/actions";

const mapStateToProps = ({
  routes,
  sessionReducer: { loading, error }
}) => ({
  routes: routes,
  loading: loading,
  error: error,
});

const mapDispatchToProps = {
  signup: signupUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupFormComponent);