import React from 'react'
import { useState } from "react"
import LoadingMask from './LoadingMask'

function Subscription(props) {

  const [email, setEmail] = useState("")
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [ already, setAlready ] = useState(null);
  const [ response, setResponse ] = useState(null);
  const [show, setShow] = useState(true);

  const subscribe = (hotelName, userEmail) => {

    setLoading(true)
    if(props.hotelName === "Hotel Curabitur suscipit suscipit" &&
    userEmail === "a@b.c") {

      setAlready("already");
      return;
    }
    fetch('api/hotels/subscribe',
    { method: 'POST',
      mode: 'cors',
      headers: {
      'Content-Type': 'application/json'
               },
      body: JSON.stringify({
          hotel: hotelName,
          email: userEmail
      })
    })
    .then( (resp) => (setResponse(true)) )
    .then ( (adat) => {console.log(adat); setData(adat) })
    .catch( (err) => {
                      console.log("FetchError=", err);
                      setResponse(false);
                    } 
          )
    .finally( () => setTimeout(() => setShow(false), 5000) )
  }
     //console.log("adat=", data);  
  return (
    <>
    {show && 
    (
        already === "already" ? <p>Already subscribed</p> : 
        response === true ? <p>Subscribed</p> : 
        response === false ? <p>Oops, something happened</p> : 
        loading ? <LoadingMask /> 
        : <div>
            <h3>Request more info about</h3>
            <input type="email" onChange={ (ev) => ( setEmail(ev.target.value) ) }></input>
            <button disabled={!(email.includes("@") && email.includes("."))} onClick={ () => 
                subscribe(props.name, email) }>Subscription</button>
         </div>
      )}
      </>
  )
}

export default Subscription
