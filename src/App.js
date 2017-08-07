import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RequirementList from './requirement-list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      data: []
    };
  };

  addTodo(element) {
    const {data} = this.state;
    data.push({ id: data.length + 1, text: element });
    this.setState({data})
  };

  onChange = (event) => {
    this.setState({text: event.target.value});
  }

  onClick = (event) => {
    if (this.state.text) {
      this.addTodo(this.state.text);
      this.setState({text: ''});
    }
  };

  render() {
    let input;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Tenant checklist</h2>
        </div>
        <div className="main">
          <div>
              <label htmlFor="todo">Must have: </label>
              <input type="text" id="todo" value={this.state.text} onChange={this.onChange}/>
              <button type="submit" onClick={this.onClick}>+</button>
          </div>
          <hr/>
          <ul>
            <RequirementList list={this.state.data}/>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
