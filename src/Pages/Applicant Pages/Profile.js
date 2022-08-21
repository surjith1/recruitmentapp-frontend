import React, { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import SelectDropdown from "./../SelectDropdown";

const Profile = () => {
  const [applicantdata, setApplicantdata] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    institute: "",
    typeOfExp: "",
    yearOfPassedout: "",
  });
  const [applicantData, setApplicantData] = useState([]);
  useEffect(() => {
    fetch(`https://recruiter-app.herokuapp.com/api/users/applicant`)
      .then((response) => response.json())
      .then((actualData) => {
        setApplicantData(actualData);
      });
  }, []);

  const handleapplicantChange = ({ currentTarget: input }) => {
    setApplicantdata({ ...applicantdata, [input.name]: input.value });
  };
  return (
    <div className="profile-wrapper">
      <h2> Profile </h2>
      <from className="form-wrap">
        {applicantData.map((a) => (
          <>
            <div className="form-group">
              <TextField
                type="text"
                id="name"
                label="Name"
                name="name"
                variant="outlined"
                value={a.name}
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
                value={a.email}
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
                  value={a.password}
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
                  value={a.phone}
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
                value={a.institute}
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
                  value={a.yearOfPassedout}
                  onChange={handleapplicantChange}
                  fullWidth
                />
              </div>
              <div className="">
                <SelectDropdown
                  id="typeOfExp"
                  name="typeOfExp"
                  props="Type of Experience"
                  value={a.type}
                  onChange={handleapplicantChange}
                />
              </div>
            </div>

            <div className="form-group">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Save
              </Button>
            </div>
          </>
        ))}
      </from>
    </div>
  );
};

export default Profile;
