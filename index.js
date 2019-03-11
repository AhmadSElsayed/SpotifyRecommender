var sp = require('spotify-web-api-node')
var request = require('request')

var client_id = 'c12ed8a6c3874da7ac31ed2af10a7a85'
var client_secret = '02a365059142471a9ae7411ad0ecda78'
var access_token = ''

var authOptions = {
	url: 'https://accounts.spotify.com/api/token',
	headers: {
		'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
	},
	form: {
		grant_type: 'client_credentials'
	},
	json: true
}
request.post(authOptions, function(error, response) {
	if (!error && response.statusCode === 200) {
		access_token = response.body.access_token
		console.log(access_token)
		var spotifyAPI = new sp()
		spotifyAPI.setAccessToken(access_token)
		spotifyAPI.getArtist('6LuN9FCkKOj5PcnpouEgny').then(
			function(data) {
				console.log('Data:', data.body)
			},
			(err) => {
				console.error(err)
			}
		)  
	}
})


