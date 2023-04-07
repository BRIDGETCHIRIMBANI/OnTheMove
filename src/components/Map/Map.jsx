import React, { useState, useEffect } from 'react';

export default function Map() {
  const [isActive, setIsActive] = useState(true);
  const [place, setPlace] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const lat = urlParams.get('lat');
    const lng = urlParams.get('lng');

    // Update map's location with extracted latitude and longitude
    if (lat && lng) {
      setPlace(`Lat: ${lat}, Lng: ${lng}`);
      updateMapLocation(lat, lng);
    }
  }, []);

  // Function to display country's location on the map
  const displayCountryLocation = (lat, lng) => {
    // Logic to display country's location on the map
    console.log(`Displaying country location: lat=${lat}, lng=${lng}`);
  }

  // Function to update map's location based on lat and lng values
  const updateMapLocation = (lat, lng) => {
    console.log(`Updating map location to Lat: ${lat}, Lng: ${lng}`);
  }

  // Function to handle place change
  const handlePlaceChange = (newPlace) => {
    console.log('New Place:', newPlace);
  }

  // Function to handle search button click
  const handleSearchButtonClick = () => {
    // Perform search based on searchQuery
    console.log('Performing search for:', searchQuery);
  }

  const classes = 'map';

  return (
    <div className='map-container'>
      <section className='mx-auto my-5' style={{ maxWidth: '30rem' }}>
        <div className='card map-card'>
          <div
            id='map-container-google-1'
            className='z-depth-1-half map-container'
            style={{ height: '500px', width: '100%' }}
          >
            <iframe
              src='https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed'
              style={{ border: '0', width: '100%', height: '100%' }}
            ></iframe>
          </div>
          <div className={classes} onClick={() => setIsActive(!isActive)}>
            <div className='button px-2 mt-3'>
              <a
                className='btn btn-floating btn-lg living-coral text-white float-end'
                style={{ marginRight: '.75rem' }}
              >
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
  
}





