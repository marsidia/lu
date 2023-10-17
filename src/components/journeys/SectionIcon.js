import classNames from "classnames";
import { IoWalkOutline } from "react-icons/io5";

import PubTrIcon from "./PubTrIcon";
import PubTrLogo from "./PubTrLogo";
function SectionIcon({ section, className }) {
  let content;
  switch (section.type) {
    case "street_network":
      content = (
        <div className={classNames("journey__spec", className)}>
          <IoWalkOutline className="icon__sn" />
        </div>
      );

      break;
    case "public_transport":
      content = (
        <div className={classNames("journey__spec", className)}>
          <PubTrLogo display_informations={section.display_informations} />
          <PubTrIcon display_informations={section.display_informations} />
        </div>
      );
      break;

    default:
      // <img src={tram} alt="tram" />
      // content = <div>some sectiom {section.type}</div>
      break;
  }

  return content;
}
export default SectionIcon;
