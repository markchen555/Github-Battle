var React = require('react');
var PropTypes = require('prop-types');
var api = require('../utils/api');

// Move all the functionality into it's own components ouside Popular.
// Usually the component has it's own files but since we only use in this file so we just create on the same page.

// if all your components has render method, you can just create function instea of components that just return some UI.

function SelectedLanguage (props) {
	var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
	return (
		<ul className='languages'>
			{languages.map(function(lang) {
				return (
					<li
					style= {lang === props.selectedLanguage ? {color: '#d0021b'} : null}
					onClick={props.onSelect.bind(null, lang)}
					key={lang}
					> 
					{lang} 
					</li>)
			})}
		</ul>
	)
}

function RepoGrid (props) {
	return (
		<ul className = 'popular-list'>
			{props.repos.map(function (repo, index) {
				return (
					<li key={repo.name} className='popular-item'>
						<div className='popular-rank'>#{index + 1}</div>
						 <ul className='space-list-items'>
							<li>
								<img
                  					className='avatar'
                  					src={repo.owner.avatar_url}
                  					alt={'Avatar for ' + repo.owner.login} />
							</li>
							<li><a href={repo.html_url}>{repo.name}</a></li>
							<li>@{repo.owner.login}</li>
							<li>{repo.stargazers_count} stars</li>
						</ul>
					</li>
				)
			})}
		</ul>
	)
}

RepoGrid.PropTypes = {
	repos: PropTypes.array.isRequired,
}

SelectedLanguage.PropTypes = {
	selectedLanguage: PropTypes.string.isRequired,
	onSelect: PropTypes.func.isRequired
}


class Popular extends React.Component {
	constructor (prop) {
		super(prop);
		this.state = {
			selectedLanguage: 'All',
			repos: null,
		};
		this.updateLanguage = this.updateLanguage.bind(this);
	}

	// Life cycle events
	componentDidMount() {
		// AJAX request  (moved to updateLanguage because we want to show different search result with different language input)
		// api.fetchPopularRepos(this.state.selectedLanguage)
		// 	.then(function(repos) {
		// 		console.log(repos);
		// 	})

		this.updateLanguage(this.state.selectedLanguage);
	}


	updateLanguage(lang) {
		this.setState(function() {
			return {
				selectedLanguage: lang,
				repos: null,
			}
		});

		// AJAX request
		api.fetchPopularRepos(lang)
			.then(function(repos) {
				this.setState(function() {
					return {
						repos: repos
					}
				})
			}.bind(this));
	}

	render() {
		// place {JSON.stringify(this.state.repos,null,2)} in to see the datas.
		return (
			<div>
				<SelectedLanguage
				selectedLanguage={this.state.selectedLanguage}
				onSelect={this.updateLanguage} />
				{!this.state.repos
          			? <p>LOADING!</p>
          			: <RepoGrid repos={this.state.repos} />}
			</div>
		)
	}
}

module.exports = Popular;

