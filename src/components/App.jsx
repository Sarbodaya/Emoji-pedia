import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia"


function createCard(emojiPedia) {
  return (
    <Card
      key={emojiPedia.id}
      emoji={emojiPedia.emoji}
      name={emojiPedia.name}
      meaning={emojiPedia.meaning}
    />
  );
}



function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(createCard)}
      </dl>
    </div>
  );
}

export default App;
