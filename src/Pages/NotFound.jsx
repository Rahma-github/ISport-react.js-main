const NotFound = () => {
  return (
    <div className="container text-center my-5">
      <h1 className="display-3 text-danger fw-bold">404</h1>
      <h2 className="text-muted">Oops! Page Not Found</h2>
    

      <img
        src="https://th.bing.com/th/id/OIP.Jb4XrrIxatYfB2DQxV0TngHaFs?rs=1&pid=ImgDetMain"
        alt="Page Not Found"
        className="img-fluid rounded shadow-lg my-4"
      />

      <div>
        <a href="/home" className="btn btn-primary btn-lg">
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
