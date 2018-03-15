import React, { Component } from 'react';
import {Col, WindowRow, /**GridFluid, Row, Grid, WindowGrid*/} from '../lib/index';


export default class HomeIntro extends Component {
  render() {
    return (
      <WindowRow div={1.2} className='align-items-center justify-content-end animated slideInLeft' id='home_intro'>
        <Col xs={12} className='icon'>
          <div className='top text-center'>a sophisticated applicant</div>
          <h1 className='text-center m-0'>TRACKING</h1>
          <div className='down text-center'>software</div>
        </Col>
        <Col xs={12} className='align-self-end text-center word'>
          <a href='https://github.com/DannyMcwaves/ATS' className='pr-2'><i className='fab fa-github'/> Github </a>
          <a href='https://twitter.com/DannyMcwaves' className='pr-2'><i className='fab fa-dochub'/> ats_frontend </a>
          <a href='https://twitter.com/DannyMcwaves' className='pr-2'><i className='fab fa-twitter'/> @DannyMcwaves </a>
          <a href='mailto:dannymcwaves@icloud.com' className='pr-2'><i className='far fa-envelope'/> dannymcwaves </a>
        </Col>
      </WindowRow>
    )
  }
}