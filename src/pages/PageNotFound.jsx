import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="container mt-5 text-center">
      <h2>404 Page not found...</h2>
      <div className="pt-5">
        <div tag="h6" className="container mb-0">
          <Link to={"/"} className="text-body">
            <i className="bi bi-arrow-left-circle-fill"> Back</i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
