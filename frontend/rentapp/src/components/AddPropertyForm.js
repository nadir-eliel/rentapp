import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import Divider from '@material-ui/core/Divider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ImageUpload from './ImageUpload';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

let imageUploaded = undefined;

export default class AddPropertyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      user_id: undefined,
      price: undefined,
      bathroom_count: undefined,
      bedroom_count: undefined,
      room_count: undefined,
      other_details: undefined,
      garage: undefined,
      kids: undefined,
      pets: undefined,
      type: undefined,
      backyard: undefined,
      pool: undefined,
      province: undefined,
      city: undefined,
      street_number: undefined,
      photos: undefined,
    };
  }

  handleClickOpen = () => {
    this.setState({ isOpen: true });
  };

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  handleChangePrice(e) {
    this.setState({ price: e.target.value });
  }

  handleChangeBathroomCount(e) {
    this.setState({ bathroom_count: e.target.value });
  }

  handleChangeBedroomCount(e) {
    this.setState({ bedroom_count: e.target.value });
  }

  handleChangeRoomCount(e) {
    this.setState({ room_count: e.target.value });
  }

  handleChangeOtherDetails(e) {
    this.setState({ other_details: e.target.value });
  }

  handleChangeGarage(e) {
    this.setState({ garage: e.target.checked });
  }

  handleChangeKids(e) {
    this.setState({ kids: e.target.checked });
  }

  handleChangePets(e) {
    this.setState({ pets: e.target.checked });
  }

  handleChangeBackyard(e) {
    this.setState({ backyard: e.target.checked });
  }

  handleChangePool(e) {
    this.setState({ pool: e.target.checked });
  }

  handleChangeProvince(e) {
    this.setState({ province: e.target.value });
  }

  handleChangeCity(e) {
    this.setState({ city: e.target.value });
  }

  handleChangePhotos(photoN) {
    imageUploaded = photoN;
  }

  handleChangeStreetNumber(e) {
    this.setState({ street_number: e.target.value });
  }

  handleChangeTipoInmueble(e) {
    this.setState({ type: e.target.value });
  }

  handleGuardar(e) {
    const newProperty = {
      price: this.state.price,
      bathroom_count: this.state.bathroom_count,
      bedroom_count: this.state.bedroom_count,
      room_count: this.state.room_count,
      other_details: this.state.other_details,
      type: this.state.type,
      garage: this.state.garage,
      kids: this.state.kids,
      pets: this.state.pets,
      backyard: this.state.backyard,
      pool: this.state.pool,
      address: {
        province: this.state.province,
        city: this.state.city,
        street_number: this.state.street_number,
      },
      photos: [imageUploaded],
    };
    this.props.addProperty(newProperty);
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <div>
        <React.StrictMode>
          <Button
            style={{
              flex: 1,
              marginTop: 20,
              marginLeft: 10,
            }}
            variant="outlined"
            color="primary"
            onClick={this.handleClickOpen}
            endIcon={<AddIcon />}
          >
            NUEVO INMUEBLE
          </Button>
          <Dialog
            open={this.state.isOpen}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Nuevo Inmueble</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Por favor complete todos los campos para una mejor visibilidad.
              </DialogContentText>

              <TextField
                value={this.state.city}
                required
                autoFocus
                margin="dense"
                id="name"
                label="Ciudad"
                type="ciudad"
                fullWidth
                onChange={this.handleChangeCity.bind(this)}
              />
              <TextField
                value={this.state.province}
                autoFocus
                margin="dense"
                id="name"
                label="Provincia"
                type="provincia"
                fullWidth
                onChange={this.handleChangeProvince.bind(this)}
              />
              <TextField
                value={this.state.street_number}
                autoFocus
                margin="dense"
                id="name"
                label="Direccion"
                type="direccion"
                fullWidth
                onChange={this.handleChangeStreetNumber.bind(this)}
              />
              <TextField
                value={this.state.room_count}
                autoFocus
                margin="dense"
                id="name"
                label="Ambientes"
                type="number"
                onChange={this.handleChangeRoomCount.bind(this)}
              />
              <TextField
                value={this.state.bathroom_count}
                margin="dense"
                id="name"
                label="Baños"
                type="number"
                style={{ marginLeft: 10 }}
                onChange={this.handleChangeBathroomCount.bind(this)}
              />
              <TextField
                required
                value={this.state.bedroom_count}
                autoFocus
                margin="dense"
                id="rooms"
                label="Habitaciones"
                type="number"
                style={{ marginLeft: 10 }}
                onChange={this.handleChangeBedroomCount.bind(this)}
              />
              <TextField
                required
                value={this.state.price}
                autoFocus
                margin="dense"
                id="price"
                label="Precio"
                type="number"
                onChange={this.handleChangePrice.bind(this)}
              />
              <TextField
                required
                value={this.state.other_details}
                autoFocus
                margin="dense"
                id="other_details"
                label="Otros Detalles"
                type="other_details"
                fullWidth
                onChange={this.handleChangeOtherDetails.bind(this)}
              />
              <FormControl style={{ minWidth: 300 }}>
                <InputLabel id="select-lblTipoInmueble">Tipo</InputLabel>
                <Select
                  required
                  labelId="select-lblTipoInmueble"
                  id="select-inmueble"
                  value={this.state.type}
                  onChange={this.handleChangeTipoInmueble.bind(this)}
                >
                  <MenuItem value={''}></MenuItem>
                  <MenuItem value={'Casa'}>Casa</MenuItem>
                  <MenuItem value={'Departamento'}>Departamento</MenuItem>
                </Select>
              </FormControl>
              <div id="checkboxContainer" style={{ marginTop: 15 }}>
                <FormControlLabel
                  value={this.state.pets}
                  control={<Checkbox color="primary" />}
                  label="¿Permite mascotas?"
                  labelPlacement="start"
                  onChange={this.handleChangePets.bind(this)}
                />
                <FormControlLabel
                  value={this.state.kids}
                  control={<Checkbox color="primary" />}
                  label="¿Permite niños?"
                  labelPlacement="start"
                  onChange={this.handleChangeKids.bind(this)}
                />
                <FormControlLabel
                  value={this.state.pool}
                  control={<Checkbox color="primary" />}
                  label="¿Tiene piscina?"
                  labelPlacement="start"
                  onChange={this.handleChangePool.bind(this)}
                />
                <FormControlLabel
                  value={this.state.backyard}
                  control={<Checkbox color="primary" />}
                  label="¿Tiene patio?"
                  labelPlacement="start"
                  onChange={this.handleChangeBackyard.bind(this)}
                />
                <FormControlLabel
                  value={this.state.garage}
                  control={<Checkbox color="primary" />}
                  label="¿Tiene garage?"
                  labelPlacement="start"
                  onChange={this.handleChangeGarage.bind(this)}
                />
              </div>
              <Divider variant="middle" />
              <div id="imageUploadContainer" style={{ marginTop: 15 }}>
                <ImageUpload uploadImage={this.handleChangePhotos} />
              </div>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose.bind(this)} color="primary">
                Cancel
              </Button>
              <Button onClick={this.handleGuardar.bind(this)} color="primary">
                Guardar
              </Button>
            </DialogActions>
          </Dialog>
        </React.StrictMode>
      </div>
    );
  }
}
