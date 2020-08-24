import React,{useState} from 'react';
import {Container,Row,Col,Table } from 'reactstrap';
import {BrowserRouter as Router,Route,Redirect,Switch,NavLink,Link} from 'react-router-dom';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import {Button} from 'react-bootstrap';		


import IndividualStudent from './IndividualStudent';

function IndividualStudentEntry() {
  return (
  
    <div className="IndividualStudentEntry">
    <Router>
    	<div >
        	<div className="Manage" style={{}}><h3>Manage Individual Student</h3></div>
		</div>
		<br></br>
		<div className="Search p-2"style={{backgroundColor:"blue",color:"white"}}>Search Student</div>
		<br></br>
		<form>
	      	<Row>
				<Col lg="3" className="p-1">Search By:</Col>
				<Col lg="3">
					<select className="container p-1">
						<option>Student roll no</option>
						<option>Student name</option>
					</select>
				</Col>
				<Col lg="3"><input type="text" name="user" className="container pt-1"/></Col>
					
      		</Row>
      		<Row>
      			<Col lg="2"></Col>
      			<Col lg="2"></Col>
      			<div className=" offset-md-5">
					<Nav>
                        <NavLink  tag={Link}  to='/IndividualStudent'><br></br><Button>Submit</Button></NavLink>
                    </Nav>      
				</div>
      		</Row>
		</form>


		<Switch>
          <Route exact path="/IndividualStudent" component={IndividualStudent} />
   		</Switch>
    </Router>
  	</div>
  	
  	
  );
}


export default IndividualStudentEntry;
