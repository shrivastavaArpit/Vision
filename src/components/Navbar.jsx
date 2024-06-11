// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import bootstrap from 'bootstrap/'
function Navbarcompo() {
  return (
    // <>
    <header class="p-3 bg-dark text-white">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
      <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
  <img src="https://i.pinimg.com/236x/52/83/99/528399a0327978953d5a542af8c862f3.jpg" className="bi me-2" width="40" height="32" alt="Bootstrap Icon" aria-label="Bootstrap" />
</a>


        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="/" class="nav-link px-2 text-white">Home</a></li>
          <li><a href="tourspakage" class="nav-link px-2 text-white">Tours and package</a></li>
          {/* <li><a href="Features" class="nav-link px-2 text-white">Features</a></li> */}

          <li><a href="Booking" class="nav-link px-2 text-white">Booking tickets</a></li>
          {/* <li><a href="Pricing" class="nav-link px-2 text-white">Pricing</a></li> */}


          <li><a href="FAQs" class="nav-link px-2 text-white">FAQs</a></li>
          <li><a href="about" class="nav-link px-2 text-white">About</a></li>

        </ul>
{/* 
        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input type="search" class="form-control form-control-dark" placeholder="Search..." aria-label="Search"/>
        </form> */}
        <div className="text-end">
  <ul className="list-inline">
    <li className="list-inline-item">
      <a href="login" className="btn btn-light">Login</a>
    </li>
    <li className="list-inline-item">
      <a href="signup" className="btn btn-warning">Sign-up</a>
    </li>
  </ul>
</div>

      </div>
    </div>
  </header>
  );

}

export default Navbarcompo;