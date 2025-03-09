import { useForm } from "react-hook-form";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log( data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4 mx-auto" style={{ maxWidth: "500px" }}>
        <h2 className="text-center text-danger mb-3">Contact Us</h2>

        {submitted && (
          <div className="alert alert-success text-center">
            Form submitted successfully!
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
         
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className={`form-control ${errors.fullName ? "is-invalid" : ""}`}
              {...register("fullName", { required: true, minLength: 3 })}
            />
            {errors.fullName && (
              <div className="invalid-feedback">
                Full Name must be at least 3 characters long.
              </div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              {...register("email", { required: true, pattern: /^\S+@\S+\.com$/ })}
            />
            {errors.email && (
              <div className="invalid-feedback">Please enter a valid email.</div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              {...register("password", { required: true, minLength: 8 })}
            />
            {errors.password && (
              <div className="invalid-feedback">
                Password must be at least 8 characters long.
              </div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
              {...register("confirmPassword", {
                required: true,
                validate: (value) => value === watch("password"),
              })}
            />
            {errors.confirmPassword && (
              <div className="invalid-feedback">Passwords must match.</div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Subject</label>
            <select
              className={`form-control ${errors.subject ? "is-invalid" : ""}`}
              {...register("subject", { required: true })}
            >
              <option value="">Select a subject</option>
              <option value="Questation">Questation</option>
              <option value="Support">Support</option>
              <option value="Feedback">Feedback</option>
            </select>
            {errors.subject && (
              <div className="invalid-feedback">Please select a subject.</div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea
              className={`form-control ${errors.message ? "is-invalid" : ""}`}
              rows="4"
              {...register("message", { required: true, minLength: 10 })}
            ></textarea>
            {errors.message && (
              <div className="invalid-feedback">
                Message must be at least 10 characters long.
              </div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Phone Number (Optional)</label>
            <input
              type="text"
              className={`form-control ${errors.phone ? "is-invalid" : ""}`}
              {...register("phone", {
                pattern: /^[0-9]{11}$/,
              })}
            />
            {errors.phone && (
              <div className="invalid-feedback">
                Phone number must be exactly 10 digits.
              </div>
            )}
          </div>

          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-danger">
              Submit
            </button>
            <button type="button" className="btn btn-secondary" onClick={reset}>
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
