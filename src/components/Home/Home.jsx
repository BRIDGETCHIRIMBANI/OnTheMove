import LearnMore from "../LearnMore/LearnMore";
import AboutUs from "../AboutUs/about";
import Netherlands from "../Images/Netherlands.jpg";

export default function Home () {
   
    return ( 
        <div className="container-fluid"> 
        <div className="image"
        style={{
            backgroundImage: 'url('+Netherlands+')',
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "50vh",
            width: "100%"
         }}
         >
        <div className="text">
            <h1>Welcome To OnTheMove</h1>
            <h3>Your go to place to ease your heart when traveling by providing you with all the nitty gritties of the World</h3>
            </div>
        </div>
 
        <AboutUs/>

        <h1 style={{fontWeight: 'bold', textAlign: "center", margin: '0 auto 20px'}}>Learn More</h1>
        <div className="learn-more-container"> 
            <LearnMore/>
            </div>
        </div>
    );
}