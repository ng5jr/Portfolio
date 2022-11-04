import React, { Suspense } from "react";
import World from "../../../TestSpline";

const StorySection = ({ index, swipe, setSwipe }) => {
  const active = index;
  return (
    <div
      // onTouchEnd={() => setSwipe(true)}
      style={{
        width: "fit-content",
        height: "100%",

        margin: "0 auto",
      }}
    >
      {active && (
        <div
          // onMouseEnter={() => setSwipe(false)}
          // onMouseLeave={() => setSwipe(true)}
          // onTouchEnd={() => setSwipe(false)}
          className="swiper-no-swiping"
        >
          <World />
        </div>
      )}
    </div>
  );
};

export default StorySection;
