import React from "react";
import PropType from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "components/common/ErrorComponent";

const ButtonGoogle = ({ text = "Sign up with Google", onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
      className="flex dark:text-white items-center dark:border-darkStroke justify-center w-full py-4 mb-5 text-base font-semibold border rounded-lg border-strock text-text2 gap-x-3"
    >
      <img srcSet="/Google.png 2x" alt="Google-Sign-Up" />
      <span>{text}</span>
    </button>
  );
};

ButtonGoogle.propTypes = {
  text: PropType.string,
  onClick: PropType.func,
};
export default withErrorBoundary(ButtonGoogle, {
  FallbackComponent: ErrorComponent,
});
