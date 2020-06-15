import React, { Component } from 'react';
import FilmList from '../components/FilmList.js';
import ButtonLink from '../components/ButtonLink.js';

class FilmBox extends Component {
  render() {
    return (
      <div>
        <h1>Upcoming Film Releases</h1>
        <FilmList />
        <ButtonLink />
      </div>
    );
  }
};

export default FilmBox;
