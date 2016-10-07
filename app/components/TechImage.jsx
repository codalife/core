var React = require('react')

var TechImage = React.createClass({
  render: function(){
    return (
      <div className="col-sm-3 col-xs-4">
        <img className="tech-image" src={this.props.image} />
      </div>
    )
  }
})

module.exports = TechImage
