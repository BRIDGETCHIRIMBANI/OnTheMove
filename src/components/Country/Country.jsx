import { useEffect, useState } from "react";

export default function Country () {

    //define state variables using the UseState hook. It's intial value is an empty array.//
    const [city1, setCity1] = useState('');
    const [city2, setCity2] = useState('');
    const [countries, setCountries]=useState([]);
    const [cost1, setCost1] = useState({});
    const [cost2, setCost2] = useState({});
    const [capital, setCapital] = useState();

    //HandleSubmit is a function that takes an event as an argument(It is triggered by an event such as when a user clicks on a button)
    const handleSubmit = async (event) => {
      event.preventDefault();
      const City1Array = city1.split('-');
      const City2Array = city2.split('-');

      console.log(city1);
      await getPrices(City1Array[0], City1Array[1]);
      await getPrices2(City2Array[0], City2Array[1]);
      // setPrices(await getPrices());
      console.log(cost1);
      console.log(cost2);
    }

    const handleSearchButtonClick = async (event) => {
      event.preventDefault()
      
      const city = document.getElementById('capital').value.split('-')[0];    
      try {
      const data = await getCities(); 
      const countryFacts = data.find(item => item.capital[0] === city);
      //const capital =  (event.target.value);
      console.log("country facts found: ", countryFacts, "capital", city);
      
      setCapital(countryFacts);
          } catch (error) {
      console.error('Error:', error);
    }
  };

  
    const getPrices = async (city, country) => {
        const options = {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': 'd9633d4537mshe5564d8bc795fa4p17cb63jsn664bcbec1b61',
              'X-RapidAPI-Host': 'cost-of-living-and-prices.p.rapidapi.com'
            }
        };
        
      //  await fetch(`cities.json/prices?city_name=${city}&country_name=${country}`, options)
	      await fetch(`https://cost-of-living-and-prices.p.rapidapi.com/prices?city_name=${city}&country_name=${country}`, options)
        .then(response => {
        return response.json()
      })
	    .then(data => {
        setCost1(data);
      })
	    .catch(err => console.error(err));
    }

    const getPrices2 = async (city, country) => {
      const options = {
          method: 'GET',
          headers: {
              'X-RapidAPI-Key': 'a95b39b821msh95dd7fa69aca5b2p116b83jsnaef79a653966',
              'X-RapidAPI-Host': 'cost-of-living-and-prices.p.rapidapi.com'
          }
      };
      
     //await fetch(`prices.json/prices?city_name=${city}&country_name=${country}`, options)
      await fetch(`https://cost-of-living-and-prices.p.rapidapi.com/prices?city_name=${city}&country_name=${country}`, options)
     .then(response => {
      return response.json()
     })
    .then(data => {
      setCost2(data);
     })
    .catch(err => console.error(err));
    }
    console.log(cost1);

    const getCities = async () => {
      const options = { 
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '1526a07e77msh8e85f3abfa458bcp1cf15djsn8400d4456de9',
          'X-RapidAPI-Host': 'country-facts.p.rapidapi.com'
        }
      };
         // const response = await fetch('https://country-facts.p.rapidapi.com/all', options);
          const response = await fetch('country.json', options);
          const data = await response.json();
          return data;
      };
     
      function handleCity1Change(event) {
        setCity1(event.target.value);
      }

      function handleCity2Change(event) {
          setCity2(event.target.value);
      }
       
      useEffect(() => { 
       const fetchCountries = async () => {
          const countriesData = await getCities();
          setCountries(countriesData);
        };
        fetchCountries();
      }, []); 
      
    // This is the user-interface that the user will interact with. 
      return ( 
           <> 
          
           <div class="country-box">
           <h2 class="text-center">Excited for some World Knowledge?!! Search Below.</h2>
          < form onSubmit = {handleSearchButtonClick}> 
          <div class="search-input">
           <input list="cities" type="text" class="form-control form-control-sm border-dark" placeholder="Search City 1" id="capital"></input>
           <button type="submit" class="btn btn-outline-search" id="searchButton">Search</button>
           </div>
           </form>
            </div>
           <div class="accordion" id="accordionExample"></div>
           <div class="card">
           <div class="card-header" id="headingOne">
           <h2 class="mb-0">
           <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
           County Facts!
            </button>
          </h2>
           </div> 
           <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
           <div className="card-body">
           {capital ? (
           <ul>
       <li>
        <strong>Country Info</strong>
        <ul>
          <img src={capital?.flag} alt={'${capital} flag'} />
          <li>country: {capital?.name.common}</li>
          <li>capital:{capital?.capital}</li>
          <li>population:{capital?.population}</li>
          <li>language:{capital?.language}</li>
          <a href={`/Map?lat=${capital?.latlng[0]}&lng=${capital?.latlng[1]}`} onClick={() => (capital)}>Show On Map</a>
         </ul>
             </li>
               </ul>
             ) : null}
            </div> 
            </div>

            <div className="container my-4 mx-auto width-75 p-4 rounded" style={{backgroundColor: "white"}}>
         <h2>Cost of Living Comparison</h2> 
          {/* This action happens when the form is submitted.
           When the user enters info in the input field and clicks the Compare button, the 'handleSubmit function is called.*/}
         <form onSubmit={handleSubmit} > 
         <div className="row mb-3">
         <div class="col-md 6"> 
         <input list="cities" type="text" className="form-control border-dark" placeholder="Search City 1" id="city1" onChange={handleCity1Change}></input>
         </div>
          <div class="col-md 6"> 
          <input list="cities" type="text" className="form-control border-dark" placeholder="Search City 2" id="city2" onChange={handleCity2Change}></input>
          </div>
          </div>
         <button type="submit" class="btn btn-outline-search">Search</button>  
         </form>
        <table>
        <tr>
        <th>Item name</th>
        <th>Price 1</th>
        <th>Price 2</th>
       </tr>
       {cost1.prices && cost1.prices.map((item, index) => {
       return <tr key={index}>
        <td>{item.item_name}</td>
        <td>{item?.usd?.avg}</td>
        <td>{cost2?.prices?.filter(c2 => c2.item_name === item.item_name)[0]?.usd?.avg}</td>
      </tr>
     })}
     </table>

       <datalist id="cities">
        {countries && countries.map((country, index) => {
            return (<option key={index} value={country.capital[0]+'-'+country.name.common}/>);
        })}
       </datalist>
       </div> 
  
              </div>
        
            </>

            );
      }