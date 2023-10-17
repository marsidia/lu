import classNames from "classnames";
import { useState } from "react";

import "react-clock/dist/Clock.css";

function TimeInput({ primary, secondary, onChange, getValue }) {
  const currentDate = getValue();
  const [minutes, setMinutes] = useState(new Date(currentDate).getMinutes());
  const [hours, setHours] = useState(new Date(currentDate).getHours());

  const onMinutesChange = (event) => {
    const dt = new Date();
    if (event.target.value.length === 1) {
      setMinutes("0" + event.target.value);
    } else if (event.target.value < 0) {
      setMinutes(0);
    } else if (event.target.value.length > 2) {
      setMinutes(event.target.value.slice(-2));
      if (event.target.value > 59) {
        setMinutes(0);
      }
    } else {
      setMinutes(event.target.value);
    }

    console.log(event.target.value);

    dt.setMinutes(minutes);
    console.log(dt);
    onChange(dt);
  };
  const onHoursChange = (event) => {
    console.log(event.target.value);
    let val = event.target.value;
    if (val.length === 1) {
      val = 0 + val;
    }
    if (val < 0) {
      val = "00";
    }

    if (val.length > 2) {
      val = val.slice(-2);
    }

    if (event.target.value > 23) {
      val = "00";
    }

    console.log(val);
    setHours(val);

    const dt = new Date();
    dt.setHours(val);
    console.log(dt);
    onChange(dt);
  };

  const classText = classNames("time__text", {
    "time__text--secondary": secondary,
    "time__text--primary": primary,
  });

  return (
    <div className="time">
      <div className={classText}>
        <input
          className="time__input time__input--hours"
          type="number"
          value={hours}
          onChange={onHoursChange}
        />{" "}
        :
        <input
          className="time__input time__input--minutes"
          type="number"
          value={minutes}
          onChange={onMinutesChange}
        />
      </div>
    </div>
  );
}
export default TimeInput;
