import './App.css'
import React, {useEffect, useState} from 'react'
import LoadingMask from './components/LoadingMask'
import Hotel from './components/Hotel'


const App = () => {

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {

     setLoading(true)
     fetch('api/hotels')
     .then( (resp) => (resp.json()) )
     .then ( (adat) => (setData(adat)) )
     .catch( (err) => {
                       console.log("FetchError=", err);
                       setData(null);
                     } 
           )
     .finally( () => (setLoading(false)) )
   }, [])

  return (
    <div className="App">
      <h1>Hotels</h1>
      {loading && <LoadingMask />}
      {!loading && (data ? [...data].map((item,i) => <Hotel hotel={item} key={i.toString()}/>) : <p>Oops, something happened</p>) }
    </div>
  )
}

export default App
