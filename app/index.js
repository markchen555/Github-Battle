var React = require('react');
var ReactDOM = require('react-dom');
// ProTypes
// var PropTypes = require('prop-types');
var App = require('./components/App')
require('./index.css');

// App moved to ./components/App.js


// ProTypes 
// App.propTypes = {
// 	div: PropTypes.string.isRequired
// }

// Render to the DOM by using reactDom
// first arguement is the render component
// second argument is where to render to
//<app /> ---> special way react invoke component (JSX)

ReactDOM.render(
	<App />,
	document.getElementById('app')
);