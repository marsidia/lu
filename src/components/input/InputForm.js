import TextInput from "./TextInput";
import { changeDeparture, changeArrival, changeRepresents, changeDatetime } from "../../store";
import RadioInput from "./RadioInput";
import DateInput from "./DateInput";
import { useDispatch, useSelector } from "react-redux";
import TimeInput from "./TimeInput";
import Button from "./Button";
import { useState } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger)



function InputForm({onSubmit}){
    const formref = useRef(null)
    useEffect(() => {
        const el = formref.current
        gsap.fromTo(el, {transform: "translateY(20rem)"}, { transform: "translateY(0)", duration: 1, scrollTrigger : {
            trigger: el,
            markers: true,
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
            // pin: el

        }})
    }, [])


    const dispatch = useDispatch()
    const state = useSelector((state) => {
        return state.form;
    })

    //text entry
    const onChangeDeparture = (entry, place = null) => {
        dispatch(changeDeparture({entry, place}))
        console.log(state.departurePlace)
    }
    
    const onChangeArrival = (entry, place = null) => {
        dispatch(changeArrival({entry,place}))
       
    };

    const getDeparture = () => {
        return state.departure
    }

    const getArrival = () => { 
        return state.arrival
    }


    //radio entry
    const departure = "departure"
    const arrival = "arrival"
    const radioName = "represents"


    const onChangeRepDeparture = () => {
        dispatch(changeRepresents(departure))
    }

    const onChangeRepArrival = () => {
        dispatch(changeRepresents(arrival))
    }
    
    const isCheckedDeparture = () => {
        return state.represents === departure;
    }
    const isCheckedArrival = () => {
        return state.represents === arrival;
    }

    //datetime
    const onChangeDatetime = (date) => {
        
        dispatch(changeDatetime(date.toISOString()))

    }

    const getDatetime = () => {
        // console.log(state.datetime)
        return new Date(state.datetime)
    }

    const [depError, setDepError] = useState(false)
    const [arrError, setArrError] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("bottun clicked")
        setArrError(false)
        setDepError(false)
        console.log(state.departurePlace)
        if(!state.departurePlace){
            
            setDepError(true)
            return
        }
        if(!state.arrivalPlace){
            setArrError(true)
            return
        }
        onSubmit(state)




    }
   

    return(
        <div className="input" >

            <form className="form" onSubmit={handleSubmit} ref = {formref} id="input">
                <div className="form__groups">
                    <div className="form__text-inputs-group">
                        <TextInput primary err = {depError} onChange = {onChangeDeparture} getValue = {getDeparture}>Departure</TextInput>
                        <TextInput secondary err = {arrError} onChange = {onChangeArrival} getValue = {getArrival}>Arrival</TextInput>
                    </div>
                    <div className="form__radio-group">
                        <RadioInput primary onChange = {onChangeRepDeparture} isChecked = {isCheckedDeparture} name ={radioName} >
                        Leave After
                        </RadioInput>
                        <RadioInput secondary onChange = {onChangeRepArrival} isChecked = {isCheckedArrival} name= {radioName}>
                        Arrive Before
                        </RadioInput>
                    </div>
                    <div className="form__datetime-group">
                        <DateInput primary={isCheckedDeparture()} secondary={isCheckedArrival()} onChange = {onChangeDatetime} getValue = {getDatetime} />
                        <TimeInput primary={isCheckedDeparture()} secondary={isCheckedArrival()} onChange = {onChangeDatetime} getValue = {getDatetime} />
                    </div>
                </div>
                <Button>Search routes</Button>
            </form>
         </div>
    )
}
export default InputForm;