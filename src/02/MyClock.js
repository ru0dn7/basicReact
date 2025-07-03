import MyClockImages from "./MyClockImages";
import MyClockTime from "./MyClockTime";
import './MyClock.css';

function MyClock() { 

  return (
    <div className="c1">
      <MyClockImages />
      <MyClockTime />
    </div>
  );
}

export default MyClock;