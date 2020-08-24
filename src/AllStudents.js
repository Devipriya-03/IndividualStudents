import React from 'react';
import {Container,Row,Col,Button,Card,Table} from 'reactstrap';
import {DoubleRangeSlider} from './DoubleRangeSlider';
import {RangeSlider} from './Tenth';
import {Twelve} from './twelve';
import {Backlogs} from './Backlogs';


import Degree from './comp/degree';
import Branch from './comp/branch';
import Batch from './comp/batch';
import SortBy from './comp/sortby';
import Gender from './comp/gender';
import EligibleJobs from './comp/ejobs';
import Jobs from './comp/jobs';

// style={{maxHeight:'250px', overflow:'scroll'}}>
class AllStudents extends React.Component{
    render(){
        return(
            <Container fluid>
                <Row>
                    <Col class="Heading">
                    Manage Students
                    </Col>
                </Row>
                <Row style={{backgroundColor:"blue",color:"white"}}>
                    <Col xs="6" className="p-2">
                        <div>Search Filter</div>
                    </Col>
                    <Col xs="6" className="p-2">
                        <div align="right">Total Students:</div>
                    </Col>
                </Row>
                <Row style={{backgroundColor:"white"}}>
                    <Col>
                        <form>
                            <Row class="p-2" style={{marginTop:5}}>
                                <Col style={{fontSize:15}}>Education Filter</Col>
                            </Row>
                            <hr style={{margin:2}}></hr>
                            <Row>   
                                <Col lg="4" md="6" xs="12">
                                    <Row>
                                        <Col>Degree</Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Degree />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg="4" md="6" xs="12">
                                    <Row>
                                        <Col xs="12">Branch</Col>
                                    </Row>
                                    <Row>
                                        <Col xs="12">
                                            <Branch />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg="4" md="6" xs="12">
                                    <Row>
                                        <Col>CGPA(<span id="CGPA">0</span>-10)</Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <DoubleRangeSlider/>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row class="p-2" style={{marginTop:5}}>
                                <Col style={{fontSize:15}}>Other Filter</Col>
                            </Row>
                            <hr style={{margin:2,marginBottom:4}}></hr>
                            <Row>
                                <Col lg="2" md="4" xs="12">
                                    Batch
                                </Col>
                                <Col lg="4" md="8" xs="12">
                                    <Batch />
                                </Col>
                                    <Col lg="2" md="4" xs="12">
                                        Sort By
                                    </Col>
                                    <Col lg="4" md="8"  xs="12">
                                        <SortBy />
                                    </Col>
                                </Row>
                                <br></br>
                                <Row>
                                    <Col lg="2" md="4" xs="12">
                                        Gender
                                    </Col>
                                    <Col lg="4" md="8" xs="12">
                                        <Gender />
                                    </Col>
                                    <Col lg="2" md="4" xs="12">
                                        Eligible For Job
                                    </Col>
                                    <Col lg="4" md="8" xs="12">
                                        <EligibleJobs />
                                    </Col>
                                </Row>
                                <br></br>
                                <Row>
                                    <Col lg="2" md="4" xs="12">
                                        Jobs In Hand
                                    </Col>
                                    <Col lg="4" md="8" xs="12">
                                        <Jobs />
                                    </Col>
                                    <Col>
                                    </Col>
                                    <Col>
                                    </Col>
                            </Row>
                            <Row class="p-2" style={{marginTop:5}}>
                                <Col style={{fontSize:15}}>Other Filter</Col>
                            </Row>
                            <hr style={{margin:2,marginBottom:4}}></hr>
                            <Row>
                                <Col lg="1" md="6" xs="12" className="p-2 pl-4">
                                    10th
                                </Col>
                                <Col lg="5" md="6" xs="12">
                                    <RangeSlider className="container"/>
                                </Col>
                                <Col lg="1" md="6" xs="12" className="p-2 pl-4">
                                    12th
                                </Col>
                                <Col lg="5" md="6" xs="12">
                                    <Twelve className="container"/>
                                </Col>
                            </Row>
                            <br></br>
                            <Row>
                                <Col lg="2" md="6" xs="12" className="p-2 pl-4">
                                    Backlogs
                                    (never)
                                </Col>
                                <Col lg="5" md="6" xs="12">
                                    <Backlogs/>
                                </Col>  
                                <Col></Col>
                                <Col></Col>
                            </Row>
                        </form> 
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default AllStudents;