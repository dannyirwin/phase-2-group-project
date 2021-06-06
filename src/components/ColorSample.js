import { useRef } from "react";
import { ClipboardOutline } from "react-ionicons";

export default function ColorSample({ color, clipBoardEnabled }) {
  const hexRef = useRef(null);

  return (
    <div className="ColorSample">
      <div
        className="color-sample-display"
        style={{
          backgroundColor: color
        }}
      >
        <div className="color-sample-details">
          <p ref={hexRef}>{color}</p>
          {clipBoardEnabled ? (
            <ClipboardOutline color={"rgba(0, 0, 0, 0.7)"} />
          ) : null}
        </div>
      </div>
    </div>
  );
}
