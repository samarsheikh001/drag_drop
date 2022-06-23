import { useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes.js";
import { useState } from "react";
const style = {
  height: "12rem",
  width: "12rem",
  marginRight: "1.5rem",
  marginBottom: "1.5rem",
  color: "white",
  padding: "1rem",
  textAlign: "center",
  fontSize: "1rem",
  lineHeight: "normal",
  float: "left",
};
export const Dustbin = () => {
  const [domElements, setDomElements] = useState([]);
  const [renderableText, setRenderableText] = useState("");
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    drop: (item) => {
      console.log(item);
      const domElement = `<${item.domElement}> ${item.name}</${item.domElement}>`;
      setDomElements((oldArray) => [...oldArray, domElement]);
      return { name: "Dustbin" };
    },
    collect: (monitor) => {
      return {
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      };
    },
  }));
  const isActive = canDrop && isOver;
  let backgroundColor = "#222";
  if (isActive) {
    backgroundColor = "darkgreen";
  } else if (canDrop) {
    backgroundColor = "darkkhaki";
  }
  return (
    <div className="flex">
      <div
        ref={drop}
        style={{ ...style, backgroundColor }}
        data-testid="dustbin"
        onInput={(e) => {
          const editedText = e.currentTarget.textContent;
          setRenderableText(editedText);
        }}
      >
        {domElements.map((element, index) => (
          <div contentEditable={true} key={index}>
            {element}
          </div>
        ))}
      </div>
      <div className=" w-96 p-10">
        Renderer
        <div
          className="bg-red-200 p-2"
          dangerouslySetInnerHTML={{ __html: renderableText }}
        ></div>
      </div>
    </div>
  );
};
