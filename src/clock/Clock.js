import React, { useState } from 'react';

const Clock = ({ timeZone, city }) => {
  const [time, setTime] = useState(new Date().toLocaleString('se-SV', { timeZone }));
  setTimeout(() => setTime(new Date().toLocaleString('se-SV', { timeZone })), 1000);
  return (
    <div className="cityClock">
      <h3>{ city }</h3>
      {time}
    </div>
  );
};

export default Clock;
