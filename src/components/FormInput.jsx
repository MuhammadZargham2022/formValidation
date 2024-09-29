import React from 'react';
import { Field, ErrorMessage} from 'formik';

const FormInput = (props) => {
    return (
        <>
            <label className="label" htmlFor={props.htmlFor}>{props.title}</label>
            <Field className="inputField" name={props.name} type={props.type} placeholder={props.placeholder} />
            <ErrorMessage name={props.name} />
        </>
    )
}

export default FormInput