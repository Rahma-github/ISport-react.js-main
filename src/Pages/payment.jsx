import  { useState } from "react";

const Payment = () => {
  const [formData, setFormData] = useState({
   
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Payment Processed Successfully!");
  
    setFormData({
      cardName: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      address: "",
      city: "",
      zip: "",
    });
  };

  return (
    <div className="container my-5">
      <h2 className="text-center text-danger fw-bold">Secure Payment</h2>
      <p className="text-muted text-center">Complete your purchase by entering your payment details.</p>

      <div className="card shadow-sm p-4 mx-auto" style={{ maxWidth: "500px" }}>
        <form onSubmit={handleSubmit}>
          {/* Cardholder Name */}
          <div className="mb-3">
            <label className="form-label">Cardholder Name</label>
            <input
              type="text"
              name="cardName"
              className="form-control"
              required
              value={formData.cardName}
              onChange={handleChange}
            />
          </div>

          {/* Card Number */}
          <div className="mb-3">
            <label className="form-label">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              className="form-control"
              maxLength="16"
              pattern="\d{14}"
              placeholder="1234 5678 9012 3456"
              required
              value={formData.cardNumber}
              onChange={handleChange}
            />
          </div>

          {/* Expiry & CVV */}
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">Expiry Date</label>
                <input
                  type="text"
                  name="expiryDate"
                  className="form-control"
                  placeholder="MM/YY"
                  pattern="\d{2}/\d{4}"
                  required
                  value={formData.expiryDate}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">CVV</label>
                <input
                  type="password"
                  name="cvv"
                  className="form-control"
                  maxLength="3"
                  pattern="\d{3}"
                  required
                  value={formData.cvv}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Billing Address */}
          <div className="mb-3">
            <label className="form-label">Billing Address</label>
            <input
              type="text"
              name="address"
              className="form-control"
              required
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          {/* City & Zip */}
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">City</label>
                <input
                  type="text"
                  name="city"
                  className="form-control"
                  required
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">ZIP Code</label>
                <input
                  type="text"
                  name="zip"
                  className="form-control"
                  pattern="\d{5}"
                  required
                  value={formData.zip}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Pay Now Button */}
          <button type="submit" className="btn btn-success w-100">
            💳 Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
