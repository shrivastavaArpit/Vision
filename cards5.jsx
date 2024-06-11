
import a from '../assets/a.jpg'
import b from '../assets/b.jpg'
import c from '../assets/c.jpg'
import d from '../assets/d.jpg'
import e from '../assets/e.jpg'
import f from '../assets/f.jpg'
import g from '../assets/g.jpg'
import h from '../assets/h.jpg'
import hawai from '../assets/hawai.jpg'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


function Cards() {
    return (
<div class="album py-5 bg-light">
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col">
          <div class="card shadow-sm">
          <img
          className="d-block w-100"
          style={{height: "80vh"}}
          src={a}
          alt="first slide"
        />
        

            {/* <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}

            <div class="card-body">
              <p class="card-text">London's streets blend historic charm with modern vibrancy, offering a captivating journey through time and culture</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  {/* <button type="button" class="btn btn-sm btn-outline-secondary">View</button> */}
                  {/* <Link href="subscibe"> <Button>Subscribe for more update</Button></Link>  */}

                  {/* <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> */}
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img
          className="d-block w-100"
          style={{height: "80vh"}}
          src={b}
          alt="first slide"
        />
            {/* <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}

            <div class="card-body">
              <p class="card-text">Experience the grandeur and history of magnificent palaces, where royal splendor and architectural brilliance captivate every visitor.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  {/* <button type="button" class="btn btn-sm btn-outline-secondary">View</button> */}
                  {/* <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> */}
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img
          className="d-block w-100"
          style={{height: "80vh"}}
          src={c}
          alt="first slide"
        />
            {/* <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}

            <div class="card-body">
              <p class="card-text">Times Square dazzles with its neon lights and vibrant energy, making it the pulsating heart of New York City.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  {/* <button type="button" class="btn btn-sm btn-outline-secondary">View</button> */}
                  {/* <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> */}
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
          <img
          className="d-block w-100"
          style={{height: "80vh"}}
          src={hawai}
          alt="first slide"
        />
            {/* <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}

            <div class="card-body">
              <p class="card-text">Relax and unwind on a beautiful beach, where pristine sands and crystal-clear waters create a perfect paradise.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  {/* <button type="button" class="btn btn-sm btn-outline-secondary">View</button> */}
                  {/* <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> */}
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img
          className="d-block w-100"
          style={{height: "80vh"}}
          src={d}
          alt="first slide"
        />
            {/* <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}

            <div class="card-body">
              <p class="card-text">Skyscrapers soar into the sky, showcasing architectural marvels and offering breathtaking cityscape views</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  {/* <button type="button" class="btn btn-sm btn-outline-secondary">View</button> */}
                  {/* <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> */}
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img
          className="d-block w-100"
          style={{height: "80vh"}}
          src={e}
          alt="first slide"
        />
            {/* <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}

            <div class="card-body">
              <p class="card-text">The Dubai Twin Towers stand as iconic landmarks, blending modern luxury with stunning architectural design</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  {/* <button type="button" class="btn btn-sm btn-outline-secondary">View</button> */}
                  {/* <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> */}
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
          <img
          className="d-block w-100"
          style={{height: "80vh"}}
          src={f}
          alt="first slide"
        />
            {/* <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}

            <div class="card-body">
              <p class="card-text">Marvel at the beautiful fountain, where water dances gracefully in a mesmerizing display of lights and music.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  {/* <button type="button" class="btn btn-sm btn-outline-secondary">View</button> */}
                  {/* <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> */}
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img
          className="d-block w-100"
          style={{height: "80vh"}}
          src={g}
          alt="first slide"
        />
            {/* <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}

            <div class="card-body">
              <p class="card-text">Stay at a luxurious hotel near the beach, where serene ocean views and easy access to sandy shores promise a perfect getaway.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  {/* <button type="button" class="btn btn-sm btn-outline-secondary">View</button> */}
                  {/* <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> */}
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img
          className="d-block w-100"
          style={{height: "80vh"}}
          src={h}
          alt="first slide"
        />
            {/* <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}

            <div class="card-body">
              <p class="card-text">Skyscrapers dominate the skyline, embodying innovation and offering panoramic views of the bustling city below</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  {/* <button type="button" class="btn btn-sm btn-outline-secondary">View</button> */}
                  {/* <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> */}
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
   );
}

export default Cards;