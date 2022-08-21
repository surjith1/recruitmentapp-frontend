import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import SelectDropdown from "./SelectDropdown";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [recruiterdata, setRecruiterData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    company: "",
  });

  const [applicantdata, setApplicantdata] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    institute: "",
    typeOfExp: "",
    yearOfPassedout: "",
  });

  const handlerecruiterChange = ({ currentTarget: input }) => {
    setRecruiterData({ ...recruiterdata, [input.name]: input.value });
  };
  const handleapplicantChange = ({ currentTarget: input }) => {
    setApplicantdata({ ...applicantdata, [input.name]: input.value });
  };
  const handlerecruiterSubmit = async (e) => {
    e.preventDefault();

    const url = "https://recruiter-app.herokuapp.com/api/users/recruiter";
    const recruit = await axios.post(url, recruiterdata);
    navigate("/recruiter-main");
  };

  const handleApplicantSubmit = async (e) => {
    e.preventDefault();
    const applicanturl =
      "https://recruiter-app.herokuapp.com/api/users/applicant";
    const resapplicant = await axios.post(applicanturl, applicantdata);
    navigate("/applicant-main");
  };

  return (
    <div className="signup-wrapper">
      <div className="left recruitor">
        <h1>Recruitor Signup</h1>

        <form className="form-wrap" onSubmit={handlerecruiterSubmit}>
          <div className="form-group">
            <TextField
              type="text"
              id="name"
              label="Name"
              name="name"
              variant="outlined"
              value={recruiterdata.name}
              onChange={handlerecruiterChange}
              fullWidth
            />
          </div>
          <div className="form-group">
            <TextField
              type="email"
              id="email"
              label="Email"
              name="email"
              variant="outlined"
              value={recruiterdata.email}
              onChange={handlerecruiterChange}
              fullWidth
            />
          </div>
          <div className="form-group">
            <TextField
              type="password"
              id="password"
              label="Password"
              name="password"
              variant="outlined"
              value={recruiterdata.password}
              onChange={handlerecruiterChange}
              fullWidth
            />
          </div>
          <div className="form-group">
            <TextField
              type="number"
              id="phone"
              label="Phone Number"
              name="phone"
              variant="outlined"
              value={recruiterdata.phone}
              onChange={handlerecruiterChange}
              fullWidth
            />
          </div>
          <div className="form-group">
            {/*<Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
  />*/}
            <TextField
              type="text"
              id="company"
              label="Company"
              name="company"
              variant="outlined"
              value={recruiterdata.company}
              onChange={handlerecruiterChange}
              fullWidth
            />
          </div>

          <div className="form-group">
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Signup
            </Button>
          </div>
        </form>
      </div>
      <div className="right applicant">
        <h1>Applicant Signup</h1>
        <form className="form-wrap" onSubmit={handleApplicantSubmit}>
          <div className="form-group">
            <TextField
              type="text"
              id="name"
              label="Name"
              name="name"
              variant="outlined"
              value={applicantdata.name}
              onChange={handleapplicantChange}
              fullWidth
            />
          </div>

          <div className="form-group">
            <TextField
              type="email"
              id="email"
              label="Email"
              name="email"
              variant="outlined"
              value={applicantdata.email}
              onChange={handleapplicantChange}
              fullWidth
            />
          </div>
          <div className="form-group field-wrap">
            <div className="">
              <TextField
                type="password"
                id="password"
                label="Password"
                name="password"
                variant="outlined"
                value={applicantdata.password}
                onChange={handleapplicantChange}
                fullWidth
              />
            </div>
            <div className="">
              <TextField
                type="number"
                id="phone"
                label="Phone Number"
                name="phone"
                variant="outlined"
                value={applicantdata.phone}
                onChange={handleapplicantChange}
                fullWidth
              />
            </div>
          </div>
          <div className="form-group">
            <TextField
              type="text"
              id="institute"
              label="Institute"
              name="institute"
              variant="outlined"
              value={applicantdata.institute}
              onChange={handleapplicantChange}
              fullWidth
            />
          </div>
          <div className="form-group field-wrap">
            <div className="">
              <TextField
                type="number"
                id="yearOfPassedout"
                label="Year of Passedout"
                name="yearOfPassedout"
                variant="outlined"
                value={applicantdata.yearOfPassedout}
                onChange={handleapplicantChange}
                fullWidth
              />
            </div>
            <div className="">
              <SelectDropdown
                id="typeOfExp"
                name="typeOfExp"
                props="Type of Experience"
                value={applicantdata.type}
                onChange={handleapplicantChange}
              />
            </div>
          </div>
          <div className="form-group">
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Signup
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
