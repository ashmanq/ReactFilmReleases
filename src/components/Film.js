import React from 'react';

const Film = (props) => {
    return (
      <li>
        <a className = "item" href={props.film.url}>{ props.film.name }</a>
      </li>
    );
};

export default Film
