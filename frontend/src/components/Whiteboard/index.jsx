import React, { useEffect, useLayoutEffect, useState } from 'react'
import "./index.css"
import rough from 'roughjs';

const roughGenerator = rough.generator();

const Whiteboard = ({ canvasRef, ctxRef,  elements, setElements}) => {
    
    const [isDrawing, setIsDrawing] = useState(false)

    useEffect(()=>{
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d")

        ctxRef.current = ctx;
    },[]);

    useLayoutEffect(()=>{
        const roughCanvas = rough.canvas(canvasRef.current);

        elements.forEach((element)=>{
            roughCanvas.linearPath(element.path)
        });
    })

    const handleMouseDown = (e) =>{
        // console.log("Mouse Down", e)
        const {offsetX, offsetY} = e.nativeEvent;
        
        setElements((prevElements)=>[
            ...prevElements,
            {
                type: "pencil",
                offsetX,
                offsetY,
                path: [[offsetX,offsetY]],
                stroke: "black",
            },
        ])

        setIsDrawing(true)
    }

    const handleMouseMove = (e) =>{
        // console.log("Mouse Move", e)
        const { offsetX, offsetY } = e.nativeEvent;
        
        if(isDrawing)
        {
            //pencil by default as static
            const {path} = elements[elements.length - 1];
            const newPath = [...path,[offsetX,offsetY]];

            setElements((prevElements)=>
                prevElements.map((ele,index)=>{
                    if(index === elements.length - 1){
                        return{
                            ...ele,
                            path: newPath
                        }
                    }
                    else{
                        return ele;
                    }
                })
            )
        }
    }

    const handleMouseUp = (e) =>{
        // console.log("Mouse Up", e)
        setIsDrawing(false);
        
    }
    
    return (
        <canvas
            ref={canvasRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            className='border border-dark border-3 h-100 w-100'>

        </canvas>
    )
}

export default Whiteboard
