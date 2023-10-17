import { useEffect, useState } from "react";
import { useLazyFetchSuggsQuery } from "../../store";
import SuggList from "./SuggList";
import useAutoClose from "../../hooks/use-auto-close";
import classNames from "classnames";

function TextInput({ primary, secondary, err, children, onChange, getValue }) {
  const entry = getValue();

  const [suggData, setSuggData] = useState();
  const [fetchSuggs, results] = useLazyFetchSuggsQuery();

  const { isOpen, setIsOpen, divEl } = useAutoClose();

  const handleChange = (event) => {
    onChange(event.target.value);
  };
  const handleSetEntry = (place) => {
    onChange(place.name, place);
    setIsOpen(false);
  };

  useEffect(() => {
    if (entry) {
      fetchSuggs(entry);
    } else {
      setSuggData(null);
    }
  }, [entry, fetchSuggs]);

  useEffect(() => {
    if (results && results.data && results.data.places) {
      setSuggData(results.data.places);
    } else {
      setSuggData(null);
    }
  }, [results]);

  const classInput = classNames("text-input__input", {
    "text-input__input--primary": primary,
    "text-input__input--secondary": secondary,
    "text-input__input--error": err,
  });
  const classLabel = classNames("text-input__label", {
    "text-input__label--primary": primary,
    "text-input__label--secondary": secondary,
    "text-input__label--error": err,
  });
  const classErrMsg = classNames("text-input__err-msg", {
    "text-input__err-msg--error": err,
  });

  return (
    <div ref={divEl} className="text-input">
      <input
        placeholder={children}
        className={classInput}
        type="text"
        value={entry}
        onChange={handleChange}
        onClick={() => setIsOpen(true)}
      />
      <label className={classLabel}>{children}</label>
      <div className={classErrMsg}>Please select a valid {children}</div>

      {isOpen && suggData && (
        <SuggList
          isLoading={results.isFetching || results.isLoading}
          suggData={suggData}
          setEntry={handleSetEntry}
        />
      )}
    </div>
  );
}
export default TextInput;
