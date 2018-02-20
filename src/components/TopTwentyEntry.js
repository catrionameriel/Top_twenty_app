import React from 'react';

const TopTwentyEntry = (props) => {
  console.log(props.img[0].label);

  return (
    <div>
      <img src={props.img[0].label} alt={props.artist}/>
      <p>{props.position}. {props.title} {props.artist}</p>
    </div>
  )
};

export default TopTwentyEntry;
