import React from "react";

export default function Register() {
  return (
    <form className="container">
      <div className="form-outline mb-4">
        <input type="text" className="form-control " />
        <label className="form-label ">Name</label>
      </div>

      <div className="form-outline mb-4">
        <input type="text" className="form-control" />
        <label className="form-label">Username</label>
      </div>

      <div className="form-outline mb-4">
        <input type="email" className="form-control" />
        <label className="form-label">Email</label>
      </div>

      <div className="form-outline mb-4">
        <input type="password" className="form-control" />
        <label className="form-label">Password</label>
      </div>

      {/* <!-- Repeat Password input --> */}
      <div className="form-outline mb-4">
        <input type="password" className="form-control" />
        <label className="form-label">Repeat password</label>
      </div>

      {/* <!-- Checkbox --> */}
      <div className="form-check d-flex justify-content-center mb-4">
        <input className="form-check-input me-2" type="checkbox" />
        <label className="form-check-label">
          I have read and agree to the terms
        </label>
      </div>

      {/* <!-- Submit button --> */}
      <button type="submit" className="btn  btn-block mb-5">
        Sign in
      </button>
    </form>
  );
}
