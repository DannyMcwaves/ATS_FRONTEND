import React, { Component } from 'react';
import {Col, WindowRow, GridFluid, Row, Grid, WindowGrid} from '../lib/index';
import {connect} from 'react-redux';
import {Link, Route} from 'react-router-dom';
import HomeIntro from './home_intro';
import HomeLogin from './home_login';
import HomeSignup from './home_signup';
import './home.scss';

class Homepage extends Component {

  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    return (
      <div className='main'>

        <WindowRow id='main1' className="justify-content-end animated fadeIn">
          <Col xs={12} className='' id='content'>
            <GridFluid>
              <WindowRow>
                <Grid>
                  <Row className='pt-3 justify-content-between'>
                    <Col>
                      <Link to='/'><i className='fab fa-accusoft'/>
                        <span className='pl-3'>Applicant Tracking Software</span>
                      </Link>
                    </Col>
                    <Col className='userActions'>
                      <Link to='/login'><button className='btn btn-sm btn-danger'>login</button></Link>
                      <Link to='/signup' className='ml-4'><button className='btn btn-sm btn-danger'>signup</button></Link>
                    </Col>
                  </Row>
                </Grid>
                <WindowGrid div={1.2}>
                  <Route exact path='/' component={HomeIntro} />
                  <Route exact path='/login' component={HomeLogin}/>
                  <Route exact path='/signup' component={HomeSignup}/>
                </WindowGrid>
              </WindowRow>
            </GridFluid>
          </Col>
        </WindowRow>

        <WindowRow id='main2' className="justify-content-center align-items-center animated fadeIn">
          <Grid id='header'>
            <Row>
              this is a row.
            </Row>
          </Grid>

        </WindowRow>
      </div>
    )
  }

}

export default connect()(Homepage);
