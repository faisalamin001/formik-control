import { Button, TextField } from "@mui/material";
import "./form.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required").min(5),
});

function Form() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (data) => {
      console.log(data);
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <h1>Registration Form</h1>
        <TextField
          className='input'
          placeholder='Name'
          type='text'
          label='Name'
          variant='outlined'
          id='name'
          name='name'
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <br /> <br />
        <TextField
          className='input'
          placeholder='Email'
          type='email'
          label='Email'
          id='email'
          name='email'
          variant='outlined'
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <br /> <br />
        <TextField
          className='input'
          placeholder='Password'
          label='Password'
          type='password'
          id='password'
          name='password'
          variant='outlined'
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />{" "}
        <br /> <br />
        <Button type='submit' variant='contained'>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Form;
