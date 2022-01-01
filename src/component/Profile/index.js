import axios from "axios";
import React, { useState, useEffect } from "react";
import "./style.css";

function Profile() {
  const [infos, Setinfos] = useState([]);
  const [skills, Setskills] = useState([]);

  useEffect(() => {
    axios
      .get("./json/data.json")
      .then((res) => {
        return Setinfos(res.data.profile), Setskills(res.data.myskills);
      })
      .catch((err) => console.log(err));
  }, []);

  const Info = infos.map((inf) => {
    return <span key={inf.id}>{inf.info}</span>;
  });

  const myskill = skills.map((skill) => {
    return (
      <div className="prog" key={skill.id}>
        <div className="text">
          <h4>{skill.skill}</h4>
          <span>{skill.percentage}</span>
        </div>
        <div className="main-bar">
          <div className="bar" style={{ width: skill.percentage }}></div>
        </div>
      </div>
    );
  });

  return (
    <div className="profile" id="profile">
      <div className="container">
        <div className="info">
          <h3>My Profile</h3>
          <div className="row">
            <div className="col">
              <span>Name</span>
              <span>Birthday</span>
              <span>Address</span>
              <span>Phone</span>
              <span>Email</span>
              <span>Website</span>
            </div>
            <div className="col">{Info}</div>
          </div>
        </div>
        <div className="skills">
          <h3>Some Skills</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            praesentium blanditiis esse cupiditate, omnis similique.
          </p>
          <div className="progress">{myskill}</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
