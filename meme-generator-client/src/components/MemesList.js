import React from "react";
import MemesListItem from './MemesListItem'

const MemesList = props => {
    // console.log("props", props.meme.name)
  return <div>
      {props.filterMemes.map(meme => ( <MemesListItem meme={meme} key={meme.id} />
      ))}
    </div>;
};

export default MemesList; 



