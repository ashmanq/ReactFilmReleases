import React, { Component, Fragment } from 'react';
import Film from './Film.js';

class FilmList extends Component {

  render() {
    return (
      <Fragment>
        <Film></Film>
        <Film></Film>
      </Fragment>
    );
  }
};

export default FilmList;
