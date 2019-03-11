import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
import requests

client_credentials_manager = SpotifyClientCredentials(client_id='c12ed8a6c3874da7ac31ed2af10a7a85', client_secret='02a365059142471a9ae7411ad0ecda78')
sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)

results = sp.track('5WHTFyqSii0lmT9R21abT8')
print(results)

token = client_credentials_manager.get_access_token()

analysis = requests.get('https://api.spotify.com/v1/audio-analysis/5WHTFyqSii0lmT9R21abT8', headers={'Authorization': 'Bearer ' + token})
print(analysis.content)
features = requests.get('https://api.spotify.com/v1/audio-features/5WHTFyqSii0lmT9R21abT8', headers={'Authorization': 'Bearer ' + token})
print('\n', features.content)