import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import useServices from '../UseServices/UseServices';

const Services = () => {
    // const [services] = useServices();
   const [services] = useServices()
  
    return (
        <div>
            <h1>Services{services.length}</h1>
            {
                services.map(service => <Service 
                    key = {service.id}
                    service = {service}></Service>)
            }
        </div>
    );
};

export default Services;