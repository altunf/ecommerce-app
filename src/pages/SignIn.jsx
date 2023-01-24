import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const styleNotify = {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
};

const username = "user1";
const password = "pass1";

export default function SignIn() {
  const [user, setUser] = useState("");
  const [usPassword, setUsPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const notifySuccess = () =>
      toast.success("Giriş Başarılı!", {
        styleNotify,
      });
    const notifyError = () =>
      toast.error("Lütfen geçerli bir email veya şifre giriniz!", {
        styleNotify,
      });
    setUser("");
    setUsPassword("");
    user === username && usPassword === password
      ? notifySuccess()
      : notifyError();
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="form-outline mb-4">
        <input
          className="form-control"
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <label className="form-label">Email or username</label>
      </div>

      <div className="form-outline mb-4">
        <input
          className="form-control"
          type="password"
          value={usPassword}
          onChange={(e) => setUsPassword(e.target.value)}
        />
        <label className="form-label">Password</label>
      </div>

      <div className="row mb-4">
        <div className="col-md-6 d-flex justify-content-center">
          <div className="form-check mb-3 mb-md-0">
            <input className="form-check-input" type="checkbox" />
            <label className="form-check-label">Remember me </label>
          </div>
        </div>

        <div className="col-md-6 d-flex justify-content-center">
          <a href="#!">Forgot password?</a>
        </div>
      </div>
      <Link to="/">
        <button type="submit" className="btn btn-block mb-5">
          Sign in
        </button>
      </Link>

      <div className="text-center">
        <p>
          Not a member? <Link to="Register">Register</Link>
        </p>
      </div>
    </form>
  );
}
