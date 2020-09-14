import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

import { withRouter } from 'react-router-dom';

async function getCitiesAsync() {
  let response = await fetch(
    'https://team5-rentapp.herokuapp.com/api/apartments/cities'
  );
  let data = response.json();
  return data;
}

class PropertySearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterActive: false,
      cities: [],
      city: undefined,
      precioMin: undefined,
      precioMax: undefined,
      tipoInmueble: undefined,
      bedroom_count: undefined,
    };
  }

  handleChangeCity(e) {
    this.setState({ city: e.target.value, filterActive: true });
  }

  handleChangePrecioMin(e) {
    this.setState({ precioMin: e.target.value, filterActive: true });
  }

  handleChangePrecioMax(e) {
    this.setState({ precioMax: e.target.value, filterActive: true });
  }

  handleChangeTipoInmueble(e) {
    this.setState({ tipoInmueble: e.target.value, filterActive: true });
  }

  handleChangeBedroomCount(e) {
    this.setState({ bedroom_count: e.target.value, filterActive: true });
  }

  handleClickBuscar(e) {
    this.props.callbackFromParent(this.state);
  }

  async componentDidMount() {
    let dataCities = await getCitiesAsync();
    this.setState({ cities: dataCities });
  }

  render() {
    return (
      <div
        style={{
          display: 'flex-wrap',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <FormControl style={{ marginLeft: 20, spacing: 3, minWidth: 170 }}>
          <InputLabel id="select-lblCiudad">Ciudad</InputLabel>
          <Select
            labelId="select-lblCiudad"
            id="select-ciudad"
            value={this.state.city}
            onChange={this.handleChangeCity.bind(this)}
          >
            {this.state.cities.map((ciudad) => (
              <MenuItem key={ciudad.city} value={ciudad.city}>
                {ciudad.city}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          style={{ marginLeft: 20 }}
          label="Precio Min."
          value={this.state.precioMin}
          onChange={this.handleChangePrecioMin.bind(this)}
          name="numberformat"
          id="formatted-numberformat-input"
        />
        <TextField
          style={{ marginLeft: 20 }}
          label="Precio Max."
          value={this.state.precioMax}
          onChange={this.handleChangePrecioMax.bind(this)}
          name="numberformat"
          id="formatted-numberformat-input"
        />
        <FormControl style={{ marginLeft: 20, spacing: 3, minWidth: 170 }}>
          <InputLabel id="select-lblTipoInmueble">Tipo de Inmueble</InputLabel>
          <Select
            labelId="select-lblTipoInmueble"
            id="select-inmueble"
            value={this.state.tipoInmueble}
            onChange={this.handleChangeTipoInmueble.bind(this)}
          >
            <MenuItem value={'Casa'}>Casa</MenuItem>
            <MenuItem value={'Departamento'}>Departamento</MenuItem>
            <MenuItem value={'Casa de Campo'}>Casa de Campo</MenuItem>
          </Select>
        </FormControl>
        <TextField
          style={{ marginLeft: 20 }}
          label="Dormitorios"
          value={this.state.bedroom_count}
          onChange={this.handleChangeBedroomCount.bind(this)}
          name="numberformat"
          id="formatted-numberformat-input"
        />
        <Button
          style={{ marginLeft: 20, marginTop: 10 }}
          variant="contained"
          color="primary"
          onClick={this.handleClickBuscar.bind(this)}
          endIcon={<SearchIcon>BUSCAR</SearchIcon>}
        >
          buscar
        </Button>
      </div>
    );
  }
}

export default withRouter(PropertySearchBar);
