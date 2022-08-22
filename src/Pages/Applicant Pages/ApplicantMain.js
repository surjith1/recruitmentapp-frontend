import React, { useState, useEffect } from "react";
import FixedTopSection from "./../FixedTopSection";
import StarIcon from "@mui/icons-material/Star";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Button } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const ApplicantMain = () => {
  const [dbData, setDbData] = useState([]);

  useEffect(() => {
    fetch(`https://recruiter-app.herokuapp.com/api/job-application`)
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
                  <JobDescription
                    jstitle={list.jstitle}
                    qualificationContnet={list.qualificationContnet}
                    skilltitle={list.skilltitle}
                    skillContent={list.skillContent}
                    roletitle={list.roletitle}
                    rolecontent={list.rolecontent}
                  />
                </div>
              </div>
              <div className="right">
                <Button variant="contained" color="primary">
                  {list.apply}
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const JobDescription = ({
  jstitle,
  qualificationContnet,
  skilltitle,
  skillContent,
  roletitle,
  rolecontent,
}) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="jd">
      <span className="more-icon" onClick={() => setToggle(!toggle)}>
        <MoreHorizIcon />
      </span>
      {toggle && (
        <p className="jd-content">
          <ul>
            <h3>{jstitle}</h3>

            {qualificationContnet.map((e) => (
              <li>{e}</li>
            ))}
          </ul>
          <div className="skills">
            <u>{skilltitle}</u>
            <p>
              {skillContent.map((s) => (
                <span>{s}</span>
              ))}
            </p>
          </div>
          <div>
            <u>{roletitle}</u>
            <p>{rolecontent}</p>
          </div>
        </p>
      )}
    </div>
  );
};
export default ApplicantMain;
