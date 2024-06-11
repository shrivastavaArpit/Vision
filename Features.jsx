
import g from '../assets/g.jpg'
import h from '../assets/h.jpg'
import hawai from '../assets/hawai.jpg'
function Featurescompo() {
    return (
      <>
<div className="container mt-5">
      <header className="mb-5">
        <h1 className="display-4 text-center">Explore the Wonders of the World</h1>
        <p className="lead text-center">Discover amazing places to visit and experience unforgettable adventures.</p>
      </header>

      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
          <img
          className="d-block w-100"
          style={{height: "80vh"}}
          src={g}
          alt="first slide"
        />
            {/* <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Place 1" /> */}
            <div className="card-body">
              <h5 className="card-title">Beautiful Beaches</h5>
              <p className="card-text">Relax and unwind on the most beautiful beaches in the world.</p>
              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
          <img
          className="d-block w-100"
          style={{height: "80vh"}}
          src={h}
          alt="first slide"
        />
            {/* <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Place 2" /> */}
            <div className="card-body">
              <h5 className="card-title">skyscrappers</h5>
              <p className="card-text">Skyscrapers are iconic landmarks offering breathtaking views and unique experiences high above the city</p>
              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
          <img
          className="d-block w-100"
          style={{height: "80vh"}}
          src={hawai}
          alt="first slide"
        />
            {/* <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Place 3" /> */}
            <div className="card-body">
              <h5 className="card-title">Historical Sites</h5>
              <p className="card-text">Visit ancient landmarks and immerse yourself in rich history.</p>
              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-5">
        <p className="text-center">&copy; 2024 TravelSite. All rights reserved.</p>
      </footer>
    </div>


</>
);
}


export default Featurescompo;