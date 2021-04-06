import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";




const useStyles = makeStyles((theme) => ({ root: { width: 1100 }, margin: { height: theme.spacing(7) } }));

const marks = [
  { value: 0, label: "$0" },
  { value: 250000, label: "$250,000" },
  { value: 500000, label: "$500,000" },
  { value: 750000, label: "$750,000" },
  { value: 1000000, label: "$1M+" }
];

export default function Waterfall11() {

  const classes = useStyles();
  const [value, setValue] = useState(0);

  function valuetext(value) {
    let abc = Math.round((value / 1000000) * 100)
    setValue(value);
    return `${abc}%`;
  }

  return (
    <div>
      <div className="mpartial_section css-1jnmlvi-WaterFall">
        <div className="container">
          <div className="title center">
            <div className="row">
              <div className="col">
                <h2 className="section_title_text">
                  Waterfall Fee Structure
                      </h2>
              </div>
            </div>
          </div>

          <div className={classes.root}>

            <Typography id="discrete-slider-custom" gutterBottom> <h3>Estimate Grand <br /> Total</h3>
            </Typography>
            <Slider
              defaultValue={0} getAriaValueText={valuetext}
              aria-labelledby="discrete-slider-custom"
              step={1}
              valueLabelDisplay="on"
              valueLabelFormat={valuetext}
              marks={marks}
              min={0}
              max={1000000} />
          </div>
          <p className="section_title_description css-ulgnwk-WaterFall">
            Drag the slider around based on what you think it will cost to repair the property.
                  <br />
                  Move forward based on the estimated fee structure below.
                </p>
          <div className="partial_fee_btn">
            <i className="info_popup">
              i
                  </i>
            <label> {value} </label> <br />
            <span>
              mpartial Fee
                  </span>
          </div>
          <p className="waterfall_info_text">
            [$750 Minimum]
                </p>
        </div>
      </div>
    </div>
  )
}
