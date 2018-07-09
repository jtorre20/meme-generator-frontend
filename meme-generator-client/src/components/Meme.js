import React, { Component } from "react";

class Meme extends Component {
  render() {
    return (
      <div>
        {this.props.myMemes.map(meme => {
          return (
            <img
              key={meme.id}
              src={meme.url}
              alt="my-meme"
              className="my-meme-img"
            />
          );
        })}
      </div>
    );
  }
}

export default Meme;
