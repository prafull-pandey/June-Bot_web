import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import withErrorhandler from "../../hoc/withErrorHandler/withErrorHandler";
import Modal from "../../components/UI/Modal/Modal";

class JuneChat extends Component {
  state = {
    loading: false,
  };
  render() {
    return (
      <Aux>
        <Modal show={this.state.loading}>Loading...</Modal>
        This is June Chat
      </Aux>
    );
  }
}

export default JuneChat;
