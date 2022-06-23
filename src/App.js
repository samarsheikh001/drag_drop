import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useDrag } from "react-dnd";

import "./App.css";
import { Container } from "./Container.jsx";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Container/>
      </div>
    </DndProvider>
  );
}

export default App;
