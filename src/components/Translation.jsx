import React, { useState } from "react";

export default function Translation({ doStuff, setInput, result, reset, isLoading }) {
  const [copySuccess, setCopySuccess] = useState("");

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopySuccess("Copied!");
  };

  return (
    <div>
      <textarea
        className="text-area"
        placeholder="give me your assignment and specify what you want..."
        onKeyUp={(e) => {
          if (e.keyCode === 13) {
            doStuff();
          }
        }}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <button className="back-btn" onClick={reset}>⫷back</button>
      <button className="copy-btn" onClick={() => copyToClipboard(result)}>
        Copy
      </button>
      <button className="action-btn" onClick={doStuff}>Solve!</button>
      {isLoading ? <div className="loading">Loading...</div> : null}
      <textarea className="result-text" value={result.length > 0 ? result : ""} readOnly />
      {copySuccess}
    </div>
  );
}
