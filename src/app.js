import React from 'react';
import { render } from 'react-dom'
import ContactsList from './ContactsList'

let contacts = [
  {
    id:1 ,
    name: "Tal",
    phone:'444-3322-121'
  },{
    id:2 ,
    name: "Scott",
    phone:'444-3322-221'
  },{
    id:3 ,
    name: "Bill",
    phone:'444-3522-122'
  },{
    id:4 ,
    name: "Bob",
    phone:'443-3727-541'
  }
];

class App extends React.Component {
  render(){
    return (
      <div>
        <h1>Contact List</h1>
        <ContactsList />
      </div>
    )
  }
}

render(<App contacts={contacts}/>,document.getElementById('app'))
