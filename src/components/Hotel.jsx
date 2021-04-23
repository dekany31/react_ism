
import React, {useState} from 'react'
import Subscription from './Subscription'

function Hotel(props) {

  const [show, setShow] = useState(true)
  const [moreInfo, setMoreInfo] = useState(false)

  return (
    <div>
      <h2>{props.hotel.name}</h2>
      <button onClick={ () => ( setShow(!show) ) }>{show ? "Show more" : "Show less"}</button>
      {!show && (<>
                <p>{props.hotel.city}({props.hotel.stars})</p>
                <button onClick={ () => setMoreInfo(!moreInfo) }>Request more info</button>
                {moreInfo && <Subscription hotelName={props.hotel.name}/>}
               </>) }
    </div>
  )
}

export default Hotel
