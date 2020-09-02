import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import { green } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 170,
  },
  TextField: {
    margin: theme.spacing(1),
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(2),
  },
  divSearch: {
    display: 'flex-wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default function Searchbar() {
  const classes = useStyles();
  const [ciudad, setCiudad] = React.useState('');
  const [precioMin, setPrecioMin] = React.useState('');
  const [precioMax, setPrecioMax] = React.useState('');
  const [inmueble, setTipoInmueble] = React.useState('');

  const handleChangeCiudad = (event) => {
    setCiudad(event.target.value);
  };

  const handleChangePrecioMin = (event) => {
    setPrecioMin(event.target.value);
  };

  const handleChangePrecioMax = (event) => {
    setPrecioMax(event.target.value);
  };

  const handleChangeTipoInmueble = (event) => {
    setTipoInmueble(event.target.value);
  };

  return (
    <div className={classes.divSearch}>
      <FormControl className={classes.formControl}>
        <InputLabel id="select-lblCiudad">Ciudad</InputLabel>
        <Select
          labelId="select-lblCiudad"
          id="select-ciudad"
          value={ciudad}
          onChange={handleChangeCiudad}
        >
          {lugar.map((ciudad) => (
            <MenuItem value={ciudad.id}>{ciudad.nombre}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        className={classes.TextField}
        label="Precio Min."
        value={precioMin}
        onChange={handleChangePrecioMin}
        name="numberformat"
        id="formatted-numberformat-input"
      />
      <TextField
        className={classes.TextField}
        label="Precio Max."
        value={precioMax}
        onChange={handleChangePrecioMax}
        name="numberformat"
        id="formatted-numberformat-input"
      />
      <FormControl className={classes.formControl}>
        <InputLabel id="select-lblTipoInmueble">Tipo Inmueble</InputLabel>
        <Select
          labelId="select-lblTipoInmueble"
          id="select-tipoInmueble"
          value={inmueble}
          onChange={handleChangeTipoInmueble}
        >
          {tipoInmueble.map((tipoInmueble) => (
            <MenuItem value={tipoInmueble.id}>{tipoInmueble.nombre}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        className={classes.TextField}
        id="standard-number"
        label="Dormitorios"
        type="number"
      />
      {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<SearchIcon>BUSCAR</SearchIcon>}
      >
        buscar
      </Button>
    </div>
  );
}

//Deberian ser reemplazados por la API
const lugar = [
  { id: 1, nombre: 'Neuquen' },
  { id: 2, nombre: 'Cipolletti' },
  { id: 3, nombre: 'Centenario' },
  { id: 4, nombre: 'General Roca' },
];

//Deberian ser reemplazados por la API
const tipoInmueble = [
  { id: 1, nombre: 'Edificio' },
  { id: 2, nombre: 'Duplex' },
  { id: 3, nombre: 'Departamento' },
  { id: 4, nombre: 'Casa c/garage' },
  { id: 4, nombre: 'Casa s/garage' },
];
