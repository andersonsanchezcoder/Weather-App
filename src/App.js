import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';
import './App.scss';

const cities = ['Caracas, ve', 'Bogota,col', 'Buenos Aires,ar', 'Madrid, es', 'Lima, pe'];

class App extends Component {
  
  render(){
    return (
      <Grid fluid>
        <Row>
          <AppBar position="sticky">
            <Toolbar>
              <Typography variant="h5" color="inherit">
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row className="main-content">
          <Col xs={12} md={6}>
            <LocationListContainer cities = { cities } />
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="details">
                <ForecastExtendedContainer/> 
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    )};
}

export default App;
