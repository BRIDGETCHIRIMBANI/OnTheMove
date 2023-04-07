import React, { useState, useEffect } from 'react';

export default function Map() {
  const [isActive, setIsActive] = useState(true);
  const [place, setPlace] = useState('');

  useEffect(() => {
    // Extract query parameters from URL
    const urlParams = new URLSearchParams(window.location.search);
    const lat = urlParams.get('lat');
    const lng = urlParams.get('lng');

    // Update map's location with extracted latitude and longitude
    if (lat && lng) {
      setPlace(`Lat: ${lat}, Lng: ${lng}`);
      updateMapLocation(lat, lng);
    }
  }, []);

  // Function to update map's location based on lat and lng values
  const updateMapLocation = (lat, lng) => {
    console.log(`Updating map location to Lat: ${lat}, Lng: ${lng}`);
  }

  // Function to handle place change
  const handlePlaceChange = (newPlace) => {
    console.log('New Place:', newPlace);
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
                {/* Content */}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
  
}





// import React, { useState, useMemo } from 'react';

// export default function Map() {
//   const [isActive, setIsActive] = useState(true);
//   const [place, setPlace] = useState(''); // Added state for place

//   const classes = useMemo(() => `${!isActive ? 'closed' : ''} card-body px-0`, [isActive]);

//   // Function to handle place change
//   const handlePlaceChange = (newPlace) => {
//     setPlace(newPlace);
//   }

//   return (
//     <div className='map-container'>
//       <section className='mx-auto my-5' style={{ maxWidth: '23rem' }}>
//         <div className='card map-card'>
//           <div
//             id='map-container-google-1'
//             className='z-depth-1-half map-container'
//             style={{ height: '500px' }}
//           >
//             <iframe
//               src='https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed'
//               style={{ border: '0' }}
//             ></iframe>
//           </div>
//           <div className={classes} onClick={() => setIsActive(!isActive)}>
//             <div className='button px-2 mt-3'>
//               <a
//                 className='btn btn-floating btn-lg living-coral text-white float-end'
//                 style={{ marginRight: '.75rem;' }}
//               >
//                 <i className='fas fa-bicycle'></i>
//               </a>
//             </div>
//             <div className='bg-white px-4 pb-4 pt-3-5'>
//               <h5 className='card-title h5 living-coral-text'>{place}</h5> {/* Display place from state */}
//               <div className='d-flex justify-content-between living-coral-text'>
//               </div>
//               <hr />
//               <hr />
//               <table className='table table-borderless'>
//                 <tbody>
//                   <tr>
//                     <th scope='row' className='px-0 pb-3 pt-2'>
//                       <i className='fas fa-map-marker-alt living-coral-text'></i>
//                     </th>
//                     <td className='pb-3 pt-2'></td>
//                   </tr>
//                   <tr className='mt-2'>
//                     <th scope='row' className='px-0 pb-3 pt-2'>
//                       <i className='far fa-clock living-coral-text'></i>
//                     </th>
//                     <td className='pb-3 pt-2'>
//                       <span className='deep-purple-text me-2'> </span>
//                     </td>
//                   </tr>
//                   <tr className='mt-2'>
//                     <th scope='row' className='px-0 pb-3 pt-2'>
//                       <i className='fas fa-cloud-moon living-coral-text'></i>
//                     </th>
//                     <td className='pb-3 pt-2'></td>
//                   </tr>
//                 </tbody>
//               </table>
//               {/* Update place state when user clicks or searches for a new place */}
//               <button onClick={() => handlePlaceChange('New Place')}>Discover</button>
//             </div>
//           </div>
//         </div>
//         </section>
//         </div>
//   );
// }


