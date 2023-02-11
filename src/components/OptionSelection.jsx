import React from "react";

export default function OptionSelection({ arrayItems, selectOption }) {
  return (
    <>
      <h1 className="heading">AI Solver ✔</h1>   

      <div className="grid-main">
        {arrayItems.map((item) => {
          return (
            <div
              className="grid-child"
              onClick={() => selectOption(item.option)}
              key={item.name}
            >
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>

      <div className="grid-pic">
        <div onClick={() => window.location.href = "https://your-example-pics.netlify.app.example"}>              
          <h3>Picture Generator</h3>
          <p>create a random generated picture by using a good defined prompt.</p>
        </div>
      </div>
    </>
  );
}
