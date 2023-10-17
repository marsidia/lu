import PubTrIcon from "./PubTrIcon";
import { IoWalkOutline, IoSwapHorizontal } from "react-icons/io5";
import { getDisplayDuration, getDisplayTime } from "../../utils";

function Section({ section, onClick }) {
  let content;
  switch (section.type) {
    case "street_network":
      const styleSN = {
        borderLeft: "10px dashed #b4b7c2",
      };

      content = (
        <div
          onClick={onClick}
          style={styleSN}
          className="section__container section__container--sn"
        >
          <IoWalkOutline className="icon__sn section__sn-icon" />
          <div className="section__from-info">
            <div className="section__from">{section.from.name}</div>
            <div className="section__time">
              {getDisplayTime(section.departure_date_time)}
            </div>
          </div>
          <div className="section__duration">
            {getDisplayDuration(section.duration)}
          </div>

          <div className="section__to">{section.to.name}</div>
        </div>
      );

      break;
    case "public_transport":
      const style = {
        borderLeft: "10px solid #" + section.display_informations.color,
      };
      content = (
        <div
          style={style}
          className="section__container section__container--pt"
          onClick={onClick}
        >
          <PubTrIcon
            className="section__pt-icon"
            display_informations={section.display_informations}
          />
          <div className="section__from-info">
            <div className="section__from-group">
              <div className="section__from">{section.from.name}</div>
              <div className="section__direction">
                &rarr; {section.display_informations.direction}
              </div>
            </div>
            <div className="section__time">
              {getDisplayTime(section.departure_date_time)}
            </div>
          </div>

          <div className="section__duration">
            {getDisplayDuration(section.duration)}
          </div>

          <div className="section__to">{section.to.name}</div>
          <div className="">{getDisplayTime(section.arrival_date_time)}</div>
        </div>
      );
      break;
    case "transfer":
      content = (
        <div className="section__container section__container--tr">
          <IoSwapHorizontal className="icon__tr section__tr-icon" />

          <div>{section.from.name}</div>
          <div>{getDisplayDuration(section.duration)}</div>
        </div>
      );
      break;

    default:
      break;
  }

  return content && <div className="section"> {content}</div>;
}
export default Section;
