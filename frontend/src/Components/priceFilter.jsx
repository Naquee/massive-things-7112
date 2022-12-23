import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { sizing } from '@mui/system'
import { useSearchParams } from 'react-router-dom';
export default function ControlledOpenSelect() {
  const [open, setOpen] = React.useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSortBy = searchParams.getAll("sortBy");
  const [sortBy, setSortBy] = React.useState(initialSortBy[0] || "popularity");
  const country = searchParams.getAll("country")
  const handleChange = (e) => {
    setSortBy(e.target.value);
  };
  console.log(searchParams)
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  React.useEffect(() => {
    if (sortBy) {
      let params = {

      };
      sortBy && (params.sortBy = sortBy);
      // category && (params.category = category);
      country && (params.country = country);
      setSearchParams(params);
    }
  }, [setSearchParams, sortBy]);

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 200, border: 'black' }}>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={sortBy}
          onChange={handleChange}
          sx={{ p: 0 }}
        >
          <MenuItem value={'popularity'}>Popularity</MenuItem>
          <MenuItem defaultChecked={sortBy === "desc"} value={'asc'}>Price - Low to High</MenuItem>
          <MenuItem defaultChecked={sortBy === "asc"} value={'desc'}>Price - High to Low</MenuItem>
          <MenuItem value={'asc'}>Alphabetical</MenuItem>
          <MenuItem value={'offers'}>Offers</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}