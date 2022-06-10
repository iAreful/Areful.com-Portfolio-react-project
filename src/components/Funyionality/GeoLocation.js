// import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import ReactCountryFlag from "react-country-flag"
const GeoLocation = () => {
    const [details, setDetails] = useState(null);

    const getUserGeolocationDetails = () => {
        fetch(
            "https://geolocation-db.com/json/"
        )
            .then(response => response.json())
            .then(data => setDetails(data))
            .catch(e => {
                console.log(e);
            });
    };
    // console.log('de')
    // console.log(details)
    // const newIpsd = lazy(() => {
    //     console.log('dee')
    // // console.log(details.country_code)
    // // console.log(details.IPv4)
    // })
    // console.log(newIpsd)
    useEffect( () => {
        getUserGeolocationDetails()
        
      }, [])

    //   useEffect( () => {
    //     console.log(details);
    //     console.log(details);
    //     // const ip =  hhh.ip; //add ip output

    //   }, [details])
      
    // useEffect(() => {
    //     setTimeout(() => {
    //        // do something 1 sec after clicked has changed
    //     //    console.log(details);
    //        let ips = details.IPv4;
    //     //    console.log(ips);
    //        let ipsSs =  ips.substring(3);
    //     //    console.log(ipsSs)
    //        let ssdwe =  '###'+ ipsSs;
    //        console.log(ssdwe);

    //     }, 3000);
    //   }, [details]);
    // function IpMusking(n){
    //     let ips = n;
    //     console.log(ips);
    //     let ipsSs =  ips.substring(3);
    //     console.log(ipsSs)
    //     let ssdwe =  '###.'+ ipsSs;
    //     console.log(ssdwe);
    //     // console.log(ipsSubnet); 
    // }
    return (
        <>
            {details && (
                <div className="my-4">
                    <p className="text-white text-xl"> Hello User - Thank You <br />
                    Latitude:{` ${details.latitude},  Longitude: ${details.longitude}`}</p>
                    <br />
                    <p className="text-xl"><b>IP is: <span className='blur-[.08rem] hover:blur-none animate-pulse'>{[details.IPv4]}</span> </b></p>
                    
                    {/* <p>{IpMusking(
                       `{[details.IPv4]}`
                        )}</p>
                    <p>{IpMusking(`211.1234.56789`)}</p>
                    <p>
                        {
                            
                        }
                    </p> */}
                    {/* <p>{IpMusking(`details.IPv4`)}</p> */}
                    {/* <p>{hidePortion}</p> */}
                        {/* {
                        
                        const ip =  hhh.ip; //add ip output
                        let newIp = hhh.ip.substring(3)
                        let hidePortion = '###.'+ newIp;
                        console.log(ip);
                        console.log(newIp);
                        console.log(hidePortion);
                        } */}
                    <ReactCountryFlag className=" rounded-xl text-9xl" countryCode={details.country_code} svg/>
                    <h2 className="text-white text-2xl font-bold">I  ❤️ {details.country_name}&nbsp;({details.country_code})</h2>
                    <h2 className="text-2xl px-6">Hello user from ({details.country_code}) I can help you with my knolwdge, skill and my experince. I am Software Engineer and I useally make web app with mordern technology</h2>
                </div>
            )}  
        </>
    );
};

export default GeoLocation;