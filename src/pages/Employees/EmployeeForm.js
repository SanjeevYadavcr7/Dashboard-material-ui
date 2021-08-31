import React from 'react'
import { Grid } from '@material-ui/core';
import { useForm, Form } from '../../components/useForm';
import Controls from '../../components/controls/Controls.js';
import * as EmployeeService from '../../services/EmployeeService'; 


const genderItems = [
    {id: 'male', title: 'Male'},
    {id: 'female', title: 'Female'},
    {id: 'other ', title: 'Other'},
]

const initialFormValues = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: 'male',
    departmentId: '',
    hireDate: new Date(),
    isPermanent: false,
}

const EmployeeForm = () => {


    const validate = (fieldValues = values) => {
        
        let temp = {...errors}
        
        if('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName?"":"This Field is required!"
        if('mobile' in fieldValues)
            temp.mobile = fieldValues.mobile.length>9?"":"Phone no. should be 10 digit!"
        if('departmentId' in fieldValues)
            temp.departmentId = fieldValues.departmentId.length !== 0 ? "" : "This Field is required!"
        
        setErrors({...temp})

        // checking if it is fired from handleSubmit
        if(fieldValues === values)
            return Object.values(temp).every(x => x === "")
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(validate()){
            EmployeeService.insertEmployee(values);
            resetForm();
        }
    }

    const {values, setValues, errors, setErrors, resetForm, handleInputChange} = useForm(initialFormValues, true, validate);

    return(
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input 
                        label='Employee Name' name='fullName'
                        value={values.fullName} onChange={handleInputChange}
                        error={errors.fullName}
                    />
                    <Controls.Input 
                        label='Employee Email' name='email'
                        value={values.email} onChange={handleInputChange}
                    />
                    <Controls.Input 
                        label='Mobile' name='mobile'
                        value={values.mobile} onChange={handleInputChange}
                        error={errors.mobile}
                    />
                    <Controls.Input 
                        label='City' name='city'
                        value={values.city} onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controls.RadioGroup 
                        name='gender'
                        label='Gender'
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderItems}
                    />

                    <Controls.Select 
                        name='departmentId'
                        label='Department'
                        value={values.departmentId}
                        onChange={handleInputChange}
                        options={EmployeeService.getDepartmentCollection()}
                        error={errors.departmentId}
                    />

                    <Controls.DatePicker 
                        name='hireDate'
                        label='Hire Date'
                        value={values.hireDate}
                        onChange={handleInputChange}
                    />

                    <Controls.CheckBox 
                        name='isPermanent'
                        label='Are you an permanent employee ?'
                        value={values.isPermanent}
                        onChange={handleInputChange}
                    />
                    <div>
                        <Controls.Button
                            type='submit'
                            text='Submit'
                        />
                        <Controls.Button
                            text='Reset'
                            color='default'
                            onClick={resetForm}
                        />
                    </div>
                </Grid>
            </Grid>
            
        </Form>
    )
}

export default EmployeeForm


