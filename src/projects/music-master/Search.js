import React, { Component } from 'react';

class Search extends Component {
  state = { artistQuery: '' };

  updateArtistQuery = event => {
    this.setState({ artistQuery: event.target.value });
  };

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.searchArtist();
    }
  };

  searchArtist = () => {
    const { artistQuery } = this.state;
    if (!artistQuery) return;
    this.props.searchArtist(artistQuery);
  };

  render() {
    return (
      <div
        id="heartbeat"
        className="input-group mb-3"
        style={{ maxWidth: '20rem', margin: '0 auto' }}
      >
        <input
          className="form-control"
          onChange={this.updateArtistQuery}
          onKeyPress={this.handleKeyPress}
          placeholder="Search for an Artist"
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-primary"
            onClick={this.searchArtist}
          >
            Search
          </button>
        </div>
      </div>
    );
  }
}

export default Search;
