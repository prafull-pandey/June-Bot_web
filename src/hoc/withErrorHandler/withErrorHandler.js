import React from "react";
import Modal from "../../components/UI/Modal/Modal";
import Aux from "../Aux";

const withErrorhandler = (WrappedComponent) => {
  return (props) => {
    return (
      <Aux>
        <Modal show>SomeError</Modal>
        <WrappedComponent {...props} />
      </Aux>
    );
  };
};
export default withErrorhandler;
