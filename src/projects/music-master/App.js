import React, { Component } from 'react';
import Search from './Search';
import Result from './Result';
import Loader from './Loader';

import { getLocalItem, setLocalItem } from '../../utils';

const API_ADDRESS = 'https://spotify-api-wrapper.appspot.com';

class App extends Component {
  state = { artist: null, tracks: [], loading: true, error: null };

  componentDidMount() {
    if (getLocalItem('tracks')) {
      this.loadLocalStorageItems();
    } else {
      this.searchArtist('moderat');
    }
  }

  loadLocalStorageItems = () => {
    this.setState({
      artist: getLocalItem('artist'),
      tracks: getLocalItem('tracks'),
      loading: false
    });
  };

  searchArtist = async artistQuery => {
    try {
      this.setState({ loading: true });
      const resposnse = await fetch(`${API_ADDRESS}/artist/${artistQuery}`);
      const { artists } = await resposnse.json();

      if (artists.items.length === 0)
        return this.setState({ loading: false, error: 'No results' });

      if (artists.total > 0) {
        const artist = artists.items[0];
        this.setState({ artist, error: null }, setLocalItem('artist', artist));

        const response = await fetch(
          `${API_ADDRESS}/artist/${artist.id}/top-tracks`
        );
        const { tracks } = await response.json();

        this.setState(
          { tracks, loading: false },
          setLocalItem('tracks', tracks)
        );
      }
    } catch (error) {
      this.setState({ loading: false, error: error.message });
    }
  };

  render() {
    const { error, loading, artist, tracks } = this.state;
    if (loading) return <Loader />;

    return (
      <div>
        <h2>Music Master</h2>
        <Search searchArtist={this.searchArtist} />
        {!!error ? (
          <div>{error}. Please try again later.</div>
        ) : (
          <Result artist={artist} tracks={tracks} />
        )}
      </div>
    );
  }
}

export default App;
