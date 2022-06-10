
import {useState,useEffect} from 'react'
import axios from 'axios'

function IP() {
  //creating IP state
  const [ip, setIP] = useState('');

  //creating function to load ip address from the API
  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    //https://medium.com/how-to-react/how-to-get-user-ip-address-in-react-js-73eb295720d0
    console.log(res.data);
    setIP(res.data.IPv4)
  }
  
  useEffect( () => {
    //passing getData method to the lifecycle method
    getData()

  }, [])

  return (
    <>
    <div className="App">
    <h2>Your IP Address is</h2>
    <h4>{ip}</h4>
  </div></>

  );
}

export default IP;