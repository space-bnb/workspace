import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement(document.getElementById('workspaces'));
 
class Persons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  handleOpen() {
    this.setState({ showModal: true });
  }

  handleClose() {
    this.setState({ showModal: false });
  }
   
  render() {
    return (
      <div>
        <button onClick={this.handleOpen.bind(this)}>Persons</button>
        <Modal 
          className="persons-modal"
          isOpen={this.state.showModal}
          contentLabel="TESTING STUFF HERE"
          onRequestClose={this.handleClose.bind(this)}
        />
        <button onClick={this.handleClose.bind(this)}>Close Modal</button>
      </div>
    )
  }
};

export default Persons;