var React = require('react');

var Footer = React.createClass({
  render: function(){
    return (
      <footer className="footer">

          <div>
            <a href="https://GitHub.com/AnuarBJJ">
              <i className="fa fa-github-square" aria-hidden="true"> </i>&nbsp; GitHub
            </a>
            <span>&nbsp;|&nbsp;</span>
            <a href="https://www.linkedin.com/in/anuarzhukenov">
              <i className="fa fa-linkedin-square" aria-hidden="true"> </i> &nbsp;LinkedIn
            </a>
            <span>&nbsp;|&nbsp;</span>

            <a href="wtai://wp/mc;3235140817">
              <i className="fa fa-phone-square" aria-hidden="true"> </i> &nbsp; 323.514.0817
            </a>
            <span>&nbsp;|&nbsp;</span>
            <a className="mailto" href="mailto:anuar.zhukenov@gmail.com">
              <i className="fa fa-envelope-square" aria-hidden="true"> </i> &nbsp;anuar.zhukenov@gmail.com
            </a>
          </div>

      </footer>
    )
  }
});

module.exports = Footer;
