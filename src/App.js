import React from 'react';
import axios from "axios";
import User from "./components/user";

const api = "https://5f22f8cf0e9f660016d88b17.mockapi.io/";
const usersAPI = `${api}users`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }


componentDidMount() {
  axios.get(usersAPI).then(({data}) => {
    this.setState({users: data});
  });
}
componentDidUpdate() {
  
}
render() { 
  const {users} = this.state;
  return  <ul>{users.length > 0 ? "users" : "no users found "}</ul>
}
}
export default App;
