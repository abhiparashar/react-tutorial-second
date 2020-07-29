import React, { Component } from "react";
import { name, age, person } from "./data";
import Banner from "../src/components/header/Banner";
// import * as data from './data'

// const App = () => (
//   <div>
//     <Banner/>
//     <p>This is my content</p>
//     <p>{name}</p>
//     <p>{age}</p>
//     <p>{person.name}</p>
//   </div>
// )

// const App  = ()=> (
//   <div>
//     <p>This is my content</p>
//     <p>{data.name}</p>
//     <p>{data.age}</p>
//     <p>{data.person.name}</p>
//   </div>
// )

//Class based components
class App extends Component {
  render() {
    return (
      <div>
        <Banner />
        <p>This is my content</p>
        <p>{name}</p>
        <p>{age}</p>
        <p>{person.name}</p>
      </div>
    );
  }
}

export default App;
