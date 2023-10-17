import SectionsList from "./SectionsList"
import { useDispatch, useSelector } from "react-redux";
import SectionIcon from "./SectionIcon";
import { changeCurrentId, changeCurrentDetails } from "../../store";
import { useEffect} from "react";
import { getDisplayDuration } from "../../utils";
import { useState } from "react";

function Journey({journey, id}){
    const currentId = useSelector((state) => state.journeysMap.currentId);
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState()

    

    

    const sectionIcons = journey.sections.map((section) => {
        return <SectionIcon section = {section}/>


    })
    

 

    useEffect(() => {
        if(id === currentId){
        const geodata = journey.sections.reduce((res, section) => {
            if(section.geojson){
                res.push(
                    {
                        type: "Feature",
                        geometry: section.geojson,
                        properties: {
                          color: section.display_informations ? "#" + section.display_informations.color : "gray",
                          id: section.id
                        }
                    }   
                );
            }
            return res;
        }, [])
        const res = {
            type: "FeatureCollection",
            features : geodata
        }
        console.log(res)
        dispatch(changeCurrentDetails(res))
        }
       

    },[currentId] )

  
        
    const handleClick = () => {
        console.log(id, currentId) 
        dispatch(changeCurrentId(id))
        


    }
    
    return(
        <div className="journey" onClick={handleClick} >
            <div className="journey__info"onClick={() => setIsOpen(!isOpen)}>
                <div className="journey__info__time">{getDisplayDuration(journey.duration)}</div>
                <div className="journey__info__specs">{sectionIcons}</div>
            </div>
            
           {true && <SectionsList className={isOpen? "journey__section-list--open" : "journey__section-list--closed"} sections = {journey.sections}/>}

        </div>
    )
}
export default Journey