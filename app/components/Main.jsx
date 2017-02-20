var React = require('react');

var Nav = require('Nav');
var Footer = require('Footer');
var PMGModal = require('PMGModal')
var ArsenalModal = require('ArsenalModal')

var Main = React.createClass({
  componentWillMoiunt(){
    document.getElementById('startGame').click()
  },
  render: function(){
    return (
      <div>
        <Nav seeOtherProjects = {this.changeProjects}/>
        {this.props.children}
        <Footer/>
        <PMGModal ref='PMGModal'/>
        <button className='hidden' id='pmg' onClick={() => this.refs.PMGModal.openModal()}>Open Modal</button>
        <ArsenalModal ref='ArsenalModal'/>
        <button className='hidden' id='arsenal' onClick={() => this.refs.ArsenalModal.openModal()}>Open Modal</button>
      </div>
    )
  }
});

module.exports = Main;
