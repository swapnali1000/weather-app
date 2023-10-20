import React, { useEffect, useState } from 'react';
import './Home.css';
import axios from 'axios';

function Home() {
    const [city,setCity]= useState('pune');
    const [temprature, setTemperature]= useState(0);
const [message, setMessage] = useState('')

    async function loadWeatherInfo(){
      
      try{ 
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=018edfcfdedf651e9af1f9c1fa92b29b`)
      
     setTemperature((response.data.main.temp -273).toFixed(2))
       setMessage('✅Data Fetched Successefully...')
   }
   catch(err) {
     setTemperature(0)
     setMessage('City Not Found')
   }
   }
    useEffect(()=>{
      loadWeatherInfo()
    },[city])
  return (
    <div>
        <h1 className='app-title'>Weather for {city} </h1>

        <input className='search-bar' type='text' placeholder='Search' value={city} onChange={(e)=>{setCity(e.target.value)}}/>
   <h1 className='temprature-text'>Temprature: {temprature}0°C</h1>
   <p className='msg-text'>{message}</p>
    </div>
  )
}
export default Home
