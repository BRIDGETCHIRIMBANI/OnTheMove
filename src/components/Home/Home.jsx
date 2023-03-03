
export default function Home () {
   
  let slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
  }

    return (
        <div>
            <div id="demo"></div>
            <h2 className="text-2xl font-bold text-center">OnTheMove</h2>
         <div class="slideshow-container">
            <div class="mySlides fade">
                <div class="numbertext">1 / 5</div>
                 {/* <img src={logo} style={{}} />  */}
              </div>

              <div class="mySlides fade">
                <div class="numbertext">2 / 5</div>
                {/* <img src="" style={{}} />  */}
           </div>

              <div class="mySlides fade">
                <div class="numbertext">3 / 5</div>
                {/* <img src="" style={{}} /> */}
              </div>

                <div class="mySlides fade">
                <div class="numbertext">4 / 5</div>
                {/* <img src="" style={{}} /> */}
                </div>

                <div class="mySlides fade">
                <div class="numbertext">5 / 5</div>
                {/* <img src="" style={{}} /> */}
                
        </div>

        <a class="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
        <a class="next" onClick={() => plusSlides(1)}>&#10095;</a>

        <div style="text-align:center">
        <span class="dot" onclick="currentSlide(1)"></span> 
        <span class="dot" onclick="currentSlide(2)"></span> 
        <span class="dot" onclick="currentSlide(3)"></span> 
</div>

        </div>
        </div>
    );
}