import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';


export default function Birthday({setBirthDay}) {
  return (
    <div className='ml-5 sm:w-[87%] xl:w-[88%] text-lg text-gray-700'>
      <label htmlFor="default-input" className="block mb-1 text-lg text-gray-700 dark:text-white">Birthday</label>
      <LocalizationProvider dateAdapter={AdapterDayjs} >
      <DemoContainer
        className="text-lg text-gray-700"
        components={[
          'DatePicker',
          'MobileDatePicker',
          'DesktopDatePicker',
          'StaticDatePicker',
        ]}
      >
        <DemoItem >
          <MobileDatePicker defaultValue={dayjs('1900-01-01')} onChange={(date)=>setBirthDay(date.format("YYYY-MM-DD"))}/>
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
    </div>
    
  );
}