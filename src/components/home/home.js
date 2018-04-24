import React, { Component } from 'react';
import {Col, WindowRow, GridFluid, Row, Grid, WindowGrid, WindowGridFluid} from '../lib/containers';
import {connect} from 'react-redux';
import './home.scss';
import image from '../../images/archive.svg';
// import {Parallax} from 'react-parallax';
import Button from 'material-ui/Button';
import {ArrowDownward} from '@material-ui/icons';

class Homepage extends Component {

  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    return (
      <Row className='main'>

        <div id='main1' className={'col-12'}>
          <WindowRow div={1.15} id='content' className="justify-content-end animated fadeIn">
            <Col xs={12} className=''>
              <GridFluid>
                <WindowRow div={1.15} className="justify-content-start">
                  <Col className="align-self-center pl-5 intro text-left animated slideInLeft">
                    <div className="name text-left"> <img src={image} alt="home icon" width="25px" height="25px" /> Applicant Tracking Software </div>
                    <h1 className="p-0 m-0">JOB APPLICANT</h1>
                    <h5 className="p-0 m-0">AND REQUIREMENTS ANALYTICS SOLUTIONS</h5>
                  </Col>
                  <Col sm={6} className="align-self-end order-md-8 animated text-right slideInUp">
                    <Button variant='fab' className="fabButts" color='secondary'> <ArrowDownward/> </Button>
                  </Col>
                </WindowRow>
              </GridFluid>
            </Col>
          </WindowRow>
          <WindowRow id='main2' className="justify-content-center align-items-center animated fadeIn">
            <WindowGridFluid>
              <WindowRow id='header'>
                this is a row.
              </WindowRow>
            </WindowGridFluid>
          </WindowRow>
        </div>

      </Row>
    )
  }

}

export default connect()(Homepage);
