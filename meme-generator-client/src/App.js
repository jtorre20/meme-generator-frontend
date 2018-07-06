import React, { Component } from 'react';
import './App.css';
import Search from './components/Search'
import MemesList from './components/MemesList'
const url = "https://api.imgflip.com/get_memes"


class App extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
      memes: []
    };
  }

  componentDidMount() {
    this.fetchMemes();
  }

  fetchMemes = () => {
    fetch(url)
      .then(resp => resp.json())
      .then(result => this.setState({ memes: result.data.memes }));
        // 
  };


  updateTermSearch = (newSearchTerm) => {
    this.setState({ searchTerm: newSearchTerm })
  }

  filterMemes = () => {
    return this.state.memes.filter(meme => meme.name.toLowerCase().includes(this.state.searchTerm))
      // meme.name.toLowerCase().includes(this.state.searchTerm)
  };
  
  render() {
    return <div className="App">
        <Search updateTermSearch={this.updateTermSearch} />
        <MemesList filterMemes={this.filterMemes()} />
      </div>;
  }
}

export default App;
