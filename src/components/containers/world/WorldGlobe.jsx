import React, { useEffect, useState, useRef } from "react";
import * as THREE from "three";
import * as countriesData from "../../../data/countries.json";
import ReactGlobe from "react-globe.gl";
import COLORS from "../../../theme/constants/colors";

import defaultMarkers from "../../../data/positionMarkers";
import { DeviceContext } from "../../../context/DeviceContext";
import { useContext } from "react";
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

  const { isMobile } = useContext(DeviceContext);
  return (
    <>
      <div onMouseEnter={() => {}} className="wrapper">
        <ReactGlobe
          animateIn={false}
          ref={globeEl}
          height={isMobile ? 360 : 400}
          width={isMobile ? 360 : 400}
          customLayerData={markers}
          backgroundColor={"rgb(31, 31, 32)"}
          customThreeObject={(d) =>
            new THREE.Mesh(
              new THREE.OctahedronGeometry(d.radius),
              new THREE.MeshPhongMaterial({
                color: d.color,
                specular: "black",
                shininess: 50,
                reflectivity: 10,
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
            markers.map((marker) => {
              marker.color = "#faa60a";
            });
            d.color = "red";
            globeEl.current.pointOfView(
              {
                lat: d.lat,
                lng: d.lng,
                altitude: 1.8,
              },
              [1000]
            );
          }}
          onCustomLayerHover={(d) => {
            globeEl.current.controls().autoRotate = false;
          }}
          globeMaterial={
            new THREE.MeshStandardMaterial({
              color: `${COLORS.primary}`,
              transparent: true,
              opacity: 0.8,
            })
          }
          atmosphereColor="#faa60a"
          atmosphereAltitude={0.2}
          hexPolygonsData={countries.features}
          hexPolygonResolution={3}
          hexPolygonMargin={0.2}
          hexPolygonColor={() => `#ffffff`}
          hexPolygonAltitude={() => 0.05}
        />
      </div>
    </>
  );
}

export default Globe;
