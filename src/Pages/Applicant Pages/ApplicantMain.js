import React, { useState, useEffect } from "react";
import FixedTopSection from "./../FixedTopSection";
import StarIcon from "@mui/icons-material/Star";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Button } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const ApplicantMain = () => {
  const [toggle, setToggle] = useState(false);
  const [dbData, setDbData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/job-application`)
      .then((response) => response.json())
      .then((actualData) => {
        setDbData(actualData);
      });
  }, []);

  return (
    <div>
      <FixedTopSection props="Applicant Portal" />
      <div className="applicant-applications">
        {dbData.map((list) => {
          return (
            <div className="content-wrapper">
              <div className="left">
                <h2>{list.title}</h2>
                <div className="star-wrap">
                  <span>
                    <StarIcon />
                  </span>

                  <span className="txt">{list.rating}</span>
                </div>
                <div className="experience">
                  <span>
                    <CalendarMonthIcon />
                  </span>
                  <span>{list.years}</span>
                </div>
                <div className="salary">
                  <span>
                    <CurrencyRupeeIcon />
                  </span>
                  <span>{list.salary}</span>
                </div>
                <div className="location">
                  <span>
                    <LocationOnIcon />
                  </span>
                  <span>{list.address}</span>
                </div>
                <div className="jd">
                  <span
                    className="more-icon"
                    onClick={() => setToggle(!toggle)}
                  >
                    <MoreHorizIcon />
                  </span>
                  {toggle && (
                    <p className="jd-content">
                      <ul>
                        <h3>{list.jstitle}</h3>

                        {list.qualificationContnet.map((e) => (
                          <li>{e}</li>
                        ))}
                      </ul>
                      <div className="skills">
                        <u>{list.skilltitle}</u>
                        <p>
                          {list.skillContent.map((s) => (
                            <span>{s}</span>
                          ))}
                        </p>
                      </div>
                      <div>
                        <u>Roles and Responsibilities</u>
                        <p>
                          Probationary Officer Programme for Sales and
                          Relationship Management is an initiative of ICICI Bank
                          in partnership with Manipal Global Education Services.
                          The Training Programme aims to attract young talent
                          who wish to pursue a career in sales and relationship
                          banking. It is a vocational training programme
                          designed to develop a pool of first level managers
                          with banking knowledge and required skill-sets to
                          perform efficiently in their day-to-day activities.
                          The roles offered on joining the bank after successful
                          completion of the Programme will involve sales,
                          servicing, cross selling and acquiring new customers
                          through field visits as part of the duties/tasks
                          assigned. Similarly, internship / on-the-job-training
                          periods will also involve these duties/tasks as part
                          of the learning process
                        </p>
                      </div>
                    </p>
                  )}
                </div>
              </div>
              <div className="right">
                <Button variant="contained" color="primary">
                  Apply
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ApplicantMain;
