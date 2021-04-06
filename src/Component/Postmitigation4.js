import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
  ReactCompareSliderImage,
} from "react-compare-slider";

export default function Postmitigation4() {
  return (
    <div className="mt-5 mb-5">
      <ReactCompareSlider
        handle={
          <ReactCompareSliderHandle
            buttonStyle={{
              backdropFilter: undefined,
              background:
                "#28a745",
              border: 0,
              color:
                "#fff",
            }}
          />
        }
        itemOne={
          <ReactCompareSliderImage
            src="assets/image/mitigation2.jpg"
            alt="one"
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            src="assets/image/mitigation.jpg"
            alt="two"
          />
        }
        style={{
          display:
            "flex",
          width:
            "100%",
          height:
            "40%",
          margin:
            "auto",
        }}
      />
    </div>
  );
}
