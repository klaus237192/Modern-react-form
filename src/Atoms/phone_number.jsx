import React from 'react';

import MuiPhoneNumber from 'material-ui-phone-number';
import {
  isValidPhoneNumber,
} from 'libphonenumber-js';

export default function PhoneNumber({setPhoneNumber,setIsValidPhoneNumber}) {
  
  return (
    <div className='mt-1 ml-5'>
      <p className='text-lg mb-1 text-gray-700'>Phone Number</p>
      <MuiPhoneNumber
        className='w-[92%]'
        defaultCountry={'in'}
        onChange={(c, t) => {
          setPhoneNumber(c)
          setIsValidPhoneNumber(isValidPhoneNumber(c))
        }}
      />
    </div>
  );
}
