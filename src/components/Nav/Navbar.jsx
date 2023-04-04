export default function Navbar () {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">OnThe<span class="text-danger" >Move</span></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="/">Home</a>
        <a class="nav-link" href="/country">Country</a>
        <a class="nav-link" href="#">Currency Converter</a>
        <a class="nav-link" href="#">LearnMore</a>
        <a class="nav-link" href="#">About Us</a>
        <a class="nav-link" href="#">Contact Us</a>


      </div>
    </div>
  </div>
</nav>
        


    //     <div>
    //         <section class="top-nav">
    //   <div>
    //     OnTheMove
    //   </div>
    //   <input id="menu-toggle" type="checkbox" />
    //   <label class='menu-button-container' for="menu-toggle">
    //   <div class='menu-button'></div>
    // </label>
    //   <ul class="menu">
    //     <li>Home</li>
    //     <li>Globe</li>
    //     <li>By Continent</li>
    //     <li>Articles</li>
    //     <li>Contact Us</li>
    //   </ul>
    // </section>
    //     </div>


    );
}