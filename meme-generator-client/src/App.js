import React from 'react';
import './index.css';
import { Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import MemesList from "./components/MemesList";
import Meme from './components/Meme';
const url = "https://api.imgflip.com/get_memes";
const newMemeUrl = 'https://api.imgflip.com/caption_image'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      memes: [],
      myMemes: [{
        height: 800,
        id: "112126428",
        name: "Distracted Boyfriend",
        url: "https://i.imgflip.com/1ur9b0.jpg",
        width: 1200
      }],
      memeLimit: 15,
      addMeme: 10,
      text0: '',
      text1: ''
    }
  }

  componentDidMount() {
    this.fetchApi();
    this.fetchFromBackend()
  }

  fetchApi = () => {
    return fetch(url).then(resp => resp.json()).then(result => this.setState({ memes: result.data.memes })
      // 
    )
  }
  fetchFromBackend = () => {
    return fetch("http://localhost:3000/api/v1/memes.json").then(resp=>resp.json()).then(result => console.log(result))
  }
  fetchClickedMeme = (memeId) => {
    fetch(newMemeUrl, {
      method: "POST",
     
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json"
      },
      body: JSON.stringify({
        template_id: memeId,
        username: "kasiarosenb",
        password: "kasiarosenb",
        text0: this.state.text0,
        text1: this.state.text1
      })
    })
      .then(response => response.json())
      .then(result => console.log("posted clicked!", result));
        // this.state.myMemes
  }

  render() {
    return <div>
        <h2>Create Your Own Meme!</h2>
        <Meme myMemes={this.state.myMemes} />
        <h4>
          <i>Insert Some Text Below</i>
        </h4>
        <Form inline>
          <FormGroup>
            <ControlLabel>Top</ControlLabel> <FormControl type="text" onChange={event => this.setState(
                  { text0: event.target.value }
                )} />
          </FormGroup> <FormGroup>
            <ControlLabel>Bottom</ControlLabel> <FormControl type="text" onChange={event => this.setState(
                  { text1: event.target.value }
                )} />
          </FormGroup>
        </Form>
        {this.state.memes
          .slice(0, this.state.memeLimit)
          .map((meme, index) => {
            return <MemesList key={index} meme={meme} text0={this.state.text0} text1={this.state.text1} fetchClickedMeme={this.fetchClickedMeme} />;
          })}
        <div className="meme-button" onClick={() => {
            this.setState({
              memeLimit: this.state.memeLimit + this.state.addMeme
            });
          }}>
          Load {this.state.addMeme} more memes...
        </div>
      </div>;
  }
}

export default App;



// import React, { Component } from 'react';
// import './App.css';
// import Search from './components/Search'
// import MemesList from './components/MemesList'
// import DetailView from './components/DetailView';
// import Meme from './components/Meme'



// const url = "https://api.imgflip.com/get_memes"
// const captionUrl = "https://api.imgflip.com/caption_image";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       searchTerm: "",
//       memes: [],
//       featuredMeme: null,
//       memeText: ''
//     };
//   }

//   componentDidMount() {
//     this.fetchMemes();
//   }
//   fetchCaptionMeme = () => {
//     fetch(captionUrl).then(resp=>resp.json()).then(result => this.setState({featuredMeme: result}))
//   }
//   fetchMemes = () => {
//     fetch(url)
//       .then(resp => resp.json())
//       .then(result => this.setState({ memes: result.data.memes }));
//     //
//   };

//   updateTermSearch = newSearchTerm => {
//     this.setState({ searchTerm: newSearchTerm });
//   };

//   filterMemes = () => {
//     return this.state.memes.filter(meme =>
//       meme.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
//     );
//   };

//   setClickedMeme = (meme) => {
//     this.setState({featuredMeme: meme})
//   }

//   changeMeme(text) {
//     this.setState({
//       memeText: text
//     });
//   }

//   render() {
//     return (
//     <div className="App">
//         <div>
//           <h2>Meme Generator</h2>
//           <input onChange={e => this.changeMeme(e.target.value)}
//             autoFocus="1" />
//           <Meme text={this.state.memeText} />
//         </div>
//     <div>
//       {this.state.featuredMeme ? <DetailView meme={this.state.featuredMeme} /> : null}
//         <Search updateTermSearch={this.updateTermSearch} />
//         <MemesList filterMemes={this.filterMemes()} setClickedMeme={this.setClickedMeme} />
//       </div>
      
//       </div>
//     )
//   }
// }

// export default App;




