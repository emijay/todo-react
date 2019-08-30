class List extends React.Component {
  constructor(){
    super()

    this.state = {
      word:"",
      list : []
    }
  }

  addItem(){
    // debugger;
    let newList = this.state.list;
    let newWord = this.state.word.trim();
    newList.push(newWord)
    this.setState({list:newList});
    console.log(this.state.list)
  }

  changeHandler(event){
    // debugger;
    let newWord = this.state.word;
    newWord = event.target.value;
    this.setState({word:newWord});
    // console.log(this.state.word);

  }

  render() {
      // render the list with a map() here
      let item =

      console.log("rendering");
      return (
        <div className="list my-3">
        <h1>To Do List</h1>
          <input onChange={()=>{this.changeHandler(event)}} value={this.state.word}/>
          <button onClick={()=>{this.addItem()}}>add item</button>
          <div className="my-3">
            <h2>List of Items To Do</h2>
              <ul>
                {this.state.list.map(item => { return <li>{item}</li> }) }
              </ul>
          </div>
        </div>
      );
  }
}

ReactDOM.render(
    <List/>,
    document.getElementById('root')
);