import { useFormik } from "formik";
import React, { useContext } from "react";
import UserContext from "./UserContext";

function CreateUser() {

  const userContext = useContext(UserContext);

  let formik = useFormik({
    initialValues: {
      name: "",
      position: "",
      office: "",
      age: 0,
      startDate: "",
      salary: 0
    },
    validate : (values) => {
      const errors = {};

      if(!values.name) {
        errors.name = "Name cannot be blank"
      }

      if(!values.position) {
        errors.position = "Position cannot be blank"
      }

      if(!values.office) {
        errors.office = "Office cannot be blank"
      }

      if(!values.age || values.age < 18) {
        errors.age = "Age cannot be blank and should be greater than 18"
      }

      if(!values.startDate) {
        errors.startDate = "Office cannot be blank"
      }

      if(!values.salary) {
        errors. salary = "Salary cannot be blank"
      }

      return errors;
    },
    onSubmit: values => {
        alert("User Created Successfully");
        userContext.setUsers([...userContext.users, values])
      },
  });

  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
      <div className="row">
        <div className="col-lg-6">
          <label>Name</label>
          <input type={"text"} name = "name" className="form-control"
          onChange={formik.handleChange}
          value={formik.values.name}
           />
           <span style={{color : 'red'}}>{formik.errors.name}</span>
        </div>

        <div className="col-lg-6">
          <label>Position</label>
          <input type={"text"} name = "position" className="form-control"
          onChange={formik.handleChange}
          value={formik.values.position}
           />
            <span style={{color : 'red'}}>{formik.errors.position}</span>
        </div>

        <div className="col-lg-6">
          <label>Office</label>
          <input type={"text"} name = "office" className="form-control" 
          onChange={formik.handleChange}
          value={formik.values.office}/>
           <span style={{color : 'red'}}>{formik.errors.office}</span>
        </div>

        <div className="col-lg-6">
          <label>Age</label>
          <input type={"number"} name = "age" className="form-control" 
          onChange={formik.handleChange}
          value={formik.values.age} />
           <span style={{color : 'red'}}>{formik.errors.age}</span>
        </div>

        <div className="col-lg-6">
          <label>Startdate</label>
          <input type={"date"} name = "startDate" className="form-control" 
          onChange={formik.handleChange}
          value={formik.values.date} />
           <span style={{color : 'red'}}>{formik.errors.startDate}</span>
        </div>

        <div className="col-lg-6">
          <label>Salary</label>
          <input type={"number"} name = "salary" className="form-control" 
          onChange={formik.handleChange}
          value={formik.values.salary}/>
           <span style={{color : 'red'}}>{formik.errors.salary}</span>
        </div>

        <div className="col-lg-2">
          <input
            type={"submit"}
            className="btn btn-primary form-control mt-3" disabled = {Object.keys(formik.errors).length !== 0}
          />
        </div>
      </div>
      </form>
    </div>
  );
}

export default CreateUser;
