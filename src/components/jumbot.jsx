import React from 'react';

import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import rome from '../assets/rome.jpg'
function Cards() {
    return (

<div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
      <img
          className="d-block w-100"
          style={{height: "80vh"}}
          src={rome}
          alt="First slide"
        />      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3">Rome: the Eternal City</h1>
        <p class="lead">Rome, the Eternal City, captivates visitors with its grandeur and timeless beauty. Step back in time as you wander through ancient ruins such as the Colosseum, Roman Forum, and Pantheon, marveling at the ingenuity of past civilizations. Discover the Vatican City, home to St. Peter's Basilica and the Sistine Chapel, where art and religion converge in breathtaking splendor</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">


<coloumn>
        {/* <Link href="subscibe"> <Button>Subscribe for more update</Button></Link>  */}
        {/* <Link href="tourspakage">Tours and Packages</Link> */}
         {/* <Link href="tourspakage"> <Button>see more !!!</Button></Link> */}
          {/* <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button> */}
       
          </coloumn>

       
       
        </div>
      </div>
      
          </div>

    
);
}

export default Cards;