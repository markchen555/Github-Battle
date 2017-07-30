var React = require('react');
var PropTypes = require('prop-types');

// The Loading.js is now customizable that accept custom text and speed.

var styles = {
  content: {
    textAlign: 'center',
    fontSize: '35px',
  }
};

class Loading extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: props.text,
    }
  }
  render () {
    return (
      <p style={styles.content}>
        {this.state.text}
      </p>
    )
  }
  componentDidMount() {
    var stopper = this.props.text + '...';
    this.interval = window.setInterval(function() {
      if (this.state.text === stopper) {
        this.setState(function () {
          return {
            text: this.props.text
          }
        })
      } else {
        this.setState(function(prevState) {
          return {
            text: prevState.text + '.'
          }
        })
      }
    }.bind(this), this.props.speed)
  }
  componentWillUnmount () {
    console.log('Clear Interval')
    window.clearInterval(this.interval)
  }
}

Loading.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired
}

Loading.defaultProps = {
  text: 'Loading',
  speed: 300
}

module.exports = Loading;
