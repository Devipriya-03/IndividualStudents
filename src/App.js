//Admin Side Page
import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Collapsible from 'react-collapsible';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import './dist/react-sidenav.css';
import { Navbar,NavbarBrand } from 'reactstrap';
import { Card,CardTitle, CardSubtitle,CardText,Container,Row,Col,Alert,Collapse,Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import {Button,Modal} from 'react-bootstrap';
 

import IndividualStudentEntry from './IndividualStudentEntry';

class App extends React.Component {


  render(){
  return (
    <div className="App">
       <IndividualStudentEntry />
    </div>
  );
}
}

export default App;
