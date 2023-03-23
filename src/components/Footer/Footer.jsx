export default function Footer () {
    return (
<footer className="text-center text-lg-start bg-light text-muted">
  
  <section className="">
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
        <h6 className="text-uppercase fw-bold mb-4"><a href="#!" class="text-reset">About Us</a></h6>
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
        <h6 className="text-uppercase fw-bold mb-4"><a href="#!" class="text-reset">Contact Us</a></h6>
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
        <h6 className="text-uppercase fw-bold mb-4"><a href="#!" class="text-reset">Help</a></h6>
        </div>
        </div>
        </div>
      </div>
    </div>
  </section>
  
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <div className="me-5 d-none d-lg-block">
      <span>Follow OnTheMove on:</span>
    </div>
    <div>
      <a href="" className="me-4 text-reset">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i class="fab fa-linkedin"></i>
      </a>
    </div>
  </section> 

  <div class="text-center p-4">
    © 2021 Copyright:
    <a class="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
</footer>
    );
}