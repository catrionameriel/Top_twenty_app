import React from 'react';

const TopTwentyEntry = (props) => {
  console.log(props);
  return <p>{props.position}. {props.title} {props.artist}</p>
};

export default TopTwentyEntry;
