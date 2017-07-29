var React = require('react');
// import Popular.js
var Popular = require('./Popular');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
// Switch for 404page when input an none exist page assist
var Switch = ReactRouter.Switch;
var Nav = require('./Nav');
var Home = require('./Home');
var Battle = require('./Battle');
var Results = require('./Results');


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
			// use React Router then warp code inside <Router>
			// render Popular component
			// use className instead of class because class is reserved.
			<Router>
	      <div className='container'>
					<Nav />
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/battle' component={Battle} />
					<Route path='/battle/results' component={Results} />
						<Route path='/popular' component={Popular} />
						<Route render={function() {
								return <p> Not Found </p>
							}} />
					</Switch>
	      </div>
			</Router>
    	)
		// Transfrom into
		//return React.createElement('div', null, 'Hello World!');
	}
}

// Need to export inorder for index.js to require.
module.exports = App;
