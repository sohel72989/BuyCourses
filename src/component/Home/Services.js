import React, { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="container py-5">
        <div className="text-center pb-4">
          <h1>Our Services</h1>
          <p>
            The practice involves swishing oil around in your mind to remove
            bacteria, which can turn into plaque and cause your brain to look
            sharp.
          </p>
        </div>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
