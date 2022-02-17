import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { getEmployeeInfo } from "../api";
import "./Detail.scss";

const Detail = () => {
  const [details, setDetails] = useState();
  const id = useParams();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios.get(getEmployeeInfo(id.id)).then((res) => {
      setDetails(res.data.data.user);
      setIsLoading(false);
    });
  }, [id.id]);
  if (isLoading) return "Loading..";

  return (
    <div className="container">
      <div className="main-content">
        <Link to={`/`}>
          <button className="back-button">get back</button>
        </Link>
        <div className="info">
          <h1>{details?.firstName + " " + details?.lastName}</h1>
          <h3>{details?.email}</h3>
          <h3>{details?.phoneNumber}</h3>
          <h3>{details?.salary + "$"}</h3>
        </div>
      </div>
    </div>
  );
};

export default Detail;
