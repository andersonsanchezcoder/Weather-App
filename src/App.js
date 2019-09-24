import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import LocationList from './components/LocationList';
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import './App.scss';

const cities = ['Caracas, ve', 'Bogota,col', 'Buenos Aires,ar', 'Madrid, es', 'Lima, pe'];

function App() {

  const handleSelectedLocation = (city) => {
    console.log('bicho tocaron a:', city)
  }

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
      <Row>
        <Col xs={12} md={6}>
          <LocationList 
              cities = { cities }
              onSelectedLocation = { (city)=> handleSelectedLocation(city) }
            />
        </Col>
        <Col xs={12} md={6}>
          <Paper elevation={4}>
            <div className="details"></div>
          </Paper>
        </Col>
      </Row>
    </Grid>
  );

  // Ejemplo de react flexbox grid
  // return(
  //   <Grid fluid>
  //       <Row around="xs">
  //         <Col xs={2}>
  //           <div className="red"></div>
  //         </Col>
  //         <Col xs={2}>
  //           <div className="green"></div>
  //         </Col>
  //         <Col xs={2}>
  //           <div className="blue"></div>
  //         </Col>
  //         <Col xs={2}>
  //           <div className="yellow"></div>
  //         </Col>                             
  //       </Row>
  //     </Grid>
  // );
}

export default App;
