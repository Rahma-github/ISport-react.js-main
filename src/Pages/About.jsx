const About = () => {
  return (
    <div className="container my-5">
      <div className="text-center">
        <h1 className="display-4 fw-bold text-danger">About Us</h1>
        <p className="lead text-muted">Empowering your shopping experience with cutting-edge product management.</p>
      </div>

   

      <div className="row mt-5 text-center">
        <div className="col-md-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1077/1077976.png"
            alt="Mission"
            width={'200px'}
          />
          <h4 className="mt-3 fw-bold">Our Mission</h4>
          <p>We aim to revolutionize e-commerce with seamless product management and an unmatched user experience.</p>
        </div>

        <div className="col-md-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1048/1048998.png"
            alt="Vision"
            width={'200px'}
          />
          <h4 className="mt-3 fw-bold">Our Vision</h4>
          <p>To be the most customer-centric platform for effortless shopping and smart product tracking.</p>
        </div>

        <div className="col-md-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Team"
            width={'200px'}
          />
          <h4 className="mt-3 fw-bold">Our Team</h4>
          <p>A team of passionate developers and entrepreneurs dedicated to creating the best shopping experience.</p>
        </div>
      </div>

      <div className="text-center mt-5">
        <a href="/products" className="btn btn-danger btn-lg">
          🛍️ Explore Our Products
        </a>
      </div>
    </div>
  );
};

export default About;
