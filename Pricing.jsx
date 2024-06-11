function Pricingcompo() {
    return (
      <>
   <div className="container mt-5">
      <header className="mb-5 text-center">
        <h1 className="display-4">Our Pricing Plans</h1>
        <p className="lead">Choose the plan that suits you best and start your adventure today!</p>
      </header>

      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Basic</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">$10 <small className="text-muted">/ mo</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>5 tours per month</li>
                <li>Basic support</li>
                <li>Access to basic features</li>
              </ul>
              <button type="button" className="btn btn-lg btn-block btn-primary">Sign up for Basic</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Standard</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">$20 <small className="text-muted">/ mo</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>15 tours per month</li>
                <li>Priority support</li>
                <li>Access to all features</li>
              </ul>
              <button type="button" className="btn btn-lg btn-block btn-primary">Sign up for Standard</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Premium</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">$30 <small className="text-muted">/ mo</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Unlimited tours</li>
                <li>24/7 support</li>
                <li>Access to exclusive features</li>
              </ul>
              <button type="button" className="btn btn-lg btn-block btn-primary">Sign up for Premium</button>
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


export default Pricingcompo;