// // import React, { useState } from 'react';

// // function FetchAndSaveData() {
// //   const [hotels, setHotels] = useState(null);
// //   const [error, setError] = useState(null);
// //   const [loading, setLoading] = useState(false);

// //   const fetchData = async () => {
// //     setLoading(true);
// //     setError(null);
// //     setHotels(null); // Reset hotels on each fetch attempt
  
// //     const url = 'https://sky-scanner3.p.rapidapi.com/hotels/search?entityId=27537542&checkin=2024-12-01&checkout=2024-12-05';
// //     const options = {
// //       method: 'GET',
// //       headers: {
// //         'x-rapidapi-key': '58ee2dbe13mshcc9501d0e90ac88p198f37jsna72798bddd12',
// //         'x-rapidapi-host': 'sky-scanner3.p.rapidapi.com'
// //       }
// //     };
  
// //     try {
// //       const response = await fetch(url, options);
// //       const result = await response.json();
      
// //       console.log(result); // Log full response to debug
  
// //       // Check for data structure based on the schema provided
// //       if (result && result.status && result.data && result.data.results && result.data.results.hotelCards) {
// //         setHotels(result.data.results.hotelCards);
// //       } else {
// //         setError(result.message || "No hotels found based on search criteria.");
// //       }
// //     } catch (error) {
// //       console.error("Fetch error:", error);
// //       setError("An error occurred while fetching data. Please try again.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };
  
  
// //   return (
// //     <div className="hotel-search">
// //       <button onClick={fetchData} className="fetch-button bg-blue-500 text-white px-4 py-2 rounded">
// //         Search Hotels
// //       </button>

// //       {loading && <p>Loading...</p>}

// //       {error && <p className="text-red-500">{error}</p>}

// //       {hotels && hotels.length > 0 ? (
// //         <div className="hotel-list grid gap-4 mt-4">
// //           {hotels.map((hotel) => (
// //             <div key={hotel.id} className="hotel-card p-4 border rounded">
// //               <h3 className="text-lg font-bold">{hotel.name}</h3>
// //               <p>Stars: {hotel.stars}</p>
// //               <p>Distance: {hotel.distance}</p>
// //               <p>Price: {hotel.lowestPrice?.price || 'N/A'}</p>
// //             </div>
// //           ))}
// //         </div>
// //       ) : (
// //         <p>No hotels found.</p>
// //       )}
// //     </div>
// //   );
// // }

// // export default FetchAndSaveData;

import React, { useState } from 'react';

function FetchAndSaveData() {
  const [hotels, setHotels] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    setHotels(null);

    const url = 'https://sky-scanner3.p.rapidapi.com/hotels/search?entityId=46968874&checkin=2024-12-01&checkout=2024-12-05';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '58ee2dbe13mshcc9501d0e90ac88p198f37jsna72798bddd12',
        'x-rapidapi-host': 'sky-scanner3.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);

      // Store the full JSON response or hotel data, based on your needs
      if (result && result.status && result.data && result.data.results && result.data.results.hotelCards) {
        setHotels(result.data.results.hotelCards);
      } else {
        setError(result.message || "No hotels found based on search criteria.");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setError("An error occurred while fetching data. Please try again.");
    } finally {
      setLoading(false);
    }
  };


  const downloadJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(hotels, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "hotels.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  return (
    <div className="hotel-search">
      <button onClick={fetchData} className="fetch-button bg-blue-500 text-white px-4 py-2 rounded">
        Search Hotels
      </button>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {hotels && hotels.length > 0 ? (
        <>
          <div className="hotel-list grid gap-4 mt-4">
            {hotels.map((hotel) => (
              <div key={hotel.id} className="hotel-card p-4 border rounded">
                <h3 className="text-lg font-bold">{hotel.name}</h3>
                <p>Stars: {hotel.stars}</p>
                <p>Distance: {hotel.distance}</p>
                <p>Price: {hotel.lowestPrice?.price || 'N/A'}</p>
              </div>
            ))}
          </div>
          <button onClick={downloadJSON} className="download-button bg-green-500 text-white px-4 py-2 rounded mt-4">
            Download JSON
          </button>
        </>
      ) : (
        <p>No hotels found.</p>
      )}

      {hotels && (
        <pre className="raw-json mt-4 p-4 bg-gray-200 rounded">
          {JSON.stringify(hotels, null, 2)}
        </pre>
      )}
    </div>
  );
}

export default FetchAndSaveData;

// import React, { useState } from 'react';

// function FetchAndSaveData() {
//   const [hotels, setHotels] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const fetchData = async () => {
//     setLoading(true);
//     setError(null);
//     setHotels(null);

//     const url = 'https://sky-scanner3.p.rapidapi.com/hotels/search?entityId=27537542&checkin=2024-12-01&checkout=2024-12-05';
//     const options = {
//       method: 'GET',
//       headers: {
//         'x-rapidapi-key': '58ee2dbe13mshcc9501d0e90ac88p198f37jsna72798bddd12',
//         'x-rapidapi-host': 'sky-scanner3.p.rapidapi.com'
//       }
//     };

//     try {
//       const response = await fetch(url, options);
//       const result = await response.json();
//       console.log(result);

//       if (result && result.status && result.data && result.data.results && result.data.results.hotelCards) {
//         const hotelsData = result.data.results.hotelCards;

//         // Send the hotel data to the backend
//         const backendUrl = 'http://localhost:5000/api/hotels/save'; // Adjust to your backend URL
//         const saveResponse = await fetch(backendUrl, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(hotelsData), // Send the hotel data to your backend
//         });

//         const saveResult = await saveResponse.json();
//         console.log('Data saved to MongoDB:', saveResult);

//         setHotels(hotelsData); // Update frontend with the hotel data
//       } else {
//         setError(result.message || "No hotels found based on search criteria.");
//       }
//     } catch (error) {
//       console.error("Fetch error:", error);
//       setError("An error occurred while fetching data. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const downloadJSON = () => {
//     const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(hotels, null, 2));
//     const downloadAnchorNode = document.createElement('a');
//     downloadAnchorNode.setAttribute("href", dataStr);
//     downloadAnchorNode.setAttribute("download", "hotels.json");
//     document.body.appendChild(downloadAnchorNode);
//     downloadAnchorNode.click();
//     downloadAnchorNode.remove();
//   };

//   return (
//     <div className="hotel-search">
//       <button onClick={fetchData} className="fetch-button bg-blue-500 text-white px-4 py-2 rounded">
//         Search Hotels
//       </button>

//       {loading && <p>Loading...</p>}
//       {error && <p className="text-red-500">{error}</p>}

//       {hotels && hotels.length > 0 ? (
//         <>
//           <div className="hotel-list grid gap-4 mt-4">
//             {hotels.map((hotel) => (
//               <div key={hotel.id} className="hotel-card p-4 border rounded">
//                 <h3 className="text-lg font-bold">{hotel.name}</h3>
//                 <p>Stars: {hotel.stars}</p>
//                 <p>Distance: {hotel.distance}</p>
//                 <p>Price: {hotel.lowestPrice?.price || 'N/A'}</p>
//               </div>
//             ))}
//           </div>
//           <button onClick={downloadJSON} className="download-button bg-green-500 text-white px-4 py-2 rounded mt-4">
//             Download JSON
//           </button>
//         </>
//       ) : (
//         <p>No hotels found.</p>
//       )}

//       {hotels && (
//         <pre className="raw-json mt-4 p-4 bg-gray-200 rounded">
//           {JSON.stringify(hotels, null, 2)}
//         </pre>
//       )}
//     </div>
//   );
// }

// export default FetchAndSaveData;
