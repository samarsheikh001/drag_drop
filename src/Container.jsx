import { memo } from "react";
import { Box } from "./Box.js";
import { Dustbin } from "./Dustbin.jsx";
export const Container = memo(function Container() {
  return (
    <div className="flex">
      <div
        className="flex flex-col"
        style={{ overflow: "hidden", clear: "both" }}
      >
        <Box name="Heading" domElement="h" />
        <Box name="Paragraph" domElement="p" />
        <Box name="Quote" domElement="blockquote" />
      </div>
      <div style={{ overflow: "hidden", clear: "both" }}>
        <Dustbin />
      </div>
    </div>
  );
});
