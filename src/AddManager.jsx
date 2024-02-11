
import { TextField, Button, Select, MenuItem } from '@mui/material';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { register } from './service';

const AddManager = () => {
  const formik = useFormik({
    initialValues: {
      mid:'',
      mname: '',
      email: '',
      status: 'Available',
    },
    onSubmit: (values) => {
      console.log(values);
      register(values).then((res)=>{
        console.log(res)
        console.log("success log");
      }).catch((error)=>{
        console.log(error);
        console.log("Error log");
      })
    },
  });
  const navigate = useNavigate();

  return (
    <>
    <h1>Add Manager Profile</h1>
    
    <form onSubmit={formik.handleSubmit}>
      {/* <label htmlFor="mname">Manager Name</label> */}
      <TextField
        id="mid"
        name="mid"
        type="number"
        placeholder='1001'
        onChange={formik.handleChange}
        value={formik.values.mid}
      />
      <br />
      <TextField
        id="mname"
        name="mname"
        type="text"
        placeholder='John'
        onChange={formik.handleChange}
        value={formik.values.mname}
      />
      <br />

      {/* <label htmlFor="email">Email Address</label> */}
      <TextField
        id="email"
        name="email"
        type="email"
        placeholder='abc@gmail.com'
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <br />

      {/* <label>Status</label>&nbsp; */}
      <Select
        
        name="status"
        value={formik.values.status}
        onChange={formik.handleChange}
      >
        <MenuItem value="Available">Available</MenuItem>
        <MenuItem value="Not Available">Not Available</MenuItem>
      </Select>
      <br />

      <Button type="submit" variant="contained" color='success' onClick={formik.handleSubmit}>
        Add
      </Button>
      &nbsp;
      <Button type="reset" variant="contained" onClick={() => formik.resetForm()}>
        Reset
      </Button>
      &nbsp;
      <Button type='cancel' variant="contained" color='error' onClick={()=> navigate("/")}> Cancel</Button>
    </form>
    </>
  );
};

export default AddManager;
