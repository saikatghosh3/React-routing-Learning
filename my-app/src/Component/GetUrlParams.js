
import React from 'react'
import { useSearchParams } from 'react-router-dom'

function GetUrlParams() {
const [searchParams, setSearchParams] =useSearchParams();
 console.log(searchParams.get("name"));
 console.log(searchParams.get("city"));
 console.log(searchParams.get("country"));

 const name = searchParams.get("name");
 const city = searchParams.get("city");
 const country = searchParams.get("country");
  return (
    <div>
        <h1>Get URl Params</h1>
        <h3>Name is :{name}</h3>
        <h3>City is :{city}</h3>
        <h3>Country is :{country}</h3>
    </div>
  )
}

export default GetUrlParams