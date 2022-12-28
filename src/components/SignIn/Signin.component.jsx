import {
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase.utils";
import FormInputComponent from "../../components/FormInput/FormInput.component";
import ButtonComponent from "../../components/Button/Button.component";
import { useState } from "react";
import "./Signin.style.scss";
const defaultFormFields = {
  email: "",
  password: "",
};

const SigninComponent = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    await createUserDocumentFromAuth(response.user);
  };

  const inputFieldChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const resetFormField = () => {
    setFormFields(defaultFormFields);
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormField();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("User not found with this email");
          break;
        default:
          console.log(error);
      }
      console.log("Error while login with email and password", error.message);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account</h2>
      <span>Sign in with you email and password</span>
      <form onSubmit={formSubmitHandler}>
        <FormInputComponent
          label="Email"
          type="email"
          required
          onChange={inputFieldChangeHandler}
          name="email"
          value={email}
        />
        <FormInputComponent
          label="Password"
          type="password"
          required
          onChange={inputFieldChangeHandler}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <ButtonComponent type="submit">SIGN IN</ButtonComponent>
          <ButtonComponent
            type="button"
            buttonType="google"
            onClick={logGoogleUser}
          >
            GOOGLE SIGN IN
          </ButtonComponent>
        </div>
      </form>
    </div>
  );
};

export default SigninComponent;
