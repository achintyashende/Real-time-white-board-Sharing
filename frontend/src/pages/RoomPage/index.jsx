import { useRef, useState } from "react"
import "./index.css"
import Whiteboard from "../../components/Whiteboard";

const RoomPage = () => {

    const canvasRef = useRef(null);
    const ctxRef = useRef(null);

    const [tool, setTool] = useState("pencil");
    const [color, setColor] = useState("black")
    const [elements, setElements] = useState([])

    return (
        <div className="row">
            <h1 className=" text-center py-4">Whiteboard Sharing App  
                <span className="text-primary"> [Users Online : 0]</span>
            </h1>
            <div className="col-md-10 gap-3 px-5 mx-auto mb-4 d-flex align-items-center justify-content-around">
                <div className="col-md-4 mx-auto d-flex justify-content-between gap-1">
                    <div className=" d-flex gap-1">
                        <label htmlFor="pencil">Pencil</label>
                        <input 
                        type="radio" 
                        name="tool" 
                        checked = {tool === "pencil"}
                        value="pencil" 
                        onChange={(e) => setTool(e.target.value)} 
                        />
                    </div>
                    <div className=" d-flex gap-1">
                        <label htmlFor="pencil">Line</label>
                        <input 
                        type="radio" 
                        name="tool" 
                        checked={tool === "line"}
                        value="line" 
                        onChange={(e) => setTool(e.target.value)} 
                        />
                    </div>
                    <div className=" d-flex gap-1">
                        <label htmlFor="pencil">Rectangle</label>
                        <input 
                        type="radio" 
                        name="tool" 
                        checked={tool === "rect"}
                        value="rect" 
                        onChange={(e) => setTool(e.target.value)} 
                        />
                    </div>
                    <div className=" d-flex gap-1">
                        <label htmlFor="pencil">Circle</label>
                        <input 
                        type="radio" 
                        name="tool" 
                        checked={tool === "circle"}
                        value="circle" 
                        onChange={(e) => setTool(e.target.value)} 
                        />
                    </div>
                </div>
                {/* color palate */}
                <div className="col-md-3 mx-auto">
                    <div className="d-flex gap-1 align-items-center justify-content-center">
                        <label htmlFor="color">Select Color: </label>
                        <input type="color"
                        id="color" 
                        className="mt-1"
                        value={color}
                        onChange={(e)=> ReadableStreamDefaultController(e.target.value)}
                        />
                    </div>
                </div>
                {/* undo and redo buttons */}
                <div className=" col-md-3 d-flex gap-2">
                    <button className="btn btn-primary mt-1">Undo</button>
                    <button className="btn btn-outline-primary mt-1">Redo</button>
                </div>
                {/* clear canvas button */}
                <div className="col-md-2">
                    <button className="btn btn-danger">Clear Canvas</button>
                </div>
            </div>

            {/* Whiteboard */}
            <div className="col-md-10 mt-4 mx-auto canvas-box">
                <Whiteboard 
                canvasRef={canvasRef} 
                ctxRef={ctxRef}
                elements = {elements}
                setElements = {setElements}
                tool = {tool}

                />
            </div>
        </div>
    )
}

export default RoomPage
