import React, {useState} from 'react';
import { Formik, Form } from 'formik';
import './FormValidation.scss';
import validationSchema from './ValidationSchema.js';
import FormInput from './FormInput';
import MySelect from './MySelect';

const FormValidation = () => {
  const [submittedValues, setSubmittedValues] = useState([]);

  return (
    <>
      <Formik
        initialValues={{ firstName: '', lastName: '', email: '', designation: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmittedValues((prevValues) => [...prevValues, values]);
            console.log(submittedValues);
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <div className="container">
            <FormInput
              htmlFor="firstName"
              name="firstName"
              type="text"
              placeholder="John"
              title="First Name" />

            <FormInput
              htmlFor="lastName"
              name="lastName"
              type="text"
              placeholder="Doe"
              title="Last Name" />

            <FormInput
              htmlFor="email"
              name="email"
              type="email"
              placeholder="example@gmail.com"
              title="Email Address" />

            <MySelect/>
            <button type="submit">Submit</button>
          </div>
        </Form>
      </Formik>
    </>
  )
}

export default FormValidation