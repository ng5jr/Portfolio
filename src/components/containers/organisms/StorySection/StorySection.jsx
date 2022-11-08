import React, { Suspense, useEffect, useRef, useState } from "react";
import {
  InformationWrapper,
  PageWrapper,
  InfoTitle,
  ScrollDown,
  ScrollUp,
  CardWrapper,
  InteractTitle,
  TopTitles,
} from "./StorySection.styles";
import Globe from "../../world/WorldGlobe";
import { MdLocationOn } from "react-icons/md";
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";

const StorySection = ({ index }) => {
  const active = index;
  const scrollElement = useRef(null);
  const [markerData, setMarkerData] = useState(undefined);

  return (
    <PageWrapper>
      {active && (
        <>
          <div className="swiper-no-swiping">
            <Globe setData={setMarkerData} />
          </div>

          <CardWrapper>
            {markerData ? (
              <>
                <ScrollUp
                  onClick={() => {
                    scrollElement.current.scroll({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                >
                  <FaArrowAltCircleUp />
                </ScrollUp>
                <InformationWrapper ref={scrollElement}>
                  <TopTitles>
                    <InfoTitle>
                      LOCATION{" "}
                      <span>
                        <MdLocationOn />
                      </span>
                      <p>
                        {markerData.city}, {markerData.year}
                      </p>
                    </InfoTitle>
                  </TopTitles>

                  <InfoTitle>
                    DESCRIPTION <p>{markerData.description}</p>
                  </InfoTitle>
                </InformationWrapper>
                <ScrollDown
                  onClick={() => {
                    scrollElement.current.scroll({
                      top: 150,
                      behavior: "smooth",
                    });
                  }}
                >
                  <FaArrowAltCircleDown />
                </ScrollDown>
              </>
            ) : (
              <InteractTitle>
                Story <span>Interact with the map to know my story</span>
              </InteractTitle>
            )}
          </CardWrapper>
        </>
      )}
    </PageWrapper>
  );
};

export default StorySection;
