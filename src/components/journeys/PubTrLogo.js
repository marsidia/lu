import tram from '../../img/tram.svg'
import train from '../../img/train.svg'
import bus from '../../img/bus.svg'
import rer from '../../img/rer.svg'
import metro from '../../img/metro.svg'
import classNames from 'classnames';

function PubTrLogo({display_informations, className}){
    const classLogo = classNames("icon__logo", className)
    let logo;
    if(display_informations.physical_mode === "Métro"){
        logo = <img className={classLogo} src={metro} alt="metro" />
    }else if(display_informations.physical_mode === "RER"){
        logo = <img className={classLogo} src={rer} alt="rer" />
        
    }else if(display_informations.physical_mode === "Bus"){
        logo = <img className={classLogo} src={bus} alt="bus" />
          
    }else if(display_informations.physical_mode === "Tramway"){
        logo = <img className={classLogo} src={tram} alt="tram" />
       
        
        
    } else if(display_informations.physical_mode === "TER / Intercités" || "Train Transilien"){
        logo = <img className={classLogo} src={train} alt="train" />
       
        
        
    }
    
    else{
       logo = <div>trhk</div>
          
    }
    return logo;
}
export default PubTrLogo