import '../Css/WeatherTarget.css';
import { ciudadesEstados } from '../assets/citiesData';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import diaNublado from '../assets/dia-nublado.png';
import Cloudy from '../assets/neblinoso.png';
import SunnySkies from '../assets/parcialmente-nublado.png';
import PartlyCloudy from '../assets/llovizna.png';
import ClearSkies from '../assets/soplo.png';
import MostlyCloudy from '../assets/lloviendo.png';
import Sur from '../assets/Sur.png';
import Norte from '../assets/Norte.png';
import Este from '../assets/Este.png';
import Oeste from '../assets/Oeste.png';
 


export  const WeatherTarget = () => {
    const [data, setData] = useState();
    const [city, setCity] = useState();
    
    const getData1 = async (cityIndex) => {
        let postalCode = ciudadesEstados[cityIndex].codigoPostal;
        const data = await axios.get(`http://api.weatherunlocked.com/api/current/us.${postalCode}?app_id=54fcb1ce&app_key=714a4d98655e6be443b20307220d19f8`)
        setData(data.data)
    }

    useEffect(() => {
        const getData = async () => {
            try{
                const data = await axios.get(`http://api.weatherunlocked.com/api/current/us.30301?app_id=54fcb1ce&app_key=714a4d98655e6be443b20307220d19f8`)
                setData(data.data)
            }catch(err){
                console.error(err)
            }
        }
        getData()
    }, [])

    return(
        data ? <>
        <h1 className='titleTarget'>Pronóstico del tiempo para ciudades de EE.UU.</h1>
        <div className="target" id={data? (data.wx_desc === "Sunny skies" && data.temp_c <= 20? "sunnySkies1Color" : data.wx_desc === "Sunny skies" && data.temp_c > 20? "sunnySkiesColor" : data.wx_desc === "Mostly cloudy" ? "rainingColor" :  data.wx_desc === "Cloudy" ? "cloudyColor" : data.wx_desc === "Partly cloudy" ? "partlyCloudyColor" : data.wx_desc === "Clear skies" ? "clearSkiesColor": data.wx_desc === 'Mist' ||  data.wx_desc === 'Light Rain, Mist' ||  data.wx_desc === 'Light Rain'? 'mistColor':"") : (<p>Cargando...</p>)}>  
        <select onChange={(data) => {getData1(data.target.selectedIndex); setCity(data.target.value)}} className='seeker' >{ciudadesEstados.map((resp, i) => (<option  key={i}>{resp.nombre}</option>) )}</select>
        <div className='infCnt'>
            <div className='imgCnt' id={data? (data.wx_desc == "Mostly cloudy" ? "raining" : data.wx_desc == "Sunny skies" && data.temp_c > 20 ? "sunnySkies" : data.wx_desc == "Cloudy" ? "cloudy" :  data.wx_desc == "Clear skies" ? "clearSkies" : data.wx_desc == "Partly cloudy" ? "partlyCloudy": data.wx_desc == "Sunny skies" && data.temp_c <= 20 ? "sunnySkies1" : data.wx_desc === 'Mist' ||  data.wx_desc === 'Light Rain, Mist' ||  data.wx_desc === 'Light Rain'? 'mist' : "clearSkies") : ("")}> {data ? (<p className='gradosF'> {Math.round(data.temp_f)} F°</p>) : (<p>Cargando...</p>)} {data ? (<p  className='gradosC'> {Math.round(data.temp_c)} <span className='gradosSpan'>C°</span></p>) : (<p>Cargando...</p>)}  </div>
            <div className='infCnt1'>
                <div className='countryInf' id={data? (data.wx_desc === "Sunny skies" && data.temp_c <= 20? "sunnySkies1Color" : data.wx_desc === "Sunny skies" && data.temp_c > 20? "sunnySkiesColor" : data.wx_desc === "Mostly cloudy" ? "rainingColor" :  data.wx_desc === "Cloudy" ? "cloudyColor" : data.wx_desc === "Partly cloudy" ? "partlyCloudyColor" : data.wx_desc === "Clear skies" ? "clearSkiesColor":data.wx_desc === 'Mist' ||  data.wx_desc === 'Light Rain, Mist' ||  data.wx_desc === 'Light Rain' ? 'mistColor' :"") : (<p>Cargando...</p>)}>
                    {city? <h2>{city}</h2> : <h2>Atlanta</h2>}
                </div>
                <div className='temperatureInf' id={data? (data.wx_desc === "Sunny skies" && data.temp_c <= 20? "sunnySkies1Color" : data.wx_desc === "Sunny skies" && data.temp_c > 20? "sunnySkiesColor" : data.wx_desc === "Mostly cloudy" ? "rainingColor" :  data.wx_desc === "Cloudy" ? "cloudyColor" : data.wx_desc === "Partly cloudy" ? "partlyCloudyColor" : data.wx_desc === "Clear skies" ? "clearSkiesColor": data.wx_desc === 'Mist' ||  data.wx_desc === 'Light Rain, Mist' ||  data.wx_desc === 'Light Rain'? 'mistColor':"") : (<p>Cargando...</p>)}>
                    {data ? (<p><b>Viento: </b> {data.windspd_kmh} km/h</p>) : (<p>Cargando...</p>)}
                    {data ? (<img className='img1' src={
                        data.winddir_deg >= 45 && data.winddir_deg < 135 ? Este: 
                        data.winddir_deg >= 135 && data.winddir_deg < 225 ? Sur:
                        data.winddir_deg >= 225 && data.winddir_deg < 315 ? Oeste: Norte
                    }></img>) : (<p>Cargando...</p>)}
                </div>
                <div className='weatherInf' id={data? (data.wx_desc === "Sunny skies" && data.temp_c <= 20? "sunnySkies1Color" : data.wx_desc === "Sunny skies" && data.temp_c > 20? "sunnySkiesColor" : data.wx_desc === "Mostly cloudy" ? "rainingColor" :  data.wx_desc === "Cloudy" ? "cloudyColor" : data.wx_desc === "Partly cloudy" ? "partlyCloudyColor" : data.wx_desc === "Clear skies" ? "clearSkiesColor": data.wx_desc === 'Mist' ||  data.wx_desc === 'Light Rain, Mist' ||  data.wx_desc === 'Light Rain'? 'mistColor':"") : (<p>Cargando...</p>)}>
                    {data ? (<p>{
                        data.wx_desc === 'Cloudy' ? 'Nublado':
                        data.wx_desc === 'Sunny skies' ? 'Soleado' :
                        data.wx_desc === 'Partly cloudy' ? 'Un poco nublado':
                        data.wx_desc === 'Clear skies' ? 'Cielos despejados' :
                        data.wx_desc === 'Mist' ||  data.wx_desc === 'Light Rain, Mist'||  data.wx_desc === 'Rain, Mist'? 'Lluvia ligera' :
                        data.wx_desc === 'Mostly cloudy' ? 'Lluvias fuertes': data.wx_desc
                        }</p>) : (<p>Cargando...</p>)}  
                    {data ? (
                        <img className='img' src={
                            data.wx_desc === 'Cloudy' ? Cloudy:
                            data.wx_desc === 'Mist' ||  data.wx_desc === 'Light Rain'||  data.wx_desc === 'Light Rain, Mist'||  data.wx_desc === 'Rain, Mist'? Cloudy:
                            data.wx_desc === 'Sunny skies' ? SunnySkies :
                            data.wx_desc === 'Partly cloudy' ? PartlyCloudy:
                            data.wx_desc === 'Clear skies' ? ClearSkies :
                            data.wx_desc === 'Mostly cloudy' ? MostlyCloudy:
                            diaNublado
                        } alt="Weather Icon" />
                        ) : (
                        <p>Cargando...</p>
                        )}
                </div>
            </div>
        </div>
    </div> 
        </>: <p>Cargando...</p>
    )
    
    }
    
   
    
    

// windspd_kmh