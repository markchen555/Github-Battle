var React = require('react');
var PropTypes = require('prop-types');

// Move all the functionality into it's own components ouside Popular.
// Usually the component has it's own files but since we only use in this file so we just create on the same page.

class SelectedLanguage extends React.Component {
	// We no longer has state anymore because it live inside the Popular component so we use Props insdead.
	render() {
		var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
		
		return (
			<ul className='languages'>
				{languages.map(function(lang) {
					return (
						<li
						style= {lang === this.props.selectedLanguage ? {color: '#d0021b'} : null}
						onClick={this.props.onSelect.bind(null, lang)}
						key={lang}
						> 
							{lang} 
						</li>)
				}, this)}
			</ul>
		)
	}
}

SelectedLanguage.PropTypes = {
	selectedLanguage: PropTypes.string.isRequired,
	onSelect: PropTypes.func.isRequired
}


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
		return (
			<div>
				<SelectedLanguage
				selectedLanguage={this.state.selectedLanguage}
				onSelect={this.updateLanguage} />
			</div>
		)
	}
}

module.exports = Popular;