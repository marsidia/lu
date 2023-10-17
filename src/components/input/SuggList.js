import Activity from "../ui/Activity";
import SuggListItem from "./SuggListItem";

function SuggList({suggData, isLoading, setEntry}){
    let content;
    if(suggData){
        content = suggData.map(place => (
            <SuggListItem key = {place.id} place = {place} setEntry= {setEntry}/>
            
        ))

    }
    return(
        
        <div className="suggs">
           {isLoading ? <Activity/> :  content.length === 0 ? <div className="suggs__error">No results found</div> : content}
        </div>
    )
}
export default SuggList;