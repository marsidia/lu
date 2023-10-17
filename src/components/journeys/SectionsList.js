import classNames from "classnames";
import { changeCurrentSection } from "../../store";
import { useDispatch } from "react-redux";
import Section from "./Section";
function SectionsList({ sections, className }) {
  const dispatch = useDispatch();
  const handleClick = (id) => {
    console.log("section schanges");
    dispatch(changeCurrentSection(id));
    console.log(id);
  };

  const content = sections.map((section) => {
    return (
      <Section
        onClick={() => handleClick(section.id)}
        key={section.id}
        section={section}
      />
    );
  });
  return (
    <div className={classNames("journey__section-list", className)}>
      {content}
    </div>
  );
}
export default SectionsList;
