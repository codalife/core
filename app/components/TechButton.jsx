var React = require('react')

var TechButton = React.createClass({
  render: function(){
    var {active, name, image} = this.props

    var buttonStyle = {
      backgroundImage: 'url(' + image + ')'
    };

    return (
      <div className="col-sm-2 col-xs-4 text-center" onClick={ () => {
          this.props.handleToggle(name)
        }}>
        <img src={image} className="tech" />
        <div className="checkbox">
          <label>
            <input type="checkbox" checked={active} />
          </label>
        </div>
      </div>
    )
  }
})

module.exports = TechButton
