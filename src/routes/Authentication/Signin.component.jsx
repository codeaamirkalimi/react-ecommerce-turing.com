import { signInWithGooglePopup } from "../../utils/firebase.utils";

const SigninComponent = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  return (
    <div>
      <h1>This is SignIn component</h1>
      <button onClick={logGoogleUser}>Sign In With Google</button>
    </div>
  );
};

export default SigninComponent;
