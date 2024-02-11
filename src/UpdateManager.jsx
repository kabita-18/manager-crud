import { useFormik } from "formik";
import { Button, MenuItem, Select, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { updateManagerDetails, getManagerDetails, mnameOption } from "./service";

const UpdateManager = () => {
  const [managerName, setManagerName] = useState([]);

  useEffect(() => {
    mnameOption().then((data) => {
      setManagerName(data);
    });
  }, []);
  const formik = useFormik({
    initialValues: {
      mnameOption: "",
      mid: "",
      mname: "",
      status: "",
    },
    onSubmit: (values) => {
      console.log(values);
      console.log("Selected Manager Name:", values.mnameOption);
      updateManagerDetails(values).then((res)=>{
        console.log(res)
        console.log("update log");
      }).catch((error)=>{
        console.log(error);
        console.log("Error log");
      })
    },
  });

  const handleManagerSelectChange = async (e) => {
    // formik.handleChange(e);
    formik.setFieldValue("mnameOption", e.target.value);

    getManagerDetails(e.target.value)
      .then((details) => {
        // setSelectedManagerDetails(details);
        
        formik.setValues({
          mnameOption: details.mname,
          mname: details.mname,
          mid: details.mid,
          status: details.status,
        })
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      <h1>Manager Profile Update Page</h1>

      <form onSubmit={formik.handleSubmit}>
        {/* <label htmlFor="mnameOption">Name</label> &nbsp; */}
        <Select
          name="mnameOption"
          value={formik.values.mnameOption}
          onChange={handleManagerSelectChange}
        >
          {managerName.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
        <br></br>
        {/* <label htmlFor="mid">mid</label> &nbsp; */}
        <TextField
          name="mid"
          type="number"
          placeholder="1001"
          onChange={formik.handleChange}
          value={formik.values.mid}
        />
        <br></br>
        {/* <label htmlFor="mname">mname</label> &nbsp; */}
        <TextField
          name="mname"
          type="text"
          placeholder="xyz"
          onChange={formik.handleChange}
          value={formik.values.mname}
          // value= {`${selectedManagerDetails.mname}`}
        />
        <br></br>
        {/* <label >Status</label>&nbsp; */}
        <Select
          name="status"
          value={formik.values.status}
          // value={`${selectedManagerDetails.status}`}
          onChange={formik.handleChange}
        >
          <MenuItem value="Available">Available</MenuItem>
          <MenuItem value="Not Available">Not Available</MenuItem>
        </Select>
        <br />
        <Button
          type="submit"
          variant="contained"
          color="success"
          onClick={formik.handleSubmit}
        >
          Update
        </Button>
        &nbsp;
        <Button
          variant="contained"
          type="reset"
          onClick={() => formik.resetForm()}
        >
          Reset
        </Button>
      </form>
    </>
  );
};

export default UpdateManager;
