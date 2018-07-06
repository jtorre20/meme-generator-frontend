import React from "react";

const MemesListItem = props => {
  return (
    <div>{props.meme.name}
      <img src={props.meme.url} />
      
      
      
      </div>
  )
};

export default MemesListItem;
