import React, {Component} from 'react';
import TopTwentyList from '../components/TopTwentyList';

class TopTwentyContainer extends Component {

  constructor() {
    super();
    this.state = {
      topTwenty: []
    };
  }

  componentDidMount() {
  const url= 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.addEventListener('load', () => {
    let data = JSON.parse(xhr.responseText);
    this.setState({
      topTwenty: data.feed.entry
      })
    });
  xhr.send();
  }

  render() {
  return <TopTwentyList topTwentyList={this.state.topTwenty}/>
  }
};

export default TopTwentyContainer;
