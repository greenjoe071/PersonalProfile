import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';

import axios from 'axios';

import './Header.scss';
import ReactTooltip from 'react-tooltip';

//Today's Date
const dateBuilder = (d) => {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day}, ${month} ${date}, ${year}`
}

//for Animations
const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

//For Weather and location info
const KEY = "9018e2c400ad4157c522b6e3fcbea1ae";

const Header = () => {

  // const [loading, setLoading] = useState(false);

  //lOCATION AND WEATHER
  const [latitude, setLatitude ] = useState('')
  const [longitude, setLongitude ] = useState('')
  const [city, setCity ] = useState('')
  const [temp, setTemp ] = useState('')
  const [weatherDescription, setWeatherDescription ] = useState('')
  // const [weatherIcon, setWeatherIcon ] = useState('')

  let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(pos) {
    let crd = pos.coords;
    console.log('Successfully determined a user position:', crd);
    setLatitude(crd.latitude);
    setLongitude(crd.longitude);
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error, options);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async() => {
     await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${KEY}`)
        .then(res => {
          console.log("Getting weather info", res.data)
          console.log("city:", res.data.name, "temp:", res.data.main.temp, "icon:", res.data.weather[0].icon, "city: ", res.data.text)
          setCity(res.data.name)
          setTemp(res.data.main.temp)
        //  setWeatherIcon(res.data.weather[0].icon)
         setWeatherDescription(res.data.weather[0].description)
          console.log("city: ", res.data)

        })
        .catch(err => console.log(err))
    })
  });

//   const isAndroid = navigator.userAgent.match(/Android/i);
//   const isWindows = navigator.userAgent.match(/Windows/i);
//   const isIOS = navigator.userAgent.match(/iPhone|iPad|iPod/i);
// const isMac = navigator.userAgent.match(/Mac/i);

return (
 <>
 {/* Bubble one */}
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
<motion.div  
 animate={{
  scale: [9, 3, 7, 5, 1],
  rotate: [0, 0, 70, 70, 0],
  borderRadius: ["20%", "20%", "50%", "50%", "20%"],
}}
  // whileHover={{ scale: 1.2, rotate: 90 }}
  whileTap={{
    scale: 0.8,
    rotate: -90,
    borderRadius: "100%"
  }}>
    <span>👋</span></motion.div>

        
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">I'm a new developer.  My name is:</p>
            {/* <p className="p-text">My name is:</p> */}
            <h1 className="head-text">Joe</h1>
          </div>
        </div>
 {/* End Bubble one */}       

 {/* Bubble TWO */}
          <br></br>
          <> <div className="badge-cmp app__flex"
            style={{ cursor: "pointer" }}
            data-tip="I used geolocation and an API to find the current time and weather... if you've given permission for this site to know you're location ">
            {/* <motion.div whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{
                scale: 0.4,
                rotate: -20,
                borderRadius: "100%"
              }}>
              <img id="icon" className="weather__icon" src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
              >
              </img>
            </motion.div> */}

            <div style={{ marginLeft: 10 }}>
              <p className="p-text"
              >
                Today is {`${dateBuilder(new Date())}`}.
                In <b>{`${(city)}`} </b>
                it's <b>{`${Math.round(temp)} °F`} </b>
                and <b>{`${(weatherDescription)}`}. </b>
                
              </p>
              <ReactTooltip
                type="success"
                effect="solid"
                arrowColor="#fff"
                className="skills-tooltip"
              >
              </ReactTooltip>
            </div> 
          </div></>
{/* END Bubble TWO */}
            
        
          <div className="tag-cmp3 app__flex3">
            <p className="p-text">My passion is for creating innovative and user-friendly apps. I am eager to start a new career in mobile app development and use my skills to make the experience great.</p>
          </div>
          
          <><div >
            <p className="p-text"></p>
          </div></>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.profile} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle" 
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.mobile2, images.react2, images.javascript2, images.reactNative1].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div>
  </>
); 
      }

export default AppWrap(Header, 'home');
