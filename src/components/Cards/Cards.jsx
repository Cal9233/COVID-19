import React from "react";
import { Cards, CardContent, Typography, Grid } from "@material-ui/core";

const Cards = (props) => {
  console.log(props);

  return (
    <div className={StyleSheet.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography varient="h5">REAL DATA</Typography>
            <Typography color="textSecondary">REAL DATE</Typography>
            <Typography varient="body2">
              NUMBER OF ACTIVE CASES COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
