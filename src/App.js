import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
    	currentTodo: '',
      todos: []
    };
    
    this.onChangeText = this.onChangeText.bind(this);
    this.onSubmitText = this.onSubmitText.bind(this);
    this.reset = this.reset.bind(this);
  }
  
  onChangeText(event) {
    if(event.target.value !== "" || event.target.value !== ' '){
      this.setState({ currentTodo: event.target.value });
    }
  	else event.preventDefault();
	}
  reset(event){
    event.preventDefault();
    this.setState({
      currentTodo: "",
      todos: []
    });
  }
  elimina(inde){
    this.state.todos.splice(inde,1);
    this.setState({
      todos: [...this.state.todos]
    });
  }

  tryElimina(inde){
    document.getElementById(inde).style.textDecoration = "line-through";
    document.getElementById(inde).style.cursor = "pointer";
  }
  backing(inde){
    document.getElementById(inde).style.textDecoration = "";
  }

  onSubmitText(event) {
    if(this.state.currentTodo === ""){
      event.preventDefault()
      return false;
    } 
    //The preventDefault() method stops the default action of an element from happening.
    event.preventDefault()
    this.setState({
      currentTodo: '', //We clean the input text
      todos: [...this.state.todos, this.state.currentTodo]
    });
  }
  
  render() {
    return (
      <div id ="div1">
        <h2>Your personal todo list!</h2>
        <form onSubmit={this.onSubmitText}>
          <input value={this.state.currentTodo} onChange={this.onChangeText} />
          <button>Add</button>
          <button onClick = {this.reset}>reset</button>
        </form>
        <div id="div2">
        <ol>
        {
          this.state.todos.map((todo, index) => <li id={index} onMouseOver = {() => {this.tryElimina(index)}}
           onMouseOut = {() => {this.backing(index)}}  onClick = {() => {this.elimina(index)}} key={index}><hr/><span>{index+1}. {todo}</span></li>) 
        }
        </ol>
        </div>
      </div>
    )
  }
}

