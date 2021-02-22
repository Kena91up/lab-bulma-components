import React from 'react';
import ReactDOM from 'react-dom'

import './App.css'
import 'bulma/css/bulma.css';

import Navbar from './navbar/Navbar.js'
import FormField from './formfield/FormField.js'
import CoolButton from './component/CoolButton.js'
import Signup from './Signup/Signup.js'
import Message from './message/Message.js'
const App = () => {
  return (
    <React.Fragment>
    <Navbar/>
    <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
    <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" /> 
    <CoolButton classes="button is-rounded my-class is-small is-danger">Button 1</CoolButton>
    <CoolButton classes="button is-small is-success">Button 2</CoolButton>
    <Signup/>
    <Message title="Hello World">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
        </Message>
    </React.Fragment>
  );
};

export default App;
