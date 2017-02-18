var React = require('react')
var Modal = require('react-modal')

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class LuckModal extends React.Component{
	constructor(){
		super();
	    this.state = {
	      modalIsOpen: false
	    };

	    this.openModal = this.openModal.bind(this);
	    this.closeModal = this.closeModal.bind(this);
	}

	openModal() {
	    this.setState({modalIsOpen: true});
	}

	closeModal() {
    	this.setState({modalIsOpen: false});
	}
	render() {
		return (
		    <Modal
		      isOpen={this.state.modalIsOpen}
		      // onAfterOpen={this.afterOpenModal}
		      onRequestClose={this.closeModal}
		      style={customStyles}
		      contentLabel="Example Modal"
		    >
		      <h1 ref="title"></h1>

		      <div>
		      	<h3>Nice!</h3>
		      	<h4>There is a better solutuon.</h4>
		      	<h4>Give it another try. Refresh the page.</h4>
		      </div>
			      <form>
		        <button  onClick={this.closeModal}>Got it</button>
		      </form>
		    </Modal>
		)
	}

}

module.exports = LuckModal