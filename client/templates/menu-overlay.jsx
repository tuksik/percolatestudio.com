MenuOverlay = React.createClass({
  handleClick: function() {
    if ($(event.target).closest('a').length)
      this.props.openMenu(false);
  },
  
  render: function() {
    return (
      <div className="overlay-screen-menu"  onClick={this.handleClick}>
        <a className="overlay-close">
          <span className="icon-cross"></span>
        </a>
        <div className="wrapper-menu">
          <div className="level-top">
    
            {/* <Router.Link to='why'>
              <span className="title-link">Why</span>
              <span className="subtitle-link">Our intent</span>
      </Router.Link> */}
      
            <Router.Link to='home'>
              <span className="title-link">Home</span>
              <span className="subtitle-link">Our intent</span>
            </Router.Link>
      
            <Router.Link to='how'>
              <span className="title-link">How</span>
              <span className="subtitle-link">The approach</span>
            </Router.Link>
      
            <Router.Link to='what'>
              <span className="title-link">What</span>
              <span className="subtitle-link">Our work</span>
            </Router.Link>
          </div>
          <div className="level-bottom">
            {/* <Router.Link to='home' className="monochrome">Home</Router.Link> */}
            <Router.Link to='careers' className="monochrome">Join Us</Router.Link>
            <a href="http://blog.percolatestudio.com" className="monochrome">Blog</a>
            <a onClick={this.props.openContact} className="monochrome">Contact</a>
            <br/>
            <a href="http://twitter.com/percolatestudio" className="monochrome" target="_blank"><span className="icon-twitter"></span></a>
            <a href="http://github.com/percolatestudio" className="monochrome" target="_blank"><span className="icon-github"></span></a>
          </div>
        </div>
      </div>
    );
  }
});