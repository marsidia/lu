import classNames from "classnames";
import Calendar from "react-calendar";
import useAutoClose from "../../hooks/use-auto-close";

function DateInput({ primary, secondary, onChange, getValue }) {
  const currentDate = getValue();
  const { isOpen, setIsOpen, divEl } = useAutoClose();
  const onDateChange = (value) => {
    const res = new Date(currentDate);
    res.setDate(value.getDate());
    res.setMonth(value.getMonth());
    res.setFullYear(value.getFullYear());
    onChange(res);
  };
  const classText = classNames("date__text", {
    "date__text--secondary": secondary,
    "date__text--primary": primary,
  });
  const classCalendar = classNames("date__calendar", {
    "date__calendar--secondary": secondary,
    "date__calendar--primary": primary,
  });

  return (
    <div className="date">
      <div className={classText} onClick={() => setIsOpen(true)}>
        {currentDate.getDate()} . {currentDate.getMonth() + 1} .{" "}
        {currentDate.getFullYear()}
      </div>
      <div className={classCalendar} ref={divEl}>
        {isOpen && <Calendar value={currentDate} onChange={onDateChange} />}
      </div>
    </div>
  );
}
export default DateInput;
