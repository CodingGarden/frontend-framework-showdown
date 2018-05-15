const API_URL = 'https://api.500px.com/v1/photos/search?type=photos&image_size%5B%5D=14&consumer_key=your-api-key-here&include_states=true&formats=jpeg&exclude_nude=true';

export default {
  search(searchTerm) {
    const url = `${API_URL}&term=${searchTerm}`;
    return fetch(url)
      .then(response => response.json())
      .then(result => result.photos);
  },
};
