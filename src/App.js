import './App.css';
import React, { Component } from 'react';

import UserCard from './userCard';


class App extends Component {
  constructor(){
    super()

    this.state = {
      arrayofUsers: []
     
    }
  }
  componentDidMount(){
  this.fetchData();
   }
   
   fetchData(){
    fetch('https://randomuser.me/api?results=25')
    .then(response => response.json())
    .then(parsedJSON => parsedJSON.results.map(user => (
      {
        name: `${user.name.first} ${user.name.last}`,
        username: `${user.login.username}`,
        email: `${user.email}`,
        location: `${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}`,
        img_url:`${user.picture.thumbnail}`
      }
    )))
    .then(arrayofUsers => this.setState({arrayofUsers, isLoading:false}))
    .catch(error => console.log("parsing failed", error))
   }


   render(){
    const {arrayofUsers} = this.state
    return (
      <div>
        <header>
          <ol>{arrayofUsers.map((arrayofUsers) => {
            return (
                <UserCard key={arrayofUsers.name}  name={arrayofUsers.name} img_url={arrayofUsers.img_url} location={arrayofUsers.location} email={arrayofUsers.email} />
            )
          })}</ol>
        </header>
      </div>
  );
   }
  
}

export default App;
