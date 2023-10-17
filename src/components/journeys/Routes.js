import Journey from "./Journey";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Map from "./Map";
import { useSelector } from "react-redux";
import Activity from "../ui/Activity";
import { useEffect, useRef } from "react";
import gsap from "gsap";

function Routes({ data }) {
  const geodata = useSelector(
    (state) => state.journeysMap.currentJourneyDetails
  );
  const currentSection = useSelector(
    (state) => state.journeysMap.currentSection
  );

  const resultsRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      resultsRef.current,
      {
        opacity: 0,
        duration: 2,
      },
      {
        opacity: 1,
        duration: 2,
      }
    );
  }, []);

  const render = (status) => {
    if (status === Status.LOADING) return <Activity />;
    if (status === Status.FAILURE) return <h3>{status} ...</h3>;
    return <h3>{status} ...</h3>;
  };

  const content = data.journeys.map((journey, index) => {
    return <Journey key={index} id={index} journey={journey} />;
  });
  return (
    <div className="routes" ref={resultsRef}>
      <div className="routes__map-wrap">
        <Wrapper apiKey={"XXXXXX"} render={render}>
          <Map geos={geodata} currentSection={currentSection} />
        </Wrapper>
      </div>
      <div className="routes__journeys">{content}</div>
    </div>
  );
}
export default Routes;
