
import g from '../assets/d.jpg'

function Cards() {
    return (
<div class="px-4 py-5 my-5 text-center">
<img
          className="d-block w-100"
          style={{height: "80vh"}}
          src={g}
          alt="First slide"
        />
    {/* <img class="d-block mx-auto mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/> */}
    <h4 class="display-5 fw-bold">Hong Kong: </h4>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">Experience the mesmerizing blend of tradition and modernity in Hong Kong, where ancient temples stand in harmony with towering skyscrapers. Explore vibrant street markets, indulge in world-class cuisine, and take in panoramic views from Victoria Peak. With its rich cultural heritage and dynamic cityscape, Hong Kong offers a captivating adventure for every traveler.</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        {/* <button type="button" class="btn btn-primary btn-lg px-4 gap-3">visit now !!!</button> */}
        {/* <button type="button" class="btn btn-outline-secondary btn-lg px-4">Secondary</button> */}
      </div>
    </div>
  </div>
);
}

export default Cards