import React,{useState} from 'react'
// import axios from "axios";
import {useNavigate} from 'react-router-dom';


const Form = () => {
    const [category, setCategory] = useState("");
    const [id,setId] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/${category}/${id}`)

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
          Search For:{""}  
          <select onChange={(e) => setCategory(e.target.value)}>
            <option value="">-Select-</option>
            <option value="people">People</option>
            <option value="planets">Planets</option>
          </select>
          ID:
          <input type="text" onChange={(e) => setId(e.target.value)} />
          <button type="submit">Search</button>
        </form>
    </div>
  )
}

export default Form