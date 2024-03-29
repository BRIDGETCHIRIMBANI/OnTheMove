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
        <a class="nav-link" href="/Map">Google Maps</a>
        <a class="nav-link" href="./Contact">Contact Us</a>


      </div>
    </div>
  </div>
</nav>
        

    );
}