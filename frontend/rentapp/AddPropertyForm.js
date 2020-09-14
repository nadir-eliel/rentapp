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
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import ImageUpload from './ImageUpload';

export default function AddPropertyForm() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        style={{
          flex: 1,
          marginTop: 20,
          marginLeft: 10,
        }}
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
        endIcon={<AddIcon />}
      >
        NUEVO INMUEBLE
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Nuevo Inmueble</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Por favor complete todos los campos para una mejor visibilidad.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Ciudad"
            type="ciudad"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Provincia"
            type="provincia"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Habitaciones"
            type="number"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Baños"
            type="number"
            style={{ marginLeft: 15 }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Precio"
            type="number"
            style={{ marginLeft: 15 }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Otros Detalles"
            type="provincia"
            fullWidth
          />
          <div id="checkboxContainer" style={{ marginTop: 15 }}>
            <FormControlLabel
              value="start"
              control={<Checkbox color="primary" />}
              label="¿Permite mascotas?"
              labelPlacement="start"
            />
            <FormControlLabel
              value="start"
              control={<Checkbox color="primary" />}
              label="¿Permite niños?"
              labelPlacement="start"
            />
            <FormControlLabel
              value="start"
              control={<Checkbox color="primary" />}
              label="¿Tiene piscina?"
              labelPlacement="start"
            />
            <FormControlLabel
              value="start"
              control={<Checkbox color="primary" />}
              label="¿Tiene patio?"
              labelPlacement="start"
            />
            <FormControlLabel
              value="start"
              control={<Checkbox color="primary" />}
              label="¿Tiene garage?"
              labelPlacement="start"
            />
          </div>
          <Divider variant="middle" />
          <div id="imageUploadContainer" style={{ marginTop: 15 }}>
            <ImageUpload />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
