import React from "react";

const App = () => {
  function btnClicked() {
    console.log("button is clicked");
  }
  const inputChanging = (val) => {
    console.log(val);
  };

  return (
    <div>
      <h1>Hello, Sunny</h1>
      <button onDoubleClick={btnClicked}>Change User</button>
      <input
        onChange={function (elem) {
          inputChanging(elem.target.value);
        }}
        type="text"
        placeholder="enter your name"
      />
    </div>
  );
};

export default App;
