var axios = require('axios');

// Needs following info from Github api to check if error occur, maybe cause by ran out of request.
var id = "YOUR_CLIENT_ID";
var sec = "YOUR_SECRET_ID";
var params = "?client_id=" + id + "&client_secret=" + sec;

// Function to getProfile;
function getProfile (username) {
	// when you get the result object from axios, then run .then with function.
	return axios.get('https://api.github.com/users/' + username + params).then(function (user) {
      return user.data;
    });
}

// Function to getRepos
function getRepos (username) {
  return axios.get('https://api.github.com/users/' + username + '/repos' + params + '&per_page=100');
}


// Function to getStarCount
function getStarCount (repos) {
  return repos.data.reduce(function (count, repo) {
    return count + repo.stargazers_count
  }, 0);
}

// Function to calculate score
function calculateScore (profile, repos) {
  var followers = profile.followers;
  var totalStars = getStarCount(repos);

  return (followers * 3) + totalStars;
}

// Function to handle error
function handleError (error) {
  console.warn(error);
  return null;
}

// Function to get all the data asynchronously
function getUserData (player) {
  return axios.all([
    getProfile(player),
    getRepos(player)
  ]).then(function (data) {
    var profile = data[0];
    var repos = data[1];

    return {
      profile: profile,
      score: calculateScore(profile, repos)
    }
  });
}

// Function sort score
function sortPlayers (players) {
  return players.sort(function (a,b) {
    return b.score - a.score;
  });
}

module.exports = {
	battle: function(players) {
		return axios.all(players.map(getUserData)).then(sortPlayers).catch(handleError);
	},
	fetchPopularRepos: function(language) {
		// encodeURI transfer human readable code into actual URL
		var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+ language + '&sort=stars&order=desc&type=Repositories');

		return axios.get(encodedURI)
		 .then(function (response) {
			 return response.data.items;
		 });
	}
}
