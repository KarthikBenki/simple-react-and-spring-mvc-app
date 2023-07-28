import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const MyComponent = () => {
    const [data,setData] = useState({})
  useEffect(() => {
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    const name = params.get("name");
    const phone = params.get("phone");
    // Process the parameters
    setData({name,phone})
    
  }, []);

  return <div>

    <h1>{data?.name}</h1>
    <h1>{data?.phone}</h1>
    <h1>Hello World</h1>
  </div>;
};

export default MyComponent;
