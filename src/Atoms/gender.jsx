import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function Gender({setGender}) {
  return (
    <div className='ml-5 mt-3 text-sm text-gray-700'>
      <label htmlFor="default-input" className="block  text-lg text-gray-700 dark:text-white">Sex</label>
      <FormControl>
          <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              onChange={(event)=>setGender(event.target.value)}
          >
              <FormControlLabel value="female"  control={<Radio />} label="Female" />
              <FormControlLabel value="male"  control={<Radio />} label="Male" />
          </RadioGroup>
      </FormControl>
    </div>
    
  );
}