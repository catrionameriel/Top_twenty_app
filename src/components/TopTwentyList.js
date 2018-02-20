import React from 'react';
import TopTwentyEntry from '../components/TopTwentyEntry';

const TopTwentyList = (props) => {

  let listItems = props.topTwentyList.map((song, index) => {
    return (
      <TopTwentyEntry key={index} position={index+1} title={song['im:name'].label} artist={song['im:artist'].label} />
    )
  })

  return <div>{listItems}</div>
};

export default TopTwentyList;
