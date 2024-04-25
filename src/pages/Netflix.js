import React, { useState, useEffect } from 'react';
import { firebaseAuth } from "../utils/firebase-config";
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import search_icon from '../Assets/search.png';
import drizzle_icon from '../Assets/drizzle.png';
import rain_icon from '../Assets/rain.png';
import snow_icon from '../Assets/snow.png';
import wind_icon from '../Assets/wind.png';
import humidity_icon from '../Assets/humidity.png';
import clear_icon from '../Assets/clear.png';
import cloud_icon from '../Assets/cloud.png';

const Netflix = () => {
  let api_key = "bc220f92a676702f6dd10626e63504d3";
  const [wicon, setWicon] = useState(cloud_icon);
  const navigate = useNavigate();

  const search = async () => {
    const element = document.getElementsByClassName("cityInput")
    if (element[0].value === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
    let response = await fetch(url);
    let data = await response.json();
    const humidity = document.getElementsByClassName("humidity-percent")
    const wind = document.getElementsByClassName("wind-rate")
    const temperature = document.getElementsByClassName("weather-temp")
    const locationText = document.getElementsByClassName("weather-location")

    humidity[0].innerHTML = data.main.humidity + " %";
    wind[0].innerHTML = data.wind.speed + " Km/h";
    temperature[0].innerHTML = Math.floor(data.main.temp) + " °C";
    locationText[0].innerHTML = data.name;

    switch (data.weather[0].icon) {
      case "01d":
      case "01n":
        setWicon(clear_icon);
        break;
      case "02d":
      case "02n":
        setWicon(cloud_icon);
        break;
      case "03d":
      case "03n":
        setWicon(drizzle_icon);
        break;
      case "04d":
      case "04n":
        setWicon(drizzle_icon);
        break;
      case "09d":
      case "09n":
        setWicon(rain_icon);
        break;
      case "10d":
      case "10n":
        setWicon(rain_icon);
        break;
      case "13d":
      case "13n":
        setWicon(snow_icon);
        break;
      default:
        setWicon(clear_icon);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (!currentUser) navigate("/Delete");
    });

    return () => unsubscribe(); // Cleanup function for useEffect
  }, [navigate]); // Dependency array to ensure useEffect runs only when navigate changes

  const handleSignOut = () => {
    signOut(firebaseAuth);
    navigate("/Delete");
  };

  return (
    <div style={{ 
      width: '607px',
      height: '829px',
      margin: 'auto',
      marginTop: '75px',
      borderRadius: '12px',
      backgroundImage: 'linear-gradient(180deg, #664fe9 0%, #a199ce 100%)',
      }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '14px',
        paddingTop: '60px',
      }}>
        <input type='text' className='cityInput' placeholder='Search' style={{
          display: 'flex',
          width: '362px',
          height: '78px',
          background: '#ebfffc',
          border: 'none',
          outline: 'none',
          borderRadius: '40px',
          paddingLeft: '40px',
          color: '#626262',
          fontSize: '20px',
          fontWeight: '400',
        }}/>
        <div className='search-icon' onClick={() => {search()}} style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '78px',
          height: '78px',
          background: '#ebfffc',
          borderRadius: '40px',
          cursor: 'pointer',
        }}>
          <img src={search_icon} alt=''/>
        </div>
      </div>
      <div className='weather-image' style={{
        marginTop: '29px',
        display: 'flex',
        justifyContent: 'center',
      }}>
        <img src={wicon} alt=''/>
      </div>
      <div className='weather-temp' style={{
        display: 'flex',
        justifyContent: 'center',
        color: 'white',
        fontSize: '120px',
        fontWeight: '400',
      }}>
        24 °C
      </div>
      <div className='weather-location' style={{
        display: 'flex',
        justifyContent: 'center',
        color: 'white',
        fontSize: '60px',
        fontWeight: '400',
      }}>
        London
      </div>
      <div className='data-container' style={{
        display: 'flex',
        justifyContent: 'center',
        color: 'white',
        marginTop: '50px',
      }}>
        <div className='element' style={{
          display: 'flex',
          margin: 'auto',
          alignItems: 'flex-start',
          gap: '12px',
        }}>
          <img src={humidity_icon} alt='' className='icon' style={{ marginTop: '10px' }}/>
          <div className='data' style={{ fontSize: '20px', fontWeight: '400' }}>
            <div className='humidity-percent'>
              64%
            </div>
            <div className='text'>
              Humidity
            </div>
          </div>
        </div>
        <div className='element' style={{
          display: 'flex',
          margin: 'auto',
          alignItems: 'flex-start',
          gap: '12px',
        }}>
          <img src={wind_icon} alt='' className='icon' style={{ marginTop: '10px' }}/>
          <div className='data' style={{ fontSize: '20px', fontWeight: '400' }}>
            <div className='wind-rate'>
              18 Km/h
            </div>
            <div className='text'>
              Wind Speed
            </div>
          </div>
        </div>
        <div className="rightSide" style={{ display: 'flex', justifyContent: 'center' }}>
  <button onClick={handleSignOut} style={{ fontWeight: 'bold' }}>Sign Out</button>
</div>

      </div>
    </div>
  );
}

export default Netflix;
