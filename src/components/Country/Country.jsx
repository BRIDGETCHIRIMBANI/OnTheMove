import { useEffect, useState } from "react";

export default function Country () {

    //define a state variable called countries using the UseState hook. It's intial value is an empty array.//
    const [countries, setCountries]=useState([]);

    //HandleSubmit is a function that takes an event as an argument(It is triggered by an event such as when a user clicks on a button)
    const handleSubmit = (e) => {
      e.preventDefault();

    }

 //"options" is a variable which contains information about the type of request to be made to the API.//
 const options = { 
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a95b39b821msh95dd7fa69aca5b2p116b83jsnaef79a653966',
        'X-RapidAPI-Host': 'country-facts.p.rapidapi.com'
    }
};
//The fetch function sends a GET request to the specificied URL using the "fetch" method. It includes the object "options" in the request headers.//
//This is important because the server needs to know how to parse the request payload in order to extract the relevant data.//
// If the request is successful, the response is converted to JSON using the "json()" method. The resulting data is logged to the console and returned.//
//If request fails, an error message is logged to the console.//
function fetchCountries() {
    fetch('https://country-facts.p.rapidapi.com/all', options)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        return data;
    })
    .catch(err => console.error(err));
}

    const getCities = async () => {
        const response = await fetch('https://country-facts.p.rapidapi.com/all', options);
        const cities = await response.json();
        return cities;
    }

    //The UseEffect hook takes 2 arguments(a function and a dependancy array).//
// The function passed as the first argument will be executed when the component mounts.//
//The function is calling the "fetchCountries" function which retrieves data from an API and returns it.//
//Returned data is set as the value of "countries" state variable using the "setCountries" function.//
//The dependency array passed as the second argument is an empty array. The function will only be executed once when the component mounts.//
useEffect(() => {
    getCities().then(cities => {
        console.log(cities);
    });
// Countries state variable is logged to the console.The log statement will not display the actual value of "countries" immediately after it is set in the "UseEffect" hook because in React state updates are asynchronous.//
        // console.log(countries);
    }, []);

    // This is the user-interface that the user will interact with. 
    return (
        <div className="search">
            <h1> Cost of Living Comparison</h1>
    {/* This action happens when the form is submitted.
    When the user enters info in the input field and clicks the Compare button, the 'handleSubmit function is called.*/}
        <form onSubmit={handleSubmit} className="">
          <input className="ml-2 border-2 border-black-500 bg-white h-10 px-8 pr-16 rounded-lg text-sm focus:outline-none" name="City1" id="City1" type="text" placeholder="Enter City 1..."/>
          <input className="ml-2 border-2 border-black-500 bg-white h-10 px-8 pr-16 rounded-lg text-sm focus:outline-none" name="City1" id="City2" type="text" placeholder="Enter City 2..."/>
          <input className="ml-2 border-2 border-black-500 bg-white h-10 px-8 pr-16 rounded-lg text-sm focus:outline-none" name="City1" id="City3" type="text" placeholder="Enter City 3..."/> 
          <button className="ml-2 bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded" type="submit">Compare</button>
        </form>
       </div>
    );
        }