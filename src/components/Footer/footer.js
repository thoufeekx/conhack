/* Footer.js */

import React from 'react';
import axios from 'axios';
import "./index.css"

import { useState,useEffect } from 'react';

const Footer = () => {
  const [currentData, setCurrentData] = useState([]);

  const currentData1 = []

  const [condition, setCondition] = useState(true)

  const [text, setText] = useState(''); // State to hold the text input

  function appendData(existingData, newData) {
    // Use the spread operator to merge the existingData and newData
    const updatedData = { ...existingData, ...newData };
    return updatedData;
  }

   // Use useEffect to load data from local storage and update the state
   useEffect(() => {
    const dataFromLocalStorage = JSON.parse(localStorage.getItem('myData')) || [];
    setCurrentData(dataFromLocalStorage);
  }, [condition]); // The empty array [] ensures this effect runs only on component mount



// //? Example usage:
// const initialData = { name: 'John', age: 30 };
// const newData = { city: 'New York', job: 'Engineer' };

// const updatedData = appendData(initialData, newData);

// console.log(updatedData);

  const handleTextChange = (e) => {
    setText(e.target.value);
    console.log(text);
  };

  const handlePostText = () => {
    // You can change the URL to the appropriate endpoint on your server
    const apiUrl = 'http://10.144.121.29:5000/prompt';

    // Prepare the data to be sent as the request body
    const data = { text };

    // Send a POST request with the text data
    axios.post(apiUrl, data)
      .then(response => {
        console.log('Text posted successfully:', response.data);
        appendDataLocally(response.data)
        setCondition(!condition)
        // updatedData();
        

      })
      .catch(error => {
        console.error('Error posting text:', error);
      });
  };

  //? Storing Data ***************************************
  // Append data to local storage
// function appendDataLocally(newData) {
//   // Retrieve the current data (if any) from localStorage
//   const currentData1 = JSON.parse(localStorage.getItem('myData')) || [];

//   // Append the new data to the current data
//   currentData1.push(newData);

//   // Save the updated data back to localStorage
//   localStorage.setItem('myData', JSON.stringify(currentData1));
//   console.log(currentData1);
// }



 // Function to append data to local storage
 function appendDataLocally(newData) {
  // Retrieve the current data (if any) from localStorage
  const existingData = JSON.parse(localStorage.getItem('myData')) || [];

  // Append the new data to the current data
  existingData.push(newData);

  // Save the updated data back to localStorage
  localStorage.setItem('myData', JSON.stringify(existingData));
  console.log(existingData);
}



  return (
    <div className="w-full bg-gray-200">
      <div className="flex items-center justify-between p-4">

 
      <h2>Extracted Information :</h2>


      <div >
      {Object.entries(currentData).map(([key, value]) => (
        <div key={key} className="custom-box mb-2">
          <span className="font-semibold">{key}:</span> {value}
        </div>
      ))}
    </div>

        {/* <div className="bg-white rounded shadow p-4 w-full max-w-md mx-auto">
      <h2 className="text-lg font-semibold">Posted Data:</h2>
      {Object.entries(currentData).map(([key, value]) => (
        <div key={key} className="mb-2">
          <span className="font-semibold">{key}:</span> {value}
        </div>
      ))}
    </div> */}


<div className="w-7/12">
  <input
    className="input-style"
    type="text"
    placeholder="Enter your prompt/query"
    value={text}
    onChange={handleTextChange}
  />
</div>

<div className="w-1/12">
 <div className='button-container'>
 <button className="button-style" onClick={handlePostText}>
    Post Text
  </button>
 </div>
</div>


       
        
      </div>

    </div>
  );
}

export default Footer