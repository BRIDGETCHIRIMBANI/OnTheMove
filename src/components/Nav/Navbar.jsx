export default function Navbar () {
    return (
        
        <div>
            <section class="top-nav">
      <div>
        OnTheMove
      </div>
      <input id="menu-toggle" type="checkbox" />
      <label class='menu-button-container' for="menu-toggle">
      <div class='menu-button'></div>
    </label>
      <ul class="menu">
        <li>Home</li>
        <li>Globe</li>
        <li>By Continent</li>
        <li>Articles</li>
        <li>Contact Us</li>
      </ul>
    </section>
        </div>
    );
}