import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core';  
    
export function useForm(initialFormValues, validateOnChange = false, validate){

    const [values, setValues] = useState(initialFormValues);
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
        if(validateOnChange){
            validate( {[name] : value} )
        }
    }

    const resetForm = () => {
        setValues(initialFormValues);
        setErrors({})
    }

    return {
        values,
        setValues,
        errors,
        setErrors,
        resetForm,
        handleInputChange
    }
}

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1),
        }
    }
}))

export function Form(props){

    const classes = useStyles();
    const { children, ...others } = props;
    return(
        <form className={classes.root} autoComplete='off' {...others}>
            {props.children}
        </form>
    )
}