var React = require('react');


// Before refactor to stateless functional components


class Popular extends React.Component {
	constructor (prop) {
		super(prop);
		this.state = {
			selectedLanguage: 'All'
		};
		this.updateLanguage = this.updateLanguage.bind(this);
	}

	updateLanguage(lang) {
		this.setState(function() {
			return {
				selectedLanguage: lang
			}
		});
	}

	render() {
		var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
		// insert the following line inside <ul> to check current language selected
		//<p>Selected Language: {this.state.selectedLanguage}</p>
		return (
			<ul className='languages'>
				{languages.map(function(lang) {
					// console.log('Check This!', this)
					// The typical problem for map is that it needs to pass in "This" as second argument inorder to catch it.
					// use null as first argument in bind because we don't want to invoke it and second is the language it clicked.
					// if you use arrow function, then you don't need to pass "This" as second argument, becaues the context inside here is the same as outside.
					return (
					<li
					style= {lang === this.state.selectedLanguage ? {color: '#d0021b'} : null}
					onClick={this.updateLanguage.bind(null, lang)}
					key={lang}
					> 
						{lang} 
					</li>)
				}, this)}
			</ul>
		)
	}
}

module.exports = Popular;