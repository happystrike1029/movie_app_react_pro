import React from "react";

class App extends React.Component{
  // constructor(props){
  //   super(props);
  //   console.log("hello");
  // }  
  state = {
      count : 0
    };

    add = () => {
      //console.log("add");
      // this.setState(test => ({count : test.count + 1})); 가능 
      this.setState(current => ({count : current.count + 1}));
    };

    minus = () =>{
      //console.log("minus");
      this.setState(current => ({count : current.count - 1}));
    };

    componentDidMount(){
      console.log("Component rendered");
    }

    componentDidUpdate(){
      console.log("I just Updated");
    }

    componentWillUnmount(){
      console.log("Goodbye, cruel world");
    }

    render(){
      console.log("I'm rendering");
      return(
        <div>
          <h1>The number is :  {this.state.count}</h1>
          <button onClick={this.add}>Add</button>
          <button onClick={this.minus}>Minus</button>
        </div>
      );
    }
}

export default App;
