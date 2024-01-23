import React from 'react';
import { useHistory } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

const Calendar = ({ type, date, setDate }) => {
  const history = useHistory();

  const getPrevDay = () => {
    const newDate = date.subtract(1, 'day');
    setDate(newDate);
    const newUrl = `/${type}/${newDate.format('MM-DD-YYYY')}`;
    history.push(newUrl);
  };

  const getNextDay = () => {
    const newDate = date.add(1, 'day');
    setDate(newDate);
    const newUrl = `/${type}/${newDate.format('MM-DD-YYYY')}`;
    history.push(newUrl);
  };

  const getToday = () => {
    const newDate = dayjs();
    setDate(newDate);
    const newUrl = `/${type}/${newDate.format('MM-DD-YYYY')}`;
    history.push(newUrl);
  };

  return (
    <div className="date-picker">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Choose your date"
          value={date}
          onChange={newValue => {
            setDate(newValue);
            const newUrl = `/${type}/${newValue.format('MM-DD-YYYY')}`;
            history.push(newUrl);
          }}
          textField={params => <TextField {...params} />}
        />
      </LocalizationProvider>
      <div className="date-picker__buttons">
        <button className="date-picker__btn prev-btn" onClick={getPrevDay}>
          PREV
        </button>
        <button className="date-picker__btn today-btn" onClick={getToday}>
          TODAY
        </button>
        <button className="date-picker__btn next-btn" onClick={getNextDay}>
          NEXT
        </button>
      </div>
    </div>
  );
};

export default Calendar;
