import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import PropertyCard from './PropertyCard';
import { withRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

//import UploadImagen from './UploadImage';

async function getPropertiesAsync(filters) {
  let response = await fetch(
    'https://team5-rentapp.herokuapp.com/api/apartments/'
  );
  let data = response.json();
  return data;
}

function getPromedio(rates) {
  let promedy = 0;
  if (rates.length > 0) {
    let val = rates.map((rate) => rate.rate);
    let count = val.length;
    let values = val.reduce((previous, current) => (current += previous));
    promedy = Math.round((values /= count) * 10) / 10;
  }
  return promedy;
}

export default class PropertyList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: false,
      properties: [],
    };
  }

  async componentDidMount() {
    let dataProperties = await getPropertiesAsync();
    this.setState({ properties: dataProperties });
  }

  render() {
    return (
      <div className="property-list">
        <Grid container spacing={5} style={{ marginTop: 10 }}>
          {this.state.properties.map((property) => (
            <Grid
              key={property._id}
              item={true}
              itemxs={12}
              sm={6}
              md={4}
              lg={4}
              xl={3}
            >
              <PropertyCard
                key={property._id}
                photo={property.photos[0]}
                bathroom_count={property.bathroom_count}
                bedroom_count={property.bedroom_count}
                commentary_count={property.comments.length}
                valoration={getPromedio(property.rates)}
                price={property.price}
                other_property_details={property.other_details}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}
