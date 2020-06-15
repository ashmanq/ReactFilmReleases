import React, { Component } from 'react';
import FilmList from '../components/FilmList.js';

class FilmBox extends Component {
  render() {
    return (
      <div>
        <h1>Upcoming Film Releases</h1>
        <FilmList />
      </div>
    );
  }
};

export default FilmBox;
