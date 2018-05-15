import React, { Component } from 'react';

import API from './API';

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: 'React Image Search',
      searchTerm: '',
      loading: false,
      images: []
    };
  }

  formSubmitted(event) {
    event.preventDefault();

    this.setState({
      loading: true,
      images: []
    });

    API.search(this.state.searchTerm)
      .then(images => {
        this.setState({
          loading: false,
          images
        });
      });
  }

  searchTermChanged(event) {
    this.setState({
      searchTerm: event.target.value
    });
  }

  render() {
    const { title, searchTerm, loading, images } = this.state;

    return (
      <div>
        <h1>{title}</h1>
          <form onSubmit={(event) => this.formSubmitted(event)}>
            <label htmlFor="searchTerm">Search Term</label>
            <input
              onChange={(event) => this.searchTermChanged(event)}
              value={searchTerm}
              className="u-full-width"
              type="text"
              id="searchTerm"
              name="searchTerm" />
            <button type="submit">Search</button>
          </form>
          {loading ? <img alt="Loading..." src="https://i.imgur.com/LVHmLnb.gif" /> : ''}
          <section className="images">
            {images.map(image => {
              return <img key={image.id} alt={image.description} src={image.image_url[0]} />
            })}
          </section>
      </div>
    );
  }
}

export default App;
