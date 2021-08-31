import { FormControl, FormControlLabel, Checkbox } from '@material-ui/core';
import React from 'react';


function CheckBox(props) {

    const { name, label, value, onChange } = props;
    
    const covertToDefaultParams = (name, value) => ({
        target: { name, value }
    })

    return (
        <FormControl>
            <FormControlLabel 
                control={
                    <Checkbox 
                        name={name} 
                        color='primary' 
                        checked={value} 
                        onChange={(e) => onChange(covertToDefaultParams(name, e.target.checked))}
                    />
                }
                label={label}
            />
        </FormControl>
    )
}

export default CheckBox
