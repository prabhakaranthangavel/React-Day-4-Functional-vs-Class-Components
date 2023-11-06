// 1.Functional vs Class Component

// Functional Component
// import React from 'react'

// function App() {
//   return (
//     <div>Welcome To Our React World</div>
//   )
// }

// export default App

// Class Component
// import React, { Component } from 'react'

// class App extends Component {
//   render(){
//   return (
//     <div>Welcome To Our React World</div>
//   )
// }
// }
// export default App

// *************************************************************************************************************************

// 2.Creating a multiple class component

// import React, { Component } from 'react'

// class Hello extends Component {
//   render() {
//     return (
//       <p>Multiple Components Creating in React Class</p>
//     )
//   }
// }

// class App extends Component {
//   render(){
//   return (
//     <div>
//       <Hello/>
//     </div>
//   )
// }
// }
// export default App

// *************************************************************************************************************************

// 3.passing props Functional & Class Component

// Functional Component passing props
// import React from 'react'

// function Hello({name}) {
//   return (
//    <p>Multiple Components Creating in React Class So Welcome To {name}</p>
//   )
// }

// function App() {
//   return (
//     <div>
//       <Hello name ="Mr.Dhoni"/>
//     </div>
//   )
// }

// export default App

// Class Component passing props
// import React, { Component } from 'react'

// class Hello extends Component {
//   render() {
//     // console.log(this.props);
//     const {name} = this.props;
//     return (
//       <p>Multiple Components Creating in React Class So Welcome To {name}</p>
//     )
//   }
// }

// class App extends Component {
//   render(){
//   return (
//     <div>
//       <Hello name = "Mr.Dhoni"/>
//     </div>
//   )
// }
// }
// export default App

// *************************************************************************************************************************

// 4.Component life cycle

// import React, { Component } from 'react'

// export class App extends Component {

// // componentDidMount : called after the component has been rended to the DOM.
// componentDidMount () {
// console.log("Component Mounted")
// }

// // componentDidUpdate : called immediately after the component updated in the DOM.
// // called on state or prop changes.
// componentDidUpdate () {
// console.log("Component DidUpdated")
// }

// // componentWillUnmount : invoked just before the component is removed from the DOM.
// // releasing memory of resources
// // the detaching the events
// // cancelling timers
// componentWillUnmount () {

//   console.log("Component WillUnmounted")
// }

//   render() {
//     return (
//       <div>App</div>
//     )
//   }
// }

// export default App

// *************************************************************************************************************************

// 5.state

// ===>State refers to the data.

// How to pass data through state using class component
// எப்படி class component ஐ பயன்படுத்தி state மூலமாக data ஐ pass செய்தல்

import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props); // To call the parent class constructor [parent ன் உடைய class constructor ஐ நாம் call செய்வதற்கு அல்லது பெறுவதற்கு super என்ற keyword ஐ பயன்படுத்துகிறோம்.]

    // define the state
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    
    // Update the state(data) of the count
    this.setState({
      
    // provide the new state
    count: this.state.count + 1,

    });
  };

  decrement = () => {
    
    // Update the state(data) of the count
    this.setState({
      
    // provide the new state
    count: this.state.count - 1,

    });
  };

  reset = () => {
    
    // Update the state(data) of the count
    this.setState({
      
    // provide the new state
    count: this.state.count = 0, // or count : 0,

    });
  };

  render() {
    return (
      <div>
        <p>count : {this.state.count}</p>
        <button onClick={this.increment}>Add the count</button>
        <button onClick={this.decrement}>Reduce the count</button>
        <button onClick={this.reset}>Reset All</button>
      </div>
    );
  }
}

export default App;
