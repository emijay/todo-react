class List extends React.Component {
    constructor(){
        super()

        this.state = {
            list : []
        }
    }

    // addItem(){
    //   // debugger;
    //   let newList = this.state.list;
    //   let newWord = this.state.word.trim();
    //   newList.push(newWord)
    //   this.setState({list:newList});
    //   console.log(this.state.list)
    // }

    // changeHandler(event){
    //   // debugger;
    //   let newWord = this.state.word;
    //   newWord = event.target.value;
    //   this.setState({word:newWord});
    //   // console.log(this.state.word);

    // }

    receivingInput = (input) => {

        let newList = this.state.list;
        newList.push(input)
        this.setState({list:newList});

    }

    render() {

      console.log("rendering");
      console.log(this.state.list);
      return (
        <div className="container">
            <div className="row">
                <div className="list my-5">
                    <h1>To Do List</h1>
                    <Form receivingInput={(input) => {this.receivingInput(input)}}/>
                    <div className="my-3">
                        <h2>List of Items To Do</h2>
                        <ul>
                            {this.state.list.map((item,i) => { return <li key={i}>{item}</li> }) }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      );
    }
}

class Form extends React.Component {
    // Form component contains an input that the user enters
    constructor(){
        super();

        this.state = {
            userInput:""
        }
    }

    changeHandler(event){

        let newInput = this.state.userInput;
        newInput = event.target.value;
        this.setState({userInput:newInput});
    }

    submitHandler(event) {
        // line below is when the user presses the "Enter" key
        if (event.keyCode === 13) {
            this.props.receivingInput(this.state.userInput);
        }
    }

    render() {
        return (<div>
            <h1>Type in your task below</h1>
                <input onChange={(event)=>{this.changeHandler(event)}} onKeyDown={(event) => {this.submitHandler(event)}}/>
            </div>);
    }
}


console.log("calling react dom render");
ReactDOM.render(
    <div>
        <List/>
    </div>,
    document.getElementById('root')
);

console.log("finished with react dom render");