var React = require('react');
// import Popular.js
var Popular = require('./Popular');

// Original way to create react
//React.createClass()

// Moern way to create react
class App extends React.Component {
// property might associate with our component
// -- state (may have)
// -- lifecycle (may have)
// -- UI (almost or alway require with render() method)
	render() {
		// in JSX
		return (
			// render Popular component
			// use className instead of class because class is reserved.
      		<div className='container'>
      			<Popular />
      		</div>
    	)
		// Transfrom into
		//return React.createElement('div', null, 'Hello World!');
	}
}

// Need to export inorder for index.js to require.
module.exports = App;