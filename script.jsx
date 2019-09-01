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
      return (
        <div className="container">
            <h1 className="header mt-5">To Do List App</h1>
            <div className="row form my-5">
                <div className="my-5 pl-4 w-50">
                    <Form receivingInput={(input) => {this.receivingInput(input)}} />
                </div>
            </div>
            <div className="row list my-5">
                <div className="col-8 mt-3 pl-4">
                    <h2>List of Items To Do</h2>
                </div>
                <div className="col-4 mt-3 pr-5 text-right">
                    <h3>Item Count:</h3>
                </div>
                <div className="pl-4">
                    <ul>
                        {this.state.list.map((item,i) => { return <li key={i} className="biggerFont">{item}</li>}) }
                    </ul>
                </div>
            </div>
            <div className="row deleted my-5">
                <div className="my-5 pl-4">
                    <h2>Deleted Items</h2>
                    <ul>

                    </ul>
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

            this.setState({userInput: ""});

        }
    }

    render() {
        return (<div>
            <h3>Type in your task below</h3>
                <input onChange={(event)=>{this.changeHandler(event)}} onKeyDown={(event) => {this.submitHandler(event)}} className="w-100 biggerFont" value={this.state.userInput}/>
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