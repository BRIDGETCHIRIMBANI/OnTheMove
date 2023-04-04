import { useEffect, useState } from "react";

export default function Country () {

    //define a state variable called countries using the UseState hook. It's intial value is an empty array.//
    const [countries, setCountries]=useState([]);

    //HandleSubmit is a function that takes an event as an argument(It is triggered by an event such as when a user clicks on a button)
    const handleSubmit = async (event) => {
      event.preventDefault();
      const City1 = document.getElementByID ('city1').value;
      const City2 = document.getElementByID ('city2').value;
      const City1Array = City1.split('-');
      const City2Array = City2.split('-');

      const cityPrices = await getPrices();
      console.log(cityPrices);

    }

    const getPrices = async () => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'a95b39b821msh95dd7fa69aca5b2p116b83jsnaef79a653966',
                'X-RapidAPI-Host': 'cost-of-living-and-prices.p.rapidapi.com'
            }
        };
        
        fetch('https://cost-of-living-and-prices.p.rapidapi.com/prices?city_name=Bratislava&country_name=Slovakia', options)
	    .then(response => response.json())
	    .then(response => {return response})
	    .catch(err => console.error(err));
    }

    const getCities = async () => {
        const options = { 
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '1526a07e77msh8e85f3abfa458bcp1cf15djsn8400d4456de9',
            'X-RapidAPI-Host': 'country-facts.p.rapidapi.com'
          }
        };
        const response = await fetch('https://country-facts.p.rapidapi.com/all', options);
        const data = await response.json();
        return data;
      };
      
      useEffect(() => {
        const fetchCountries = async () => {
          const countriesData = await getCities();
          setCountries(countriesData);
        };
        fetchCountries();
      }, []);
      
      
    // This is the user-interface that the user will interact with. 
    return (
        <div className="container my-4 mx-auto width-75 p-4 rounded" style={{backgroundColor: "white"}}>
            
            <h2>Cost of Living Comparison</h2> 
    {/* This action happens when the form is submitted.
    When the user enters info in the input field and clicks the Compare button, the 'handleSubmit function is called.*/}
        <form onSubmit={handleSubmit} > 
        <div className="row mb-3">
            <div class="col-md 6"> 
            <input list="cities" type="text" className="form-control border-dark" placeholder="Search City 1" id="city1"></input>
            </div>
            <div class="col-md 6"> 
            <input list="cities" type="text" className="form-control border-dark" placeholder="Search City 2" id="city2"></input>
            </div>
            </div>
          <button type="button" class="btn btn-outline-search">Search</button>  
        </form>
        <datalist id="cities">
            {countries && countries.map(country => {
                return (<option value={country.capital[0]+'-'+country.name.common}/>);
            })}
        </datalist>
       </div>
    );

}

