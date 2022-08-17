// Render Prop
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Form3 = () => (
  <div>
    <h1>Any place in your app!</h1>
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.password) {
          errors.password = "Required";
        }
        if (values.password.length < 6) {
          errors.password = "Password must be greater than 6 digits";
        }
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type='email' name='email' />
          <ErrorMessage name='email' component='div' />
          <Field type='password' name='password' />
          <ErrorMessage name='password' component='div' />
          <button type='submit' disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Form3;
