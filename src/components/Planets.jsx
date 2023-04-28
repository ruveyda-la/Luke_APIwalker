import React,{useEffect, useState} from 'react'
import axios from 'axios';
import {useParams} from 'react-router-dom'


const Planets = (props) => {
    const {id} = useParams();
    
    const [apiData,setApiData] = useState ({});
    const [isErr,setIsErr] = useState(false);
    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
             .then((response) => {
                setIsErr(false)
                setApiData(response.data)
            })
             .catch((err) => {
                console.log(err)
                setIsErr(true)
            })
    }, [id]);
    if(isErr){
        return (
            <div>
                <h4>These are not the droids you're looking for!!!</h4>
                <img src="https://upload.wikimedia.org/wikipedia/en/3/32/Ben_Kenobi.png" alt="" />
            </div>
        )
    }
    else {
        return (
            <div>
                <h1>{apiData.name}</h1>
                <p>Climate: {apiData.climate}</p>
                <p>Terrain: {apiData.terrain}</p>
                <p>Surface water: {apiData.surface_water}</p>
                <p>Population: {apiData.population}</p>
        
            </div>
          )
    }
 
}

export default Planets