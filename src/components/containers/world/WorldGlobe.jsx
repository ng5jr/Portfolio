import React, { useEffect, useState, useRef } from "react";
import * as THREE from "three";
import * as countriesData from "../../../data/countries.json";
import ReactGlobe from "react-globe.gl";

import defaultMarkers from "../../../data/positionMarkers";

function Globe({ setData }) {
  const globeEl = useRef();
  const [countries, setCountries] = useState({ features: [] });
  const [markers, setMarkers] = useState([]);
  useEffect(() => {
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 0.5;
    globeEl.current.pointOfView({ altitude: 1.8 });

    globeEl.current.controls().enableZoom = false;
    setMarkers(defaultMarkers);
    setCountries(countriesData);
  }, []);

  return (
    <>
      <div onMouseEnter={() => {}} className="wrapper">
        <ReactGlobe
          animateIn={false}
          ref={globeEl}
          height={360}
          width={360}
          customLayerData={markers}
          backgroundColor={"rgb(31, 31, 32)"}
          customThreeObject={(d) =>
            new THREE.Mesh(
              new THREE.OctahedronGeometry(d.radius),
              new THREE.MeshPhongMaterial({
                color: "red",
                specular: "black",
                shininess: 50,
              })
            )
          }
          customThreeObjectUpdate={(obj, d) => {
            Object.assign(
              obj.position,
              globeEl.current.getCoords(d.lat, d.lng, d.alt)
            );
          }}
          onCustomLayerClick={(d) => {
            setData(d);
            d.color = "white";
            console.log(d);
          }}
          onCustomLayerHover={(d) => {
            globeEl.current.controls().autoRotate = false;
          }}
          globeMaterial={
            new THREE.MeshStandardMaterial({
              color: "#FBAB7E",
              transparent: true,
              opacity: 0.8,
            })
          }
          atmosphereColor="#ffffff"
          atmosphereAltitude={0.2}
          hexPolygonsData={countries.features}
          hexPolygonResolution={3}
          hexPolygonMargin={0.1}
          hexPolygonColor={() => `#ffffff`}
          hexPolygonAltitude={() => 0.03}
        />
      </div>
    </>
  );
}

export default Globe;
