import React, { Component } from 'react';
// import img from 'img/'

import reactStringReplace from "react-string-replace";

const regExp = /(https?:\/\/\S+)/g;

class App extends Component {
  constructor() {
    super() 
    this.state = {
      initialItem: [
        "あおい",
        "青い",
        "apple",
        "1",
        "2",
        "mike",
        "dog",
        "cat",
        "iphone",
        "book"
      ],
      items: []
    }
  }

  componentDidMount() {
    this.setState({items: this.state.initialItem})
  }

  filterList = (e) => {
    const updateList = this.state.initialItem.filter((item) => {
      return item.toLowerCase().search( e.target.value.toLowerCase()) !== -1;
    })
    this.setState({items: updateList})
  }

  render() {
    return (
      <div>
        <form action="">
          <input type="text" placeholder="search" onChange={this.filterList}/>
        </form>
        <div>
          {this.state.items.map((item, index) => {
            return (
              // <li key={index}>{item}</li>,
              // <p>
              //   <a href={item}>{item}</a>
              //   </p>

              // <p>
              // { {reactStringReplace(item, regExp, (item, i) => ( }
                // { <a onclick="alert('Yo!')" href={item}>{item}</a> }
              // { ))} }
            // </p>


                <div className="App">
                <header className="App-header">
                  <img src={"img/"+item+".png"} className="App-logo" alt="logo" />
                  <p>
                    Edit <code>src/App.js</code> and save to reload.
                  </p>
                  <a
                    className="App-link"
                    // href="https://reactjs.org"
                    href={"img/"+item}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                   {item}
                  </a>
                </header>
                </div>
            )  
          })}
        </div>
      </div>
    );
  }
}

export default App;
