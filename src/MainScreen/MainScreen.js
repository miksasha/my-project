import { useRef } from 'react';
import { useEffect } from 'react';
import {observer} from "mobx-react-lite"
import './MainScreen.css'
import canvasState from "../store/CanvasState"
import lineState from "../store/LineState"
import Line from '../Tool/Line';


const MainScreen = observer( () => {
    const canvasRef = useRef()

    useEffect(() =>{
        canvasState.setCanvas(canvasRef.current)
        lineState.setLine(new Line(canvasRef.current))
    }, []);

    return (
        <div className="main" id="main">
           <canvas className='canvas-container' id="canvas" ref={canvasRef}>Your browser is not supported.</canvas>
           <button className='button'>collapse lines</button>
        </div>
    );
});

export default MainScreen;
