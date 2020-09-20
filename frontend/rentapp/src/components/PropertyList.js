import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropertyCard from './PropertyCard';
import { Redirect, Link } from 'react-router-dom';

//import UploadImagen from './UploadImage';

async function getPropertiesAsync(filter) {
  console.log('se hizo una llamada con los filtros', filter);

  let response = await fetch('http://localhost:4000/api/apartments/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(filter),
  });
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
      filters: undefined,
      properties: [],
      selectedProperty: undefined,
    };
  }

  async componentDidMount() {
    let dataProperties = await getPropertiesAsync();
    this.setState({ properties: dataProperties });
  }

  async componentWillReceiveProps(nextProps) {
    let filters = nextProps ? nextProps.value : {};
    let dataProperties = await getPropertiesAsync(filters);
    console.log(dataProperties);
    this.setState({ properties: dataProperties });
  }

  ChangeSelectedProperty = (a) => {
    this.setState({ selectedProperty: a });
  };

  render() {
    if (this.state.selectedProperty !== undefined) {
      this.props.changeProperty(this.state.selectedProperty);
      return (
        <Redirect
          to={'/filteredProperty/' + this.state.selectedProperty}
        ></Redirect>
      );
    } else {
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
                  key={property._id + ''}
                  id={property._id}
                  photo={property.photos[0]}
                  bathroom_count={property.bathroom_count}
                  bedroom_count={property.bedroom_count}
                  commentary_count={property.comments.length}
                  valoration={getPromedio(property.rates)}
                  price={property.price}
                  other_property_details={
                    property.other_details
                      ? property.other_details.substring(0, 100) + '...'
                      : ''
                  }
                  selectProperty={this.ChangeSelectedProperty}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      );
    }
  }
}
