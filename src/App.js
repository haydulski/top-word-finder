import React from 'react';
import './App.css';

const Answer = (props) => {
  const { top, sec, thi, l1 } = props.data;
  return (
    <div className="answer">
      <div>Top word is: "{top}" <span> *(It appears {l1} times)</span></div>
      {sec !== "" ? <div>Second place takes: "{sec}"</div> : null}
      {thi !== "" ? <div>Third place going to: "{thi}"</div> : null}
    </div>
  )
}
class App extends React.Component {
  state = {
    txt: "",
    flag: false,
    top: "",
    sec: "",
    thi: "",
    l1: 0,
    l2: 0,
    l3: 0,
  }
  handleChange = (e) => {
    this.setState({
      txt: e.target.value,
      flag: false
    })

  }
  handleSub = (e) => {
    e.preventDefault();
    const text = this.state.txt;
    if (text.length === 0) return alert("Please insert text");
    let valids = text.replace(/[^A-Za-zśźżółęą' ]/g, "").toLowerCase()
    let valids2 = valids.split(" ").filter(val => val !== "" && val !== "'")
    const words = new Set(valids2)
    let popular = [{ word: "", amount: 0 }, { word: "", amount: 0 }];
    words.forEach(word => {
      let newarray = valids2.filter(txt => txt === word);
      popular.push({
        word,
        amount: newarray.length
      })
    })
    popular.sort((a, b) => b.amount - a.amount);
    const answer = popular.slice(0, 3)
    // console.log(txt);
    this.setState({
      top: answer[0].word,
      sec: answer[1].word,
      thi: answer[2].word,
      l1: answer[0].amount,
      l2: answer[1].amount,
      l3: answer[2].amount,
      flag: true
    })
  }


  render() {

    return (
      <>
        <h1>Top-word finder</h1>
        <h3>Put below text and search for most popular words in it!</h3>
        <form onSubmit={this.handleSub}>
          <textarea id="txt" placeholder="copy/paste or type your text..." value={this.state.txt} onChange={this.handleChange}></textarea>
          <button>Search</button>
          {this.state.flag ? <Answer data={this.state} /> : null}
        </form>
      </>
    );
  }
}

export default App;
