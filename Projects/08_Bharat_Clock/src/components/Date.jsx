import React, { useEffect, useState } from "react";

const Datet = () => {
  const [currDate, setCurrDate] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCurrDate(new Date());
    }, 1000);

    // Cleanup when component unmounts
    return () => clearInterval(intervalID);
  }, []);

  return (
    <div className="ash">
      This is current time: {currDate.toLocaleString()}
    </div>
  );
};

export default Datet;
