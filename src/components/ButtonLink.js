import React from 'react';


const ButtonLink = (props) => {
  const className = "button";
    return (
      <a className = { className } href={props.link.url}>{ props.link.title }</a>
    );
};


export default ButtonLink;
