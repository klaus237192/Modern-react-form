import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

export default function Fruit({fruit,setFruit}) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className='ml-5 mt-5'>
      <label htmlFor="default-input" className="block mb-2 text-lg text-gray-700 dark:text-white">Select your favourite fruit</label>
      <FormControl className='w-[92%] '>
        <InputLabel id="demo-controlled-open-select-label" >Which fruit do you like</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={fruit}
          label="Which fruit do you like"
          onChange={(e)=>setFruit(e.target.value)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Apple">Apple</MenuItem>
          <MenuItem value="Orange">Orange</MenuItem>
          <MenuItem value="Banana">Banana</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}