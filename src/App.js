import { useState } from "react";
import "./styles.css";
var emojis = {
  "😊": "Smiling",
  "😀": "Grinning",
  "❤️": "Heart",
  "🤓": "Nerdy",
  "😠": "Angry",
  "😂": "Laughing",
  "🙃": "Upside-Down",
  "😉": "Winking",
  "😙": "Kissing with Smiling",
  "🤨" : "Raised Eyebrows",
  "😪": "Sleepy",
  "🥵": "Hot"


};

var emojisWeKnow = Object.keys(emojis);
export default function App() {
  const [meaning, setMeaning] = useState("");
  function onChangeHandler(event) {
    var userValue = event.target.value;
    var meaning = emojis[userValue];
    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }

    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojis[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <div class="bg">
        <h1 class="headi">Emoji Meanings</h1>
        <input
          onChange={onChangeHandler}
          placeholder="Please input Emoji here"
        ></input>
        <h2>{meaning}</h2>
        <h2 style={{ padding: "0.5rem" }}>Emojis we Know </h2>
        {emojisWeKnow.map(function (emoji) {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              key={emoji}
              style={{
                padding: "0.5rem",
                fontSize: "2rem",
                cursor: "pointer"
              }}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
