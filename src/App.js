import "./App.css";
import React from "react";
import Img1 from "./image/img1.jpg";
import Img2 from "./image/img2.jpg";
import Img3 from "./image/Image (3).jpg";
import Img4 from "./image/Image (4).jpg";
import Img5 from "./image/Image (5).jpg";
import Img6 from "./image/Image (6).jpg";
import Img7 from "./image/img7.jpg";
import Img8 from "./image/img8.jpg";
import Img9 from "./image/img9.jpg";
import Post from "./second/Second";
import { useContext } from "react";
import { DarkMode } from "./theme";
import { Link } from "react-router-dom";
import axios from "axios";
import {useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get("https://dummyapi.io/data/v1/post?limit=10", {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "app-id": "636a0100b23c1794f297d097",
        },
      });

      setData(res.data.data);

      console.log(res.data.data);
    } catch (err) {
      alert("dahiad yavul");
    }
  };
  const { ToggleSwitch, darkMode } = useContext(DarkMode);
  console.log(darkMode);
  return (
    <div className="App" style={{ backgroundColor: darkMode && "gray" }}>
      <div className="navbar">
        <Logo />
        <div className="navbar-right">
          <label className="switch">
            <input type="checkbox" onChange={ToggleSwitch}></input>
            <span class="slider-round"></span>
          </label>
          <div className="nv-text" style={{ color: darkMode && "black" }}>
            Product
          </div>
          <div className="nv-text" style={{ color: darkMode && "black" }}>
            Services
          </div>
          <div className="nv-text" style={{ color: darkMode && "black" }}>
            Contact
          </div>
          <div className="nv-text" style={{ color: darkMode && "black" }}>
            Log in
          </div>
          <div className="nv-tex">
            <p>Get Access</p>
          </div>
        </div>
      </div>
      <div className="Head">
        <div className="head2">
          <h1 style={{ color: darkMode && "white" }}>Blog posts</h1>
          <p style={{ color: darkMode && "white" }}>
            Our latest updates and blogs about managing your team
          </p>
        </div>
      </div>
      <div className="Nam">
        <h1>Hi</h1>
        <button onClick={getData}>send request</button>

        {data.map((cur) => (
          <div>{cur.text}</div>
        ))}
      </div>
      <div className="margin"></div>
      <div className="posts">
        <div className="post2">
          <Link to="/pro">Product</Link>
          <Post
            image={Img1}
            text={
              "There are times when our work impacts us deeply — sometimes in ways we neither acknowledge nor understand"
            }
            heading={"The Emotional Toll of Being in UX"}
            name={"Wade Warren"}
          />
          <Post
            image={Img2}
            text={
              "Our latest updates and blogs about managing your team Our latest updates and blogs about managing your team"
            }
            heading={"10 secret tips for managing a team remotely"}
            name={"Bessie Cooper"}
          />
          <Post
            image={Img3}
            text={
              "How the iPhone popularized steampunk… and how the iPhone killed it off."
            }
            heading={"What Ever Happened to Steampunk?"}
            name={"Courtney Henry"}
          />
        </div>
      </div>
      <div className="posts">
        <div className="post2">
          <Post
            image={Img4}
            text={
              "How to use centuries of unfair advantage to make the world a more equal place"
            }
            heading={"The Emotional Toll of Being in UX"}
            name={"Darlene Robert"}
          />
          <Post
            image={Img5}
            text={
              "It’s 2020, but women designers still face lower pay and less opportunity. What gives?"
            }
            heading={"10 secret tips for managing a team remotely"}
            name={"Leslie Alexander"}
          />
          <Post
            image={Img6}
            text={"Our latest updates and blogs about managing your team"}
            heading={"What Ever Happened to Steampunk?"}
            name={"Eleanor Pena"}
          />
        </div>
      </div>
      <div className="posts">
        <div className="post2">
          <Post
            image={Img7}
            text={"Our latest updates and blogs about managing your team"}
            heading={"The Emotional Toll of Being in UX"}
            name={"Jane Cooper"}
          />
          <Post
            image={Img8}
            text={
              "Artists and designers are working to address a major problem for marginalized communities in the data economy: ‘If the data does not exist…"
            }
            heading={"10 secret tips for managing a team remotely"}
            name={"Jenny Wilson"}
          />
          <Post
            image={Img9}
            text={
              "You might not know the music, but designers have certainly taken notice of this small but visceral movement from the late ’80s"
            }
            heading={"What Ever Happened to Steampunk?"}
            name={"Jacob Jones"}
          />
        </div>
      </div>
      <div className="nxt-page">
        <div className="cntr">
          <button>
            Next
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="footer">
        <div className="footer1">
          <div className="left">
            <div className="footer-logo">
              <Logo />
            </div>
            <div className="social">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
              <p>Instagram</p>
            </div>
            <div className="social">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
              </svg>
              <p>Facebook</p>
            </div>
            <div className="social">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
              </svg>
              <p>Twitter</p>
            </div>
            <div className="social">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
              <p>Instagram</p>
            </div>
            <div className="social">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
              </svg>
              <p>Facebook</p>
            </div>
            <div className="social">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
              </svg>
              <p>Twitter</p>
            </div>
          </div>
          <div className="center">
            <div className="c-left">
              <div className="Tag">Use cases</div>
              <div className="social">UI Design</div>
              <div className="social">UX Design</div>
              <div className="social">Prototyping</div>
              <div className="social">UI Design</div>
              <div className="social">UX Design</div>
              <div className="social">Prototyping</div>
            </div>
            <div className="c-left">
              <div className="Tag">Explore</div>
              <div className="social">Figma</div>
              <div className="social">Customers</div>
              <div className="social">Why I Love Figma</div>
              <div className="social">Figma</div>
              <div className="social">Customers</div>
              <div className="social">Why I Love Figma</div>
            </div>
            <div className="c-left">
              <div className="Tag">Resources</div>
              <div className="social">Community Resources Hub</div>
              <div className="social">Support</div>
              <div className="social">Education</div>
              <div className="social">Community Resources Hub</div>
              <div className="social">Support</div>
              <div className="social">Education</div>
            </div>
          </div>
          <div className="right">
            <div className="mail">
              <div className="sub">Subscribe to our newsletter</div>
              <div>
                <input placeholder="Email" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function Logo() {
  const { ToggleSwitch, darkMode } = useContext(DarkMode);

  return (
    <div className="navbar-left">
      <p style={{ color: darkMode && "white" }}>Team</p>
    </div>
  );
}

export default App;
