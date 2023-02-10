import {React, useState} from 'react';

const Slides = ({slides}) =>{
    const [current, setCurrent] = useState(0)
    const [restart, setRestart] = useState(true);
    const [next, setNext] = useState(false);
    const [prev, setPrev] = useState(true);
    const leng = slides.length -1; 

    const click_restart = () =>{
        if (current !== 0) {
            setRestart(true)
            setNext(false)
            setPrev(true)
            setCurrent(0)
        } 
    }
    const click_next = () =>{
        
        if (current + 1 === leng) {
            setRestart(false)
            setNext(true)
            setPrev(false)
            setCurrent(current + 1) 
        }else {
            setRestart(false)
            setNext(false)
            setPrev(false)
            setCurrent(current + 1) 
        };
        
    }
    const click_prev = () =>{
        if (current - 1 === 0) {
            setRestart(true)
            setNext(false)
            setPrev(true)
            setCurrent(current - 1) 
        }else {
            setRestart(false)
            setNext(false)
            setPrev(false)
            setCurrent(current - 1) 
        }
    }
    return(
        
        <div>
            <button 
                type = 'button'
                name = "reset-button"
                disabled = {restart}
                onClick={click_restart}>
                RESTART
            </button>
            <button 
                type = 'button'
                name = "prev-button"
                disabled = {next}
                onClick={click_next}>
                NEXT
            </button>
            <button 
                type = 'button'
                name = "next-button"
                disabled = {prev}
                onClick={click_prev}>
                PREV
            </button>
            <div>
                <h1>{slides[current].title}</h1>
                <p>{slides[current].text}</p>
            </div>
            
        </div>

    )
};

export default Slides;
