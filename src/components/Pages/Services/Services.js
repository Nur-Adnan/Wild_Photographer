import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import "./Services.css";

const Services = () => {
    const [services,setServices]=useState([])

    useEffect(() => {
        fetch('packages.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            <h1 className="text-center head-st">Our Packages</h1>
            <hr />
            <div className="serv_cont">
            {
                services.map(service=><Service
                key={service.id}
                service={service} 
                >
                </Service>)
            }
            </div>
        </div>
    );
};

export default Services;