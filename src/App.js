import React from 'react';
import axios from "axios";
import User from "./components/User";

const api = "https://5f22f8cf0e9f660016d88b17.mockapi.io/queries";
const usersAPI = `${api}users`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }


componentDidMount() {
  axios.get(usersAPI).then(({data}) => {
    console.log(data);
  });
}
componentDidUpdate() {
  
}
render() {
return ( 
  <ul>{this.state.counter}</ul>)
}
}
export default App;
