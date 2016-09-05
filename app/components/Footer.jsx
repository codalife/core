var React = require('react');

var Footer = React.createClass({
  render: function(){
    return (
      <footer className="footer">
        <div className="container">
          <p className="text-muted">Designed by Anuar</p>
          <div>
            <a href="https://www.linkedin.com/in/anuarzhukenov">
              <i className="fa fa-linkedin-square" aria-hidden="true">  LinkedIn </i>
            </a>
            <span>&nbsp;|&nbsp;</span>
            <a href="https://GitHub.com/AnuarBJJ">
              <i className="fa fa-github-square" aria-hidden="true">  GitHub </i>
            </a>
            <span>&nbsp;|&nbsp;</span>
            <i className="fa fa-phone-square" aria-hidden="true">  (323) 514 0817 </i>
            <span>&nbsp;|&nbsp;</span>
            <a className="mailto" href="mailto:anuar.zhukenov@gmail.com">
              <i className="fa fa-envelope-square" aria-hidden="true">  anuar.zhukenov@gmail.com </i>
            </a>
          </div>
        </div>
      </footer>
    )
  }
});

module.exports = Footer;
