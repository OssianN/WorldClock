import React from 'react';
import Clock from '../clock/Clock';

const Board = () => (
  <div className="board">
    <Clock city="Stockholm" timeZone="Europe/Stockholm" />
    <Clock city="London" timeZone="Europe/London" />
    <Clock city="Paris" timeZone="Europe/Paris" />
    <Clock city="Moscow" timeZone="Europe/Moscow" />
    <Clock city="Tokyo" timeZone="Asia/Tokyo" />
    <Clock city="New York" timeZone="America/New_York" />
    <Clock city="Los Angeles" timeZone="America/Los_Angeles" />
    <Clock city="Sao Paulo" timeZone="America/Sao_Paulo" />
  </div>
);

export default Board;
