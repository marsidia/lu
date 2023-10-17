import train from '../img/train-draw.png'
import gsap from 'gsap';
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)




function Header(){
    const titleref = useRef(null)
    useEffect(() => {
        const el = titleref.current
        gsap.fromTo(el, {transform: "translateY(30rem)", opacity: 0}, { transform: "translateY(0)",opacity:1, duration: 3, scrollTrigger : {
            trigger: el,
            markers: true,
            start: "top 90%",
            end: "top 30%",
            scrub: 1,
            // pin: el

        }})
    }, [])
    
    return (
        <div className="header">

                <div className="header__img-container">
                    <img src={train} alt="train" className="header__img" />
                </div>
                <h1 className="heading-1"ref = {titleref}>Lost Underground?</h1>

        </div>
    );
}
export default Header;