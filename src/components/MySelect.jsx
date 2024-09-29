import React from 'react';
import { useField } from 'formik';

const MySelect = () => {
    const MySelect = ({ label, ...props }) => {
        const [field, meta] = useField(props);
        return (
            <div>
                <label htmlFor={props.id || props.name}>{label}</label>
                <select {...field} {...props} />
                {meta.touched && meta.error ? (
                    <div className="error">{meta.error}</div>
                ) : null}
            </div>
        );
    };
    return (
        <>
            <label  className="label">Select Job</label>
            <MySelect name="designation" className=" dropdownMenu">
                <option value="">Select Designation</option>
                <option value="designer">Designer</option>
                <option value="development">Developer</option>
                <option value="product manager">Product Manager</option>
                <option value="other">Other</option>
             
            </MySelect>
        </>
    )
}

export default MySelect