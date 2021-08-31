import React from 'react'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns';

const DatePicker = (props) => {
    
    const { name, label, value, onChange } = props;

    const convertToEventParams = (name, value) => ({
        target: {name, value}
    })


    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}   >
            <KeyboardDatePicker disableToolbar variant='inline' inputVariant='outlined'
                label={label}
                formate='dd/MMM/yyyy'
                name={name}
                value={value}
                onChange={(date) => onChange(convertToEventParams(name, date))}
            />                
        </MuiPickersUtilsProvider>
    )
}

export default DatePicker
