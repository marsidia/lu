import classNames from "classnames";

function PubTrIcon({display_informations, className}){
    let icon;
    const classIcon = classNames("icon__pt", className)
    if(display_informations.physical_mode === "Métro"){
        const style = {
            backgroundColor : "#" + display_informations.color,
            color : "#" + display_informations.text_color,
            height: "4rem",
            width: "4rem",
            borderRadius: "50%"
            // boxShadow :    "inset 0 0 25px " + "#" + section.display_informations.color
        } 
        icon = <div className={classIcon} style={style} >{display_informations.code}</div>
           
            
    }
    else if(display_informations.physical_mode === "RER" || display_informations.physical_mode ==="Train Transilien"){
        const style = {
            backgroundColor : "#" + display_informations.color,
            color : "#" + display_informations.text_color,
            height: "4rem",
            width: "4rem",
            borderRadius: "20%"
            // boxShadow :    "inset 0 0 25px " + "#" + section.display_informations.color
        } 
        icon = <div className={classIcon} style={style} >{display_informations.code}</div>
           
    }else if(display_informations.physical_mode === "Bus"){
        const style = {
            backgroundColor : "#" + display_informations.color,
            color : "#" + display_informations.text_color,
            height: "4rem",
            width: "fit-content",
            padding: ".8rem",
            borderRadius: "0%"
            // boxShadow :    "inset 0 0 25px " + "#" + section.display_informations.color
        } 
        icon = <div className={classIcon} style={style} >{display_informations.code}</div>
           
    }
    else if(display_informations.physical_mode === "Tramway"){
        const style = {
            backgroundColor : "#" + display_informations.color,
            color : "#" + display_informations.text_color,
            height: "4rem",
            width: "5rem",
            borderRadius: "0",
            borderTop : "solid 3px #FFFFFF",
            borderBottom : "solid 3px #FFFFFF"
            // boxShadow :    "inset 0 0 25px " + "#" + section.display_informations.color
        } 
        icon = <div className={classIcon} style={style} >{display_informations.code}</div>
        
        
    }else{
        const style = {
            backgroundColor : "#" + display_informations.color,
            color : "#" + display_informations.text_color,
            height: "4rem",
            borderRadius: "0" ,
            // width: "100%",
            width: "fit-content",
            padding: "0 1.5rem"

            // width: "7rem",
           
            // boxShadow :    "inset 0 0 25px " + "#" + section.display_informations.color
        } 
        icon =<div className={classIcon} style={style} >{display_informations.code}</div>
          
    }
    return icon;
        
    
}
export default PubTrIcon