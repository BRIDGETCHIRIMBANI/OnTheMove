import { useEffect, useState } from "react";
import axios from 'axios';

export default async function Country () {

    //define a state variable called countries using the UseState hook. It's intial value is an empty array.//
    const [countries, setCountries]=useState([]);

    //HandleSubmit is a function that takes an event as an argument(It is triggered by an event such as when a user clicks on a button)
    const handleSubmit = async (event) => {
      e.preventDefault();
      const City1 = document.getElementByID ('City1').value;
      const City2 = document.getElementByID ('City2').value;
      const City1Array = City1.split(',');
      const City2Array = City2.split(',');

      setCity1(City1Array[0]);
      setCity2(City2Array[0]);
    }

        //"options" is a variable which contains information about the type of request to be made to the API.//
        const options = { 
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'a95b39b821msh95dd7fa69aca5b2p116b83jsnaef79a653966',
                'X-RapidAPI-Host': 'country-facts.p.rapidapi.com'
            }
        };

//This function is responsible for getting the list of country facts from the API//
//It waits to fetch all the data from the API since it is a lot of data.//
    const getCities = async () => {
        const response = await fetch('https://country-facts.p.rapidapi.com/all', options);
        const cities = await response.json();
        return cities;
    }

    //The UseEffect hook takes 2 arguments(a function and a dependancy array).//
   // The async means that the function will return a Promise that resolves with the value returned by the function.
   // getCities will resolve with the 'response' object returned by the server.//
    useEffect(() => {
        const getCities = async () => {
            //axios.get returns a Promise. 
            //await waits for the Promise to resolve with the response data from the server.
           // The response data is stored in the 'response variable'
          const response = await axios.get('https://country-facts.p.rapidapi.com/all', {
            headers: {
              'X-RapidAPI-Key': 'a95b39b821msh95dd7fa69aca5b2p116b83jsnaef79a653966',
              'X-RapidAPI-Host': 'country-facts.p.rapidapi.com'
            }
          });
          setCountries(response.data);
        }
      
        getCities();
      }, []);
      
      
    // This is the user-interface that the user will interact with. 
    return (
        <div className="container my-4 mx-auto width-75 p-4 rounded" style={{backgroundColor: "white"}}>
            <h2> Cost of Living Comparison</h2>
    {/* This action happens when the form is submitted.
    When the user enters info in the input field and clicks the Compare button, the 'handleSubmit function is called.*/}
        <form onSubmit={handleSubmit} > 
        <div className="row mb-3">
            <div class="col-md 6"> 
            <input type="text" className="form-control border-dark" placeholder="Search City 1" id=""></input>
            </div>
            <div class="col-md 6"> 
            <input type="text" className="form-control border-dark" placeholder="Search City 2" id=""></input>
            </div>
            </div>
          <button type="button" class="btn btn-outline-search">Search</button>  
        </form>
       </div>
    );


        }

         //The fetch function sends a GET request to the specificied URL using the "fetch" method. It includes the object "options" in the request headers.//
        //This is important because the server needs to know how to parse the request payload in order to extract the relevant data.//
        // If the request is successful, the response is converted to JSON using the "json()" method. The resulting data is logged to the console and returned.//
        //If request fails, an error message is logged to the console.//
        // function fetchCountries() {
        //     fetch('https://country-facts.p.rapidapi.com/all', options).then((response) => {
        //         return response.json();
        //     }).then((data) => {
        //         return data;
        //     })  
        // }
