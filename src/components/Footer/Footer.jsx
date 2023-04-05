export default function Footer () {
    return (

      <div class="container-fluid">
          <footer className="text-center text-white" 
          style={{
          backgroundColor: "#3f51b5"
          }}> 
          <div className="footer footer-expand-lg"> 
        <section class="mt-5">
          <div className="row text-center d-flex justify-content-center pt-5">
          <div className="col-md-2">
          <h6 class="text-uppercase font-weight-bold">
          <a href="/country" class="text-white">Country Facts</a>
            </h6>
      </div>

      <div className="col-md-2">
          <h6 class="text-uppercase font-weight-bold">
          <a href="/country" class="text-white">Cost of Living</a>
          </h6>
      </div>

      <div className="col-md-2">
          <h6 class="text-uppercase font-weight-bold">
          <a href="./about" class="text-white">About Us</a>
          </h6>
      </div>

      <div className="col-md-2">
          <h6 class="text-uppercase font-weight-bold">
          <a href="./components/Contacts/Contact" class="text-white">Contact Us</a>
          </h6>
          </div>
         
      </div>
        </section>

      <hr class="my-5" />
        <section class="mb-5">
          <div class="row d-flex justify-content-center">
          <div class="col-lg-8">
            <p> OnTheMove is a website where you can access all the world's country facts as well as the cost of living information for all the cities across the world.</p>
            <p>You can also compare the cost of living between cities and get to see the location of the countries using the map.</p>
          </div>
          </div>
         </section>
    
      </div>

    <div
         class="text-center p-3"
         style={{
          BackgroundColor: "rgba(0, 0, 0, 0.2)"
         }}
        >
          © 2023 Copyright:
          <a class="text-white">OnTheMove.com</a >
    </div>
  </footer>

    </div>

    );
}