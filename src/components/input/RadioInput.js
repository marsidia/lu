import classNames from "classnames";
import { nanoid } from "@reduxjs/toolkit";

function RadioInput({
    primary,
    secondary,
    onChange,
    isChecked,
    name,
    children,
}) {

    const id = nanoid();

    const classLabel = classNames("radio__label", {
        "radio__label--primary": primary,
        "radio__label--secondary": secondary,
    });
    const classButton = classNames("radio__label__button", {
        "radio__label__button--primary": primary,
        "radio__label__button--secondary": secondary,
    });

    return (
        <div className="radio">
            <input
                type="radio"
                className="radio__input"
                id={id}
                name={name}
                checked={isChecked()}
                onChange={onChange}
            />

            <label htmlFor={id} className={classLabel}>
                <span className={classButton}></span>
                <div className="radio__label__text"> {children}</div>
            </label>
        </div>
    );
}

export default RadioInput;
