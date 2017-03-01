var React = require('react')
var Modal = require('react-modal')

const customStyles = {
  content : {
    top                   : '10%',
    left                  : '20%',
    right                 : '20%',
    bottom                : '10%',
    marginRight           : '-10%',
  }
};

class ArsenalModal extends React.Component{
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
		      <div >
		        <div className="embed-responsive embed-responsive-16by9">
		          <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/_zq8LpWmF5A?enablejsapi=1?autoplay=1"></iframe>
		        </div>
		      </div>
			      <form>
		        <button  onClick={this.closeModal}>Close</button>
		      </form>
		    </Modal>
		)
	}

}

module.exports = ArsenalModal