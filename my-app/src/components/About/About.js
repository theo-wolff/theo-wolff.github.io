import React from 'react'
import "./About.css"
import bitmoji from "../../img/bitmoji.jfif"
import chesspiece from "../../img/chess-piece.png"
import computer from "../../img/computer.svg"
import cvFile from "../../img/cv-file.svg"
import cv_WT from "../../img/CV_Theo_Wolff.pdf"


const About = () => {
  return (
    <>
    <div className='about'>
      <h2 className='title-about'>About me</h2>
      <div className='about-bar'></div>
      <div className='container'>
        <img className='img-bitmoji' src={bitmoji}></img>
        <ul className='about-items'>
          <li className='about-item'>
            <img className="about-img" src={computer}></img>
            <p>I am an engineering student with a keen interest in computer science. 
            I'm passionate about programming and aspire to specialize in software development.
            My aim is to contribute to innovative tech projects and further enhance my skills in this field.</p>
          </li>
          <li className='about-item'>
          <img className="about-img" src={chesspiece}></img>
            <p>I really like running, traveling, and playing chess. Running gives me clarity and strength, travel opens my mind to new horizons, and chess sharpens my strategic thinking</p>
          </li>
          <li className='about-item-cv'>
            <div class="light-button">
              <a href={cv_WT} target="_blank" class="bt">
                <div class="light-holder">
                  <div class="dot"></div>
                  <div class="light"></div>
                </div>
                <div class="button-holder">
                <svg
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="45.057px"
                    height="45.057px"
                    viewBox="0 0 45.057 45.057"
                    style={{
                      enableBackground: "new 0 0 45.057 45.057",
                    }}
                    xmlSpace="preserve"
                  >
                    <g>
                      <g id="_x35_8_24_">
                        <g>
                          <path d="M19.558,25.389c-0.067,0.176-0.155,0.328-0.264,0.455c-0.108,0.129-0.24,0.229-0.396,0.301 c-0.156,0.072-0.347,0.107-0.57,0.107c-0.313,0-0.572-0.068-0.78-0.203c-0.208-0.137-0.374-0.316-0.498-0.541 c-0.124-0.223-0.214-0.477-0.27-0.756c-0.057-0.279-0.084-0.564-0.084-0.852c0-0.289,0.027-0.572,0.084-0.853 c0.056-0.281,0.146-0.533,0.27-0.756c0.124-0.225,0.29-0.404,0.498-0.541c0.208-0.137,0.468-0.203,0.78-0.203 c0.271,0,0.494,0.051,0.666,0.154c0.172,0.105,0.31,0.225,0.414,0.361c0.104,0.137,0.176,0.273,0.216,0.414 c0.04,0.139,0.068,0.25,0.084,0.33h2.568c-0.112-1.08-0.49-1.914-1.135-2.502c-0.644-0.588-1.558-0.887-2.741-0.895 c-0.664,0-1.263,0.107-1.794,0.324c-0.532,0.215-0.988,0.52-1.368,0.912c-0.38,0.392-0.672,0.863-0.876,1.416 c-0.204,0.551-0.307,1.165-0.307,1.836c0,0.631,0.097,1.223,0.288,1.77c0.192,0.549,0.475,1.021,0.847,1.422 s0.825,0.717,1.361,0.949c0.536,0.23,1.152,0.348,1.849,0.348c0.624,0,1.18-0.105,1.668-0.312 c0.487-0.209,0.897-0.482,1.229-0.822s0.584-0.723,0.756-1.146c0.172-0.422,0.259-0.852,0.259-1.283h-2.593 C19.68,25.023,19.627,25.214,19.558,25.389z" />
                          <polygon points="26.62,24.812 26.596,24.812 25.192,19.616 22.528,19.616 25.084,28.184 28.036,28.184 30.713,19.616 28,19.616  " />
                          <path d="M33.431,0H5.179v45.057h34.699V6.251L33.431,0z M36.878,42.056H8.179V3h23.706v4.76h4.992L36.878,42.056L36.878,42.056z" />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </a>
            </div>
            {/* <a href={cv_WT} target='_blank'><img className="about-img" src={cvFile}></img></a> */}
          </li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default About