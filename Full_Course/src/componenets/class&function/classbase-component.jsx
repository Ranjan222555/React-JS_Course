import { Component } from "react";

class Classbasecomponent extends Component {
  // state
  state = {
    // showtext: false,
    // changecolour: false,
  };

  buttonclicked = () => {
    console.log("Clicked");
    //this is not recommended
    // this.state.showtext = !this.state.showtext
    const { showtext, changecolour } = this.state;

    this.setState({
      showtext: !showtext,
      changecolour: !changecolour,
    });
  };

//   componentDidMount
//   componentDidUpdate
//   componentWillUnmount
// componentDidMount(){
    // console.log("this is first relod");
    // this.setState({
    //     showtext : !this.state.showtext,
    //     changecolour : !this.state.changecolour
    // })
    // alert("hay Ranjan")
    // prompt("hay Ranjan")
// }
// componentWillUnmount(){
//     console.log("willunmount");
// }


  render() {

    // console.log(this.state.showtext); // uotput true if only this.state output is boj of the state
    const { showtext, changecolour } = this.state;
    return (
      <div>
        {showtext ? (
          <h2 style={{ color: changecolour ? "red" : "black" }}>
            hello there this is class base components
          </h2>
        ) : null}

        <button onClick={this.buttonclicked}>Toggle Text</button>
      </div>
    );
  }
  
}
export default Classbasecomponent;
