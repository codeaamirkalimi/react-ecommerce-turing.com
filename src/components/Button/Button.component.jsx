import "./Button.style.scss";

const BUTTON_TYPES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const ButtonComponent = (props) => {
  const { children, buttonType, ...otherProps } = props;
  return (
    <button
      className={`button-container ${BUTTON_TYPES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default ButtonComponent;
