import SigninComponent from "../../components/SignIn/Signin.component";
import SignupComponent from "../../components/SignUp/Signup.component";
import "./Authentication.style.scss";

const AuthenticationComponent = () => {
  return (
    <div className="authentication-container">
      <SigninComponent />
      <SignupComponent />
    </div>
  );
};

export default AuthenticationComponent;
