import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      setError("Please enter both email and password!");
      return;
    }

    dispatch(login({ email }));
    navigate("/favorite");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4 rounded" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center text-dark mb-3">Login</h2>

        {error && <div className="alert alert-danger text-center">{error}</div>}

        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="btn btn-dark w-100" onClick={handleLogin}>
          Login
        </button>

        <p className="text-center mt-3">dont have an account? <a href="/signup" className="text-decoration-none text-danger">Sign up here</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
