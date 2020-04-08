import React from 'react';
import './App.css';
class App extends React.Component {
  stats = {
    txt: ""
  }
  render() {
    return (
      <>
        <h1>Top-word finder</h1>
        <h3>Place below you text and search for most popular words in it</h3>
        <form >
          <textarea id="txt" cols="30" rows="10" placeholder="copy/paste or type your text..." ></textarea>
          <button>Search</button>
        </form>
      </>
    );
  }
}

export default App;
