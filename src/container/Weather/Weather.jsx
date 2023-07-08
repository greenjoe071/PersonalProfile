import React, { useState } from 'react';
import axios from 'Axios'


const Weather = () =>  {
    
    const [data, setData] = useState([]) 
    
    const dateBuilder = (d) => {
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();
    
      return `${day} ${date} ${month} ${year}`
    }
    
    
      useEffect(() => {
        axios.get("https://api.openweathermap.org/data/2.5/weather?q=austin&units=imperial&APPID=9018e2c400ad4157c522b6e3fcbea1ae")
        .then(res=> {console.log("Getting from ::::", res.data)
        setData(res.data)
        })
        .catch(err => console.log(err))
      }, [])
    
    
    
    
      return (
          
          <text>
              {data?.main?.temp ? `${data?.name}, ${Math.round(data?.main?.temp,)} °F` : "Your Forecast:"}
          </text>
        

        );
    }

    export default Weather();

        // <View 
        // style={{width: windowWidth, height: windowHeight}}
        // >
        //   <ImageBackground
        //     source={ 
        //       require('./assets/Austin.jpg')}
        //     resizeMode="cover"
        //     style={{
        //       flex: 1,
        //     }}>
        //     <View
        //       style={{
        //         flex: 1,
        //         backgroundColor: 'rgba(0,0,0,0.3)',
        //         padding: 20,
        //       }}>
        //       <View style={styles.topInfoWrapper}>
    
    
        //         <View>
        //           <Text style={styles.city}>
        //             {data?.main?.temp ? `${data?.name}, ${data?.sys?.country}` : "Your Forecast:"}
        //           </Text>
        //           <Text style={styles.time}>
        //             {data?.main?.temp ? `${dateBuilder(new Date())}` : null}
        //           </Text>
        //         </View>
    
        //         <View>
    
        //           <View>
        //             <Text style={styles.temparature}>
    
        //               {data?.main?.temp ? `${Math.round(data?.main?.temp,)} °F` : null}
        //             </Text>
        //             <View style={{ flexDirection: 'row' }}>
        //               {/* {WeatherIcon(location.weatherType)} */}
        //               <Text style={styles.weatherType}>
    
        //                 {data?.main?.temp ? `${data?.weather[0]?.description}` : null}
    
        //               </Text>
        //             </View>
        //           </View>
        //         </View>