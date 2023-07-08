import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
} from "@mui/material";
import { useDropzone } from "react-dropzone";
import "./style.css";

const RegistrationForm = (props) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add your form submission logic here
  };

  const [empCount, setEmpCount] = React.useState("");

  const handleChangeEmp = (e) => {
    setEmpCount(e.target.value);
  };

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid item sm={6}>
        <Box
          sx={{
            my: 6,
            mx: 12,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "left",
          }}
        >
          <Typography variant="h4" marginRight={"auto"}fontWeight={600} gutterBottom>
            Register
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={6}>
                <TextField
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Mobile"
                  type="tel"
                  name="mobileno"
                  value={formData.mobileno}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Bussiness Name"
                  type="text"
                  name="bussinessname"
                  value={formData.bussinessname}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Bussiness Email Address"
                  type="email"
                  name="bussinessemail"
                  value={formData.bussinessemail}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <TextField
                  label="Password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <TextField
                  label="Confirm Password"
                  type="password"
                  name="confirmpwd"
                  value={formData.confirmpwd}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Australian Business No"
                  type="tel"
                  name="mobileno"
                  value={formData.mobileno}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Box component="fieldset">
                  <legend>Business Logo</legend>
                  <div {...getRootProps({ className: "dropzone" })}>
                    <input {...getInputProps()} />
                    <p>
                      Drag & Drop or{" "}
                      <span className={"theme-span-text"}>Choose file</span> to
                      upload
                    </p>
                  </div>
                  <aside>
                    <h4>Files</h4>
                    <ul>{files}</ul>
                  </aside>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="select-employees">
                    Number Of Employees
                  </InputLabel>
                  <Select
                    labelId="select-employees"
                    name="select-employees"
                    id="select-employees"
                    value={empCount}
                    label="Number of Employee"
                    onChange={handleChangeEmp}
                  >
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Checkbox required />I agree to all{" "}
                <span className={"theme-span-text"}>Terms & Conditions</span>
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{ backgroundColor: "#635BFF" }}
                >
                  Sign Up
                </Button>
                <div>
                  <p>
                    Already have an account?{" "}
                    <span className={"theme-span-text"}>Sign In</span>
                  </p>
                </div>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Grid>
      <Grid
        item
        sm={6}
        md={6}
        sx={{
          backgroundColor: "#635BFF",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
        }}
      >
        <Box
          sx={{
            margin: "300px 0px 0px 200px",
          }}
        >
          <span style={{ position: "absolute", margin: "-90px 0px 0px 12px" }}>
            <img alt="icon" src="../icon.png" />
          </span>
          <div style={{ width: "50%" }}>
            <div class="vl"></div>
            <h1 style={{ fontSize: "52px", fontFamily: "sans-serif" }}>
              Welcome to Business
            </h1>
          </div>
          <div
            style={{
              margin: "10px 64px",
              fontSize: "15px",
              fontFamily: "sans-serif",
              fontWeight: 300,
              width: "70%",
              lineHeight: "1.8",
            }}
          >
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's lorem ipsum has been
              the industry's.industry's industry's
            </span>
          </div>
        </Box>
      </Grid>
    </Grid>
  );
};

export default RegistrationForm;
