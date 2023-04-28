import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {useParams, Link} from 'react-router-dom'

const People = (props) => {
    const {id} = useParams();
    const [isErr,setIsErr] = useState(false);
    const [apiData,setApiData] = useState ({});
    const [homeworldData, setHomeworldData] = useState ({});

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
             .then((response) => {
                setIsErr(false)
                setApiData(response.data)
                axios.get(response.data.homeworld)
                     .then((homeres) => {
                        setHomeworldData(homeres.data)
                     })
            })
             .catch((err) => {
                setIsErr(true)
                console.log(err)
            })
    }, [id,apiData.homeworld]);

    const findHomeworldId = (url) => {
        if(url){
            let arr = url.split('/');
            let hwId = arr[arr.length-2]
            return hwId
        }
        return "work"
    }
    if(isErr){
        return (
            <div>
                <h4>These are not the droids you're looking for!!!</h4>
                <img src="https://upload.wikimedia.org/wikipedia/en/3/32/Ben_Kenobi.png" alt="" />
            </div>
        )
    }
    else{
        return (
            <div>
                <h1>{apiData.name}</h1>
                <p>Height: {apiData.height}</p>
                <p>Hair color: {apiData.hair_color}</p>
                <p>Eye color: {apiData.eye_color}</p>
                <p>Skin color: {apiData.skin_color}</p>
                <p>Home world: {homeworldData.name}</p>
                <p><Link to={`/planets/${findHomeworldId(apiData.homeworld)}`}>Go to the home world!</Link></p>
        
            </div>
          )
    }
 
}

export default People