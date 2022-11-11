import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { sizing } from '@mui/system'

export default function ControlledOpenSelect() {
  const [price, setPrcie] = React.useState('popularity');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setPrcie(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 200,border:'black',height: '20%' }}>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={price}
          onChange={handleChange}
        >
          <MenuItem value={'popularity'}>Popularity</MenuItem>
          <MenuItem value={'low'}>Price - Low to High</MenuItem>
          <MenuItem value={'high'}>Price - High to Low</MenuItem>
          <MenuItem value={'letter'}>Alphabetical</MenuItem>
          <MenuItem value={'offers'}>Offers</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}