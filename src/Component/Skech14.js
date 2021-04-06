import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import Img5 from '../Edit/Img5.jpg'

import Skch15 from './Skch15'


const slideImages = [Img5, Img5, Img5, Img5, Img5, Img5];


export default function Skech14() {

  return (
    <div>
      <div className="deliver-slider">
        <h3 className="widget-title sub mt-1">
          Immaculate. Impartial. [ESX]
          </h3>

        <div className="carousel slide">
          <ol className="carousel-indicators">
            <li className="active" />
            <li className />
            <li className />
            <li className />
            <li className />
            <li className />
          </ol>

          {/* <div className="carousel-inner"> */}
          <div>
            <div className="slide-container">
              <Slide>
                <div className="each-slide">
                  <div className="image-container">
                    <img src={slideImages[0]} />
                  </div>
                  <h2>First Slide</h2>
                </div>

                <div className="each-slide">
                  <div className="image-container">
                    <img src={slideImages[1]} />
                  </div>
                  <h2>Second Slide</h2>
                </div>
                <div className="each-slide">
                  <div className="image-container">
                    <img src={slideImages[2]} />
                  </div>
                  <h2>Third Slide</h2>
                </div>
                <div className="each-slide">
                  <div className="image-container">
                    <img src={slideImages[3]} />
                  </div>
                  <h2>Four Slide</h2>
                </div>
                <div className="each-slide">
                  <div className="image-container">
                    <img src={slideImages[4]} />
                  </div>
                  <h2>Five Slide</h2>
                </div>
                <div className="each-slide">
                  <div className="image-container">
                    <img src={slideImages[5]} />
                  </div>
                  <h2>Six Slide</h2>
                </div>
              </Slide>
            </div>
          </div>
        </div>
      </div>

{/* Skch15 import here */}
             <Skch15 />       

    </div>
                    

  
  )
}
