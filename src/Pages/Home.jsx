// import { Link } from "react-router-dom";
import "./Home.css"; 

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero text-center text-white d-flex align-items-center pb-0 mb-0">
        <div className="container">
          <h1 className="display-5 fw-bold text-dark">Your Ultimate Sports Destination</h1>
          <p className="lead text-dark">Find the best sportswearat unbeatable prices.</p>
          {/* <div className="mt-4 d-flex justify-content-center gap-3">
            <Link to="/products" className="btn btn-lg btn-light px-4 fw-bold">
              🛍️ Shop Now
            </Link>
            <Link to="/favorite" className="btn btn-lg btn-outline-light px-4 fw-bold">
              ❤️ Wishlist
            </Link>
          </div> */}

          
        </div>
      </section>

      {/* Welcome Section */}
      <section className="  d-flex justify-content-center ">
    
          <div className="col-md-6 ">
            <img
              src="https://static.vecteezy.com/system/resources/previews/014/807/769/non_2x/sports-shop-line-icon-vector.jpg"
              alt="Sport Shop"
              className="img-fluid rounded shadow-sm"
              width="100%"
            />
          </div>
      </section>

      {/* Features Section */}
      <section className="container text-center py-5">
        <div className="row g-4">
          {[
            {
              img: "https://cdn-icons-png.flaticon.com/512/2331/2331970.png",
              title: "Fast Delivery",
              desc: "Receive your orders within 24 hours, hassle-free.",
            },
            {
              img: "https://cdn-icons-png.flaticon.com/512/3102/3102915.png",
              title: "Secure Payment",
              desc: "Shop with confidence using our 100% secure payment options.",
            },
            {
              img: "https://cdn-icons-png.flaticon.com/512/929/929416.png",
              title: "24/7 Support",
              desc: "Our support team is here to assist you anytime.",
            },
          ].map((feature, index) => (
            <div key={index} className="col-md-4">
              <div className="card p-4 border-0 shadow-sm">
                <img src={feature.img} alt={feature.title} className="img-fluid mx-auto" width="80px" />
                <h5 className="mt-3 fw-bold">{feature.title}</h5>
                <p className="text-muted">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
