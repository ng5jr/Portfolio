import Spline from "@splinetool/react-spline";
import React, { useState, useRef } from "react";

const data = [
  {
    id: "1de6d683-2988-4781-a47b-7e900eaea516",
    title: "Necochea",
    info: "Donde nací",
  },
  {
    id: "99ea51fe-a3f6-46b0-bc6a-2c1004bf0c22",
    title: "Buenos Aires",
    info: "Donde estudie",
  },
  {
    id: "dcc5e97b-1c7f-4d33-80a5-eac8c5611b19",
    title: "Basilicata",
    info: "Donde nacieron mis abuelos",
  },
];

export default function World() {
  const [modal, setModal] = useState(false);
  const [pointId, setPointId] = useState("");
  const [dataModal, setDataModal] = useState({ id: "", title: "", info: "" });
  const spline = useRef();

  function filterCity(id) {
    var output = data.filter((city) => city.id === id);
    setDataModal(output);
  }

  function onLoad(splineApp) {
    // save the app in a ref for later use
    spline.current = splineApp;
  }

  function triggerAnimation(e) {
    setModal(false);
    // @ts-ignore
    spline.current._scene.children.map((objecto) => {
      if (objecto.name === "Pyramid") {
        // @ts-ignore
        spline.current.emitEvent("keyUp", objecto.uuid);
      }
    });
    // @ts-ignore
    spline.current.emitEvent("keyDown", e.target.id);
    filterCity(e.target.id);
    setTimeout(() => {
      setModal(!modal);
    }, 500);

    setPointId(e.target.id);
  }

  function cancelAnimation() {
    // @ts-ignore
    spline.current.emitEvent("keyUp", pointId);
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        placeItems: "center",
      }}
    >
      {modal && (
        <div
          className="modal"
          style={{
            width: "150px",
            height: "150px",
            backgroundColor: "brown",
            position: "absolute",
            padding: "20px",
            color: "white",
          }}
        >
          <span
            onClick={() => {
              setModal(!modal);
              cancelAnimation();
            }}
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              background: "blue",
              width: "10px",
              height: "10px",
            }}
          >
            X
          </span>
          {dataModal[0].title}
        </div>
      )}

      <Spline
        onMouseDown={triggerAnimation}
        onKeyDown={cancelAnimation}
        onLoad={onLoad}
        scene="https://prod.spline.design/tm8etFYXk83gqNyZ/scene.splinecode"
      />
    </div>
  );
}
