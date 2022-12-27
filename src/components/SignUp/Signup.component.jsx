import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";
import FormInputComponent from "../../components/FormInput/FormInput.component";
import ButtonComponent from "../../components/Button/Button.component";
import "./Signup.style.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignupComponent = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const inputFieldChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Confirm password not match!");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      resetFormField();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      }
      console.log(
        "User creation error while sign up with email and password",
        error.message
      );
    }
  };

  const resetFormField = () => {
    setFormFields(defaultFormFields);
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={formSubmitHandler}>
        <FormInputComponent
          label="Display Name"
          type="text"
          required
          onChange={inputFieldChangeHandler}
          name="displayName"
          value={displayName}
        />
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
        <FormInputComponent
          label="Confirm Password"
          type="password"
          required
          onChange={inputFieldChangeHandler}
          name="confirmPassword"
          value={confirmPassword}
        />
        <ButtonComponent type="submit">Sign Up</ButtonComponent>
      </form>
    </div>
  );
};

export default SignupComponent;
