import rome from '../assets/paris.jpg';
import { Link } from 'react-router-dom';

function Cards() {
  return (
    <div className="row align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img
          className="d-block w-100"
          style={{ height: '80vh' }}
          src={rome}
          alt="First slide"
        />
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold lh-1 mb-3">Paris: the City of Lights</h1>
        <p className="lead">
        Paris, the City of Lights, beckons with its timeless allure and romantic ambiance. Immerse yourself in its enchanting streets lined with iconic landmarks such as the Eiffel Tower, Notre-Dame Cathedral, and Louvre Museum. Indulge in exquisite French cuisine at charming cafes and bistros, stroll along the Seine River, and admire the artistry of Haussmannian architecture. With its rich history, cultural treasures, and vibrant atmosphere, Paris promises an unforgettable experience for every traveler.
        </p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        {/* <Link href="tourspakage">Tours and Packages</Link> */}
          {/* <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">visit now !!!</button> */}
          {/* <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button> */}
        </div>
      </div>
    </div>
  );
}

export default Cards;
